(function(e){function t(t){for(var n,c,l=t[0],s=t[1],u=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2d69":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={key:0,class:"min-h-full font-Poppins box-border"};function a(e,t,r,a,c,l){var s=Object(n["w"])("Navigation"),u=Object(n["w"])("router-view");return a.appReady?(Object(n["r"])(),Object(n["e"])("div",o,[Object(n["h"])(s),Object(n["h"])(u)])):Object(n["d"])("",!0)}var c={class:"bg-at-light-green text-white"},l={class:"container py-5 px-4 flex-col gap-4 items-center sm: flex-row"},s={class:"flex flex-1 justify-end gap-x-10"};function u(e,t,r,o,a,u){return Object(n["r"])(),Object(n["e"])("header",c,[Object(n["f"])("nav",l,[Object(n["f"])("ul",s,[o.user?(Object(n["r"])(),Object(n["e"])("li",{key:0,onClick:t[0]||(t[0]=function(){return o.logout&&o.logout.apply(o,arguments)}),class:"cursor-pointer"},"Logout")):Object(n["d"])("",!0)])])])}var i=r("1da1"),d=(r("96cf"),Object(n["t"])({user:null})),f={setUser:function(e){d.user=e?e.user:null}},b={state:d,methods:f},p=r("940b"),g="https://lwvluhxlxqsrqqyvjnhs.supabase.co",x="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dmx1aHhseHFzcnFxeXZqbmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NTcxMTAsImV4cCI6MjAxNzIzMzExMH0.N3fiFoYjGqzpvopHIaghaRVHGx6OxvkrK9wjSwrKixI",m=Object(p["a"])(g,x),j=r("6c02"),O={setup:function(){var e=Object(n["b"])((function(){return b.state.user})),t=Object(j["c"])(),r=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.auth.signOut();case 2:t.push({name:"Login"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{logout:r,user:e}}},h=r("6b0d"),v=r.n(h),w=v()(O,[["render",u]]),y={components:{Navigation:w},setup:function(){var e=Object(n["u"])(null),t=m.auth.user();return t||(e.value=!0),m.auth.onAuthStateChange((function(t,r){console.log("Hello"),b.methods.setUser(r),e.value=!0})),{appReady:e}}},k=(r("f690"),v()(y,[["render",a]])),E={key:0,class:"flex justify-center items-center h-screen"},R=["src"],V=Object(n["g"])(" Tu navegador no soporta el elemento de video. "),U={class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent"};function T(e,t,r,o,a,c){return Object(n["r"])(),Object(n["e"])("div",null,[o.user?(Object(n["r"])(),Object(n["e"])("div",E,[Object(n["f"])("div",null,[Object(n["f"])("video",{ref:"videoPlayer",onTimeupdate:t[0]||(t[0]=function(){return c.handleVideoTimeUpdate&&c.handleVideoTimeUpdate.apply(c,arguments)}),onEnded:t[1]||(t[1]=function(){return c.handleVideoEnded&&c.handleVideoEnded.apply(c,arguments)}),controls:"",width:"600",height:"450"},[Object(n["f"])("source",{src:a.videoSource,type:"video/mp4"},null,8,R),V],544),Object(n["f"])("h1",U,"Contador de reproducciones: "+Object(n["y"])(o.dataLoaded?o.data[0].counter:"Cargando..."),1)])])):Object(n["d"])("",!0)])}var C=r("67ce"),P=r.n(C),M={name:"home",setup:function(){var e=Object(j["c"])(),t=Object(n["u"])([]),r=Object(n["u"])(!1),o=Object(n["b"])((function(){return b.state.user})),a=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.from("contador").select("*");case 3:if(n=e.sent,o=n.data,a=n.error,!a){e.next=8;break}throw a;case 8:t.value=o,r.value=!0,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.warn(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.rpc("increment",{x:1,row_id:1});case 3:if(t=e.sent,r=t.data,n=t.error,!n){e.next=8;break}throw n;case 8:console.log(r),a(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error("Error incrementing counter:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n["p"])((function(){o.value?a():e.push("/login")})),{user:o,data:t,dataLoaded:r,incrementCounter:c}},data:function(){return{videoSource:P.a,contador:0,seHaReproducido60PorCiento:!1}},methods:{handleVideoTimeUpdate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$refs.videoPlayer,n=r.currentTime,o=r.duration,a=n/o*100,console.log(a),!(a>60)||e.seHaReproducido60PorCiento){t.next=13;break}return e.contador+=1,e.seHaReproducido60PorCiento=!0,t.next=11,e.incrementCounter();case 11:t.next=14;break;case 13:a<60&&(e.seHaReproducido60PorCiento=!1);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},handleVideoEnded:function(){this.seHaReproducido60PorCiento=!1}}},q=v()(M,[["render",T]]),I={class:"max-w-screen-sm mx-auto px-4 py-10"},S={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},B={class:"text-red-500"},H=Object(n["f"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Login",-1),L={class:"flex flex-col mb-2"},N=Object(n["f"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),W={class:"flex flex-col mb-2"},z=Object(n["f"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),J=Object(n["f"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Login ",-1),_=Object(n["g"])(" Don't have an account? "),A=Object(n["f"])("span",{class:"text-at-light-green"},"Register",-1);function F(e,t,r,o,a,c){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["e"])("div",I,[o.errorMsg?(Object(n["r"])(),Object(n["e"])("div",S,[Object(n["f"])("p",B,Object(n["y"])(o.errorMsg),1)])):Object(n["d"])("",!0),Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[H,Object(n["f"])("div",L,[N,Object(n["E"])(Object(n["f"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[n["B"],o.email]])]),Object(n["f"])("div",W,[z,Object(n["E"])(Object(n["f"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[n["B"],o.password]])]),J,Object(n["h"])(l,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(n["D"])((function(){return[_,A]})),_:1})],32)])}r("4795");var D={name:"login",setup:function(){var e=Object(j["c"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),o=Object(n["u"])(null),a=function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){var a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.auth.signIn({email:t.value,password:r.value});case 3:if(a=n.sent,c=a.error,!c){n.next=7;break}throw c;case 7:e.push({name:"Home"}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),o.value="Error: ".concat(n.t0.message),setTimeout((function(){o.value=null}),5e3);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,errorMsg:o,login:a}}},X=v()(D,[["render",F]]),Z={class:"max-w-screen-sm mx-auto px-4 py-10"},G={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},Y={class:"text-red-500"},K=Object(n["f"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),Q={class:"flex flex-col mb-2"},$=Object(n["f"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ee={class:"flex flex-col mb-2"},te=Object(n["f"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),re={class:"flex flex-col mb-2"},ne=Object(n["f"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),oe=Object(n["f"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register ",-1),ae=Object(n["g"])(" Already have an account? "),ce=Object(n["f"])("span",{class:"text-at-light-green"},"Login",-1);function le(e,t,r,o,a,c){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["e"])("div",Z,[o.errorMsg?(Object(n["r"])(),Object(n["e"])("div",G,[Object(n["f"])("p",Y,Object(n["y"])(o.errorMsg),1)])):Object(n["d"])("",!0),Object(n["f"])("form",{onSubmit:t[3]||(t[3]=Object(n["F"])((function(){return o.register&&o.register.apply(o,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[K,Object(n["f"])("div",Q,[$,Object(n["E"])(Object(n["f"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[n["B"],o.email]])]),Object(n["f"])("div",ee,[te,Object(n["E"])(Object(n["f"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[n["B"],o.password]])]),Object(n["f"])("div",re,[ne,Object(n["E"])(Object(n["f"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.confirmPassword=e})},null,512),[[n["B"],o.confirmPassword]])]),oe,Object(n["h"])(l,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(n["D"])((function(){return[ae,ce]})),_:1})],32)])}var se={name:"register",setup:function(){var e=Object(j["c"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),o=Object(n["u"])(null),a=Object(n["u"])(null),c=function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){var c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r.value!==o.value){n.next=16;break}return n.prev=1,n.next=4,m.auth.signUp({email:t.value,password:r.value});case 4:if(c=n.sent,l=c.error,!l){n.next=8;break}throw l;case 8:e.push({name:"Login"}),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),a.value=n.t0.message,setTimeout((function(){a.value=null}),5e3);case 15:return n.abrupt("return");case 16:a.value="Error: Passwords do not match",setTimeout((function(){a.value=null}),5e3);case 18:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:o,errorMsg:a,register:c}}},ue=v()(se,[["render",le]]),ie={class:"max-w-screen-md mx-auto px-4 py-10"},de={key:0,class:"mb-10 p-4 bg-light-grey rounded-md shadow-lg"},fe={class:"text-at-light-green"},be={class:"text-red-500"},pe={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},ge=Object(n["f"])("h1",{class:"text-2xl text-at-light-green"},"Record Workout",-1),xe={class:"flex flex-col"},me=Object(n["f"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"},"Workout Name",-1),je={class:"flex flex-col"},Oe=Object(n["f"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"},"Workout Type",-1),he=Object(n["f"])("option",{value:"select-workout"},"Select Workout",-1),ve=Object(n["f"])("option",{value:"strength"},"Strength Training",-1),we=Object(n["f"])("option",{value:"cardio"},"Cardio",-1),ye=[he,ve,we],ke={key:0,class:"flex flex-col gap-y-4"},Ee={class:"flex flex-col md:w-1/3"},Re=Object(n["f"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"},"Exercise ",-1),Ve=["onUpdate:modelValue"],Ue={class:"flex flex-col flex-1"},Te=Object(n["f"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"},"Sets ",-1),Ce=["onUpdate:modelValue"],Pe={class:"flex flex-col flex-1"},Me=Object(n["f"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"},"Reps ",-1),qe=["onUpdate:modelValue"],Ie={class:"flex flex-col flex-1"},Se=Object(n["f"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"},"Weight (LB's) ",-1),Be=["onUpdate:modelValue"],He={key:1,class:"flex flex-col gap-y-4"},Le={class:"flex flex-col md:w-1/3"},Ne=Object(n["f"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"},"Type ",-1),We=["onUpdate:modelValue"],ze=Object(n["f"])("option",{value:"#"},"Select Type",-1),Je=Object(n["f"])("option",{value:"run"},"Runs",-1),_e=Object(n["f"])("option",{value:"walk"},"Walk",-1),Ae=[ze,Je,_e],Fe={class:"flex flex-col flex-1"},De=Object(n["f"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"},"Distance ",-1),Xe=["onUpdate:modelValue"],Ze={class:"flex flex-col flex-1"},Ge=Object(n["f"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"},"Duration ",-1),Ye=["onUpdate:modelValue"],Ke={class:"flex flex-col flex-1"},Qe=Object(n["f"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"},"Pace ",-1),$e=["onUpdate:modelValue"],et=Object(n["f"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Record Workout ",-1);function tt(e,t,r,o,a,c){return Object(n["r"])(),Object(n["e"])("div",ie,[o.statusMsg||o.errorMsg?(Object(n["r"])(),Object(n["e"])("div",de,[Object(n["f"])("p",fe,Object(n["y"])(o.statusMsg),1),Object(n["f"])("p",be,Object(n["y"])(o.errorMsg),1)])):Object(n["d"])("",!0),Object(n["f"])("div",pe,[Object(n["f"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return o.createWorkout&&o.createWorkout.apply(o,arguments)}),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[ge,Object(n["f"])("div",xe,[me,Object(n["E"])(Object(n["f"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.workoutName=e})},null,512),[[n["B"],o.workoutName]])]),Object(n["f"])("div",je,[Oe,Object(n["E"])(Object(n["f"])("select",{id:"workout-type",class:"p-2 text-gray-500 focus:outline-none",required:"",onChange:t[1]||(t[1]=function(){return o.workoutChange&&o.workoutChange.apply(o,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.workoutType=e})},ye,544),[[n["A"],o.workoutType]])]),"strength"===o.workoutType?(Object(n["r"])(),Object(n["e"])("div",ke,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(o.exercises,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["f"])("div",Ee,[Re,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Ve),[[n["B"],e.exercise]])]),Object(n["f"])("div",Ue,[Te,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Ce),[[n["B"],e.sets]])]),Object(n["f"])("div",Pe,[Me,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,qe),[[n["B"],e.reps]])]),Object(n["f"])("div",Ie,[Se,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,Be),[[n["B"],e.weight]])])])})),128)),Object(n["f"])("button",{onClick:t[3]||(t[3]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["d"])("",!0),"cardio"===o.workoutType?(Object(n["r"])(),Object(n["e"])("div",He,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(o.exercises,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["f"])("div",Le,[Ne,Object(n["E"])(Object(n["f"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},Ae,8,We),[[n["A"],e.cardioType]])]),Object(n["f"])("div",Fe,[De,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,Xe),[[n["B"],e.distance]])]),Object(n["f"])("div",Ze,[Ge,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Ye),[[n["B"],e.duration]])]),Object(n["f"])("div",Ke,[Qe,Object(n["E"])(Object(n["f"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,$e),[[n["B"],e.pace]])])])})),128)),Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["d"])("",!0),et],32)])])}r("4de4");var rt=r("8a77"),nt={name:"create",setup:function(){var e=Object(n["u"])(""),t=Object(n["u"])("select-workout"),r=Object(n["u"])([]),o=Object(n["u"])(null),a=Object(n["u"])(null),c=function(){"strength"!==t.value?r.value.push({id:Object(rt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.push({id:Object(rt["a"])(),exercise:"",sets:"",reps:"",weight:""})},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):(a.value="Error: Cannot remove, need to at least have one exercise",setTimeout((function(){a.value=!1}),5e3))},s=function(){r.value=[],c()},u=function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){var c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 3:if(c=n.sent,l=c.error,!l){n.next=7;break}throw l;case 7:o.value="Succes: Workout Created!",e.value=null,t.value="select-workout",r.value=[],setTimeout((function(){o.value=!1}),5e3),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),a.value="Error: ".concat(n.t0.message),setTimeout((function(){a.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return{workoutName:e,workoutType:t,exercises:r,statusMsg:o,errorMsg:a,addExercise:c,workoutChange:s,deleteExercise:l,createWorkout:u}}},ot=v()(nt,[["render",tt]]),at=[{path:"/",name:"Home",component:q},{path:"/login",name:"Login",component:X},{path:"/register",name:"Register",component:ue},{path:"/create",name:"Create",component:ot}],ct=Object(j["a"])({history:Object(j["b"])("/"),routes:at}),lt=ct;r("ba8c");Object(n["c"])(k).use(lt).mount("#app")},"67ce":function(e,t,r){e.exports=r.p+"media/vidio.d82f23bc.mp4"},ba8c:function(e,t,r){},f690:function(e,t,r){"use strict";r("2d69")}});
//# sourceMappingURL=app.53a5ce22.js.map