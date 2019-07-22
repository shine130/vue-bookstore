<template>
  <div>
    <tabs></tabs>
   <div class="content">
   <router-view></router-view>
   </div>
   
  </div>
</template>

<script>
    import Tabs from './components/tabs.vue'
    import './assets/less/site.less'
    export default {
        components:{Tabs}
    }
</script>

<style>
</style>
