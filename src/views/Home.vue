<template>
  <div  class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer">
    <div class="flex justify-center items-center h-screen" v-if="user">
      <div >
        <video ref="videoPlayer" @timeupdate="handleVideoTimeUpdate" @ended="handleVideoEnded"  controls width="600" height="450">
          <source :src="videoSource" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <h1  class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-at-light-green duration-200 border-solid
      border-2 border-transparent" >Contador de reproducciones: {{ dataLoaded ? data[0].counter : 'Cargando...' }}</h1>

      </div>
    </div>
  </div>
  
</template>

<script>
import videoSource from '@/assets/images/vidio.mp4';
import store from "../store/index";
import { computed, ref, onMounted } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
  name: "home",
  setup() {
    const router = useRouter();
    const data = ref([]);
    const dataLoaded = ref(false);
    const user = computed(() => store.state.user);

    const getData = async () => {
      try {
        const { data: counter, error } = await supabase.from("contador").select("*");
        if (error) throw error;
        data.value = counter;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };

    const incrementCounter = async () => {
      try {
        const { data, error } = await supabase.rpc('increment', { x: 1, row_id: 1 });
        if (error) {
          throw error;
        }
        console.log(data); // Aquí puedes manejar la respuesta según tus necesidades
        getData();
      } catch (error) {
        console.error("Error incrementing counter:", error);
        // Puedes manejar el error de alguna manera específica aquí
      }
    };

    // Se usa onMounted para garantizar que getData se ejecute después de que el componente esté montado.
    onMounted(() => {
      if (!user.value) {
        router.push("/login"); // Redirige a la página de inicio de sesión si el usuario no está autenticado.
      } else {
        getData();
      }
    });

    return { user, data, dataLoaded, incrementCounter };
  },
  data() {
    return {
      videoSource: videoSource,
      contador: 0,
      seHaReproducido60PorCiento: false,
    };
  },
  methods: {
    async handleVideoTimeUpdate() {
      try {
        const videoElement = this.$refs.videoPlayer;
        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration;
        const percentagePlayed = (currentTime / duration) * 100;

        console.log(percentagePlayed);

        if (percentagePlayed > 60 && !this.seHaReproducido60PorCiento) {
          // Incrementa el contador en 1
          this.contador += 1;
          this.seHaReproducido60PorCiento = true;

          // Actualiza el contador en la base de datos
          await this.incrementCounter();
        } else if (percentagePlayed < 60) {
          // Restablecer la variable si el video retrocede antes del 60%
          this.seHaReproducido60PorCiento = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleVideoEnded() {
      // Restablecer la variable cuando el video ha terminado
      this.seHaReproducido60PorCiento = false;
    },
    // Puedes agregar la función updateCounter aquí
  },
};
</script>
