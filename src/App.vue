<template>
  <div id="app">
   <transition name="slide-fade">
       <router-view></router-view>
   </transition>
  </div>
</template>

<script>

</script>

<style>
.slide-fade-enter-active{transition:all 0.3s ease;}
.slide-fade-leave-active{transition: all 0.3s cubic-bezier(1.0,0.5,0.8,1.0);}
.slide-fade-enter,.slide-fade-leave-active{transform: translateX(-430px); opacity: 0;}
</style>
