<template lang="html">
  <section class="swiper">
    <swiper :options="options" :not-next-tick="options.notNextTick"> <!--options插件带有这个可配项-->
    <swiper-slide v-for="item in items" :key="item.href">
    <router-link :to="{name:item.href,params:{}}">
     <img :src="item.src" alt="Sry,图片加载失败">
</router-link>
</swiper-slide>
    <!--item: {href,src}-->
    <!--
    具体item业务层不确定, 有两种方案: 1)slot, 2)list. slot在这里不适用, 因为
    那样还需要适用<swiper-slide>, 这样又耦合了-->
    <div class="swiper-pagination" v-if="options.pagination"></div>
</swiper>
  </section>
</template>
    
<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper";
  export default {
      components:{
          swiper,
          swiperSlide      //自动互换
      },
      props: {
         options:{
             type:Object,
             default(){
                 return {
                     autoplay:true,
                     loop:true,
                     pagination:{
                         el:".swiper-pagination",   //分页导航
                     },
                     notNextTick:false  //下一个 点击事件
                 }
             }
         },
          items:{
             type:Array,
              default() {
                 return []      //[{href:'',src:''}]
              }
          }
      },
      data() {
          return {
              btnClass: "btn"   //为组件指定默认class
          };
      }
  };
  
</script>

<style lang="scss">
  /*css here*/
  @import "~swiper/dist/css/swiper.css";    //讲师: 需要加~, 官网没有

</style>  
