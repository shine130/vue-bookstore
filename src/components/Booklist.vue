<template>
           <div class="book-list">
               <div class="header">
                   <div class="heading">{{heading}}</div>
                   <div class="more">更多...</div>
               </div>
               <div class="book-items">
                   <div @click="$emit('onBookSelect',item)" class="book" v-for="item in promotions">
                       <div class="cover"><img :src="item.img_url"></div>
                       <div class="title">{{item.title}}</div>
                       <div class="authors">{{item.authors|join}}</div>
                   </div>
               </div>
           </div>
</template>
<style>

</style>
<script>
import "./list.less"
export default {
    props:['promotions','heading'],
    filters:{
        join(arr){return arr.join(',')}
    },

}
</script>
