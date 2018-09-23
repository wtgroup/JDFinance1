<!--
    swiper插件中文API: https://www.swiper.com.cn/api/index2.html
-->
<template>
    <section :class="cname">
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
            <!-- Optional controls -->
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev" v-if="options.navigation.prevEl"></div>
            <div class="swiper-button-next" slot="button-next" v-if="options.navigation.nextEl"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </section>
</template>

<script>
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        components: {
            swiper,
            swiperSlide      //自动互换
        },
        props: {
            cname: {
                type: String,
                default: "",
            },
            options: {
                type: Object,
                default() {
                    return {
                        autoplay: true,
                        delay:1000,
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",   //分页导航
                        },
                        //v-if 中存在两级属性调用, 需要给定默认值, 否则因为空指针异常, 组件无效
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        notNextTick: false,  //下一个 点击事件
                        speed:500,      //中间过度时间, 即开始出现到完全出现的时间
                    }
                }
            },
            items: {
                type: Array,
                default() {
                    return []      //[{href:'',src:''}]
                }
            }
        },
       /* data() {
            return {
                btnClass: "btn"   //为组件指定默认class
            };
        }*/
    };

</script>

<style lang="css">
    /*css here //讲师: 需要加~, 官网没有*/
    @import "~swiper/dist/css/swiper.css";

</style>  
