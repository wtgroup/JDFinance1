<template>
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="https://goss.veer.com/creative/vcg/veer/1600water/veer-170484681.jpg"
                     alt="Sry, 图片加载失败">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-317549033.jpg"
                             alt="Sry, 图片加载失败">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-145074047.jpg" alt="">
                        <h4 :class="$style.red">打白条<span class="red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default {
        name: "novice.vue",
        components:{
            Panel,
        }
    }
</script>

<style lang="scss" module>
    //element.scss 内部已经导入了layout.scss
    @import "../../css/element.scss";
    .panel {
        @include panel;
        >h4{
            border-bottom: 1px solid #ddd;
        }
         .content{
             @include list(row);
             .item{
                 width: 50%;
                 -webkit-box-sizing: border-box;    //border-box: padding也算在宽度内
                 -moz-box-sizing: border-box;
                 box-sizing: border-box;
                 border-right: 1px solid #ddd;
                 &:first-child{
                     padding: 32px 20px;
                     text-align: center;
                     img{
                         width: 132px;
                         height: 132px;
                         margin: 20px auto 0;
                     }
                 }
                 h4 {
                     font-size: 26px;
                     line-height: 40px;
                 }
                 .red{
                     color: #f00;
                 }
                 .gray{
                     color: #999;
                     font-size: 20px;
                 }
                 p {
                     margin-top: 6px;
                     font-size: 24px;
                 }
                 ul{
                     width: 100%;
                     li{
                         height: 144px;
                         width: 100%;
                         padding: 32px 28px;
                         /*加了padding, 将宽度撑开了, 需要设置为 border-box*/
                         box-sizing: border-box;
                         &:first-child{
                             border-bottom: 1px solid #ddd;
                         }
                         h4{
                             /*不折行, 超出...*/
                             white-space: nowrap;
                             text-overflow:ellipsis;
                             overflow: hidden;

                             text-align: left;
                         }
                         img{
                             width: 80px;
                             height: 80px;
                             float: right;
                         }
                     }
                 }
             }
         }
    }
</style>