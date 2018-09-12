<!--
新品推荐-->
<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多好货>>></div>
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue";
    import Slider from "../core/slider.vue";

    export default {
        name: "product",
        components: {
            Panel,
            Slider,
        },
        data() {
            return {
                items: [
                    {
                        href: "home",
                        src: "//img14.360buyimg.com/n0/jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg"
                    }, {
                        href: "home",
                        src: "//img14.360buyimg.com/n0/jfs/t21313/152/576243349/299675/32a7dafd/5b11634fN6153fccf.jpg"
                    }, {
                        href: "home",
                        src: "//img14.360buyimg.com/n0/jfs/t17875/124/1820602209/222707/8facd218/5ada201cN8848642b.jpg"
                    }, {
                        href: "home",
                        src: "//img14.360buyimg.com/n0/jfs/t17563/270/1856644797/359294/93569fcb/5ada2058N2334a225.jpg"
                    }, {
                        href: "home",
                        src: "//img14.360buyimg.com/n1/s546x546_jfs/t16711/351/1898104672/517168/416b3a1e/5ada2058N19e0f204.jpg"
                    },
                ],
                options: {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    slidesPerView: 2.3,   //每个屏幕划分多少个
                    spaceBetween: 30,
                    freeMode: true,
                }
            }
        }
    }
</script>

<style lang="scss">
    /*定制第三方插件样式, 不能用module, 因为没法给第三方插件类名hash*/
    .product-slider {
        .swiper-container {
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide {
                a {
                    display: inline-block;
                    width: 100%;
                    img {
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    //单独为项目设置的样式
    @import "../../css/element.scss";

    .panel {
        @include panel;
        .content {
            padding-bottom: 40px;
            position: relative;
            &>div {
                position: absolute;
                font-size: 28px;
                color: #999;
                right: 30px;
                top: -70px;
            }
        }
    }
</style>