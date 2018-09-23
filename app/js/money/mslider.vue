<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider" :options="swiperOptions"></Slider>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    import Slider from "../core/slider.vue"

    export default {
        name: "mslider",
        components: {
            Panel,
            Slider,
        },
        data() {
            return {
                items: [
                    {
                        href: 'home',
                        src: 'http://www.nvsay.com/uploads/allimg/180721/210-1PH12246360-L.jpg'
                    }, {
                        href: 'home',
                        src: 'http://img3.imgtn.bdimg.com/it/u=3728179888,2814439585&fm=214&gp=0.jpg'
                    }, {
                        href: 'home',
                        src: 'http://crawl.nosdn.127.net/2184b2b233d32d25573a8b8b3672d872.jpg'
                    }, {
                        href: 'home',
                        src: 'http://p0.ifengimg.com/pmop/2018/0831/AA22F1BD859536080FB803781D85AFBD7EF51ADC_size147_w1442_h1079.jpeg'
                    },
                ],
                swiperOptions: {
                    autoplay: true,
                    delay: 1000,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",   //分页导航
                        clickable :true,             //分页指示器可点击
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        // prevEl: '.swiper-button-prev',
                    },
                    notNextTick: false,  //下一个 点击事件
                    speed: 500,      //中间过度时间, 即开始出现到完全出现的时间
                },
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel;
        > h4 {
            display: none;
        }
        .content {
            .slider {
                margin-top: 120px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>