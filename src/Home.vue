<template>
   <div>
       <div class="section">
           <div>
               <slider :slides="page_data.top"></slider>
              <!--  热门推荐 -->
                <announcement :announcement="page_data.announcement"></announcement>
              <!-- 快讯 -->
           </div>
       </div>
       <div class="section">
           <booklist :promotions="page_data.promotions" heading="最新更新" @onBookSelect="preview($event)" ></booklist>
           <!-- 新书上架 -->
       </div>
       <div class="section">
            <booklist :promotions="page_data.recommended" heading="编辑推荐" @onBookSelect="preview($event)" ></booklist>
          <!--  编辑推荐 -->
       </div>
      <modal-dialog ref="dialog" @dialogClose="selected=undefined">
          <div slot="heading">
              <div class="dismiss" @click.prevent="$refs.dialog.close()">X</div>
          </div>
              <div v-if="selected">
                  <img :src="selected.img_url" alt="">
                   <h2>{{ selected.title }}</h2>
              </div>

      </modal-dialog>
   </div>
</template>
<style>

</style>
<script>
import Slider from './components/Slider.vue'
import Announcement from './components/Announcement.vue'
import Booklist from './components/Booklist.vue'
import faker  from './fixtures/faker'
import ModalDialog from './components/dialog.vue'
export default {
    data(){
        return{
            page_data:{},
             selected:undefined
        }
    },
    methods:{
        preview(book){
            this.selected = book
            this.$refs.dialog.open()
        }
    },
    created(){
        this.page_data = faker.getHomeData();
    },
    components:{Slider,Announcement,Booklist,ModalDialog}
}
</script>
