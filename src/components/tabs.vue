<template>
     <div class="tabs">
     <ul>
         <router-link :to="{ name : 'Home'}" tag="li">
                <div>
                    <img src="../assets/images/home.svg">
                </div>         
            <div>首页</div>
         </router-link>
        <router-link :to="{ name : 'Explorer'}" tag="li">
                <div>
                    <img src="../assets/images/category.svg">
                </div>
            <div>分类</div>
         </router-link>
        <router-link :to="{ name : 'Cart'}" tag="li">
                <div><img src="../assets/images/cart.svg"></div>
            <div>购物车</div>
         </router-link>
        <router-link :to="{ name : 'Me'}" tag="li">
                <div><img src="../assets/images/me.svg"></div> 
            <div>我</div>
         </router-link>     
     </ul>
   </div>
</template>
<style></style>
<script type="text/ecmascript-6">
import "./tabs.less"
    export default{}
</script>