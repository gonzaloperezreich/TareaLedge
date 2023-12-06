<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex-col gap-4 items-center sm: flex-row">
      <!-- <div v-if="user" class="flex-items-center gap-x-4">
        <h1 class="text-lg">Contador de reproducciones: {{ dataLoaded ? data[0].counter : 'Cargando...' }}</h1>
        <button  class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-at-light-green bg-white duration-200 border-solid
      border-2 border-transparent hover:border-at-light-green hover:bg-white
      hover:text-at-light-green" @click="updateData">Actualizar Contador</button>
      </div> -->
      <ul class="flex flex-1 justify-end gap-x-10"> 
        <!-- <router-link v-if="user" class="cursor-pointer" :to="{name: 'Home'}">Home</router-link> -->
        <!-- <router-link class="cursor-pointer" :to="{name: 'Login'}">Login</router-link> -->
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav> 
  </header>
</template>

<script>
import store from "../store/index";
import { computed } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
  setup() {

    const user = computed(() => store.state.user);
    const router = useRouter();

    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "Login" });
    };

    return { logout, user };
  },
};
</script>

