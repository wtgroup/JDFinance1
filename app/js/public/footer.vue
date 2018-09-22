<template>
    <Panel title="公司信息" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <img src="http://img007.hc360.cn/m7/M02/F1/7F/wKhQo1dXS7-EJpiBAAAAADEXVY8303.jpg" alt="">
            </li>
            <li>
                <div>
                    <img src="http://imgsrc.baidu.com/imgad/pic/item/4afbfbedab64034f478e5c2ca4c379310a551d5c.jpg" alt="">
                    <p>客户端</p>
                </div>
                <div>
                    <img src="http://imgsrc.baidu.com/imgad/pic/item/4afbfbedab64034f478e5c2ca4c379310a551d5c.jpg" alt="">
                    <p>触屏版</p>
                </div>
                <div>
                    <img src="http://imgsrc.baidu.com/imgad/pic/item/4afbfbedab64034f478e5c2ca4c379310a551d5c.jpg" alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright©2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险, 购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default{
        components:{
            Panel,
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin-bottom: 100px;
        &>h4{
            //隐藏标题
            display: none;
        }
        .content{
            //纵向平铺
            @include flex;
            li {
                width: 100%;
                text-align: center;
                color: #999;
                /*line-hight: 82px;*/
                font-size: 24px;
                > img {
                    width: 100%;
                    height: 143px;
                }
                &:nth-child(2) {
                    @include flex(row);
                    height: 186px;
                    box-sizing: border-box;
                    > div {
                        width: 33.3333%;
                        text-align: center;
                        box-sizing: border-box;
                        padding-top: 20px;
                        img {
                            width: 90px;
                            height: 90px;
                        }
                        p {
                            font-size: 13px;
                            text-align: center;
                            display: block;
                            color: #999;
                            margin-top: 12px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }
                }
                &:nth-child(n+3){
                    padding: 24px 0;
                    height: 38px;
                    line-height: 38px;
                    border-top: 1px solid #ddd;
                }
            }
        }
    }
</style>