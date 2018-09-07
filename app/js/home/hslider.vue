<!--
home下面的slider, 简称: hslider, slider的具体实现-->
<template>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <!--小功能点入口: 优惠券, 领红包, 抢钢镚, ...-->
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in entries" :key="item.src">
                <router-link :to="{ name: item.href }">
                    <img :src="item.src" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import Slider from "../core/slider.vue"
    export default {
        components:{
            Slider,
        },
        data(){
            return{
                //items传入 Slider
                items:[{
                    href:"home",
                    src:"https://img-vip-ssl.a.88cdn.com/img/banner/201806261055316666.jpg",
                },{
                    href:"home",
                    src:"http://img.vip.kanimg.com/img/banner/201704061651573599.jpg",
                },{
                    href:"home",
                    src:"https://img-vip-ssl.a.88cdn.com/img/banner/201807111153106384.jpg",
                },],
                entries:[{
                    href:"home",    //暂时用home, 避免报错
                    src:"http://pic.qiantucdn.com/58pic/27/34/34/74458PICwIf_1024.jpg!/fw/580/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center",
                    title:"优惠券",
                },{
                    href:"home",    //暂时用home, 避免报错
                    src:"http://pic.qiantucdn.com/58pic/27/34/34/74458PICwIf_1024.jpg!/fw/580/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center",
                    title:"领红包",
                },{
                    href:"home",    //暂时用home, 避免报错
                    src:"http://pic.qiantucdn.com/58pic/27/34/34/74458PICwIf_1024.jpg!/fw/580/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center",
                    title:"抢钢镚",
                },{
                    href:"home",    //暂时用home, 避免报错
                    src:"http://pic.qiantucdn.com/58pic/27/34/34/74458PICwIf_1024.jpg!/fw/580/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center",
                    title:"领京豆",
                },{
                    href:"home",    //暂时用home, 避免报错
                    src:"http://pic.qiantucdn.com/58pic/27/34/34/74458PICwIf_1024.jpg!/fw/580/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center",
                    title:"白条提额",
                },],
            }
        }
    }
</script>

<style lang="scss" module>
    //为.list 样式做准备
    @import "../../css/element.scss";
    //slider 定制样式
    .slider{
        margin-top: 120px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .list {
        //调用list函数
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;      //两端对齐
        a{
            text-decoration: none;
        }
        //每一项居中对齐
        .item{
            text-align: center;
            //保证里面的图片能够居中
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }

</style>