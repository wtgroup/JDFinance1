<template>
    <Panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/5031f36528b1c3837346dbdb2d784b98_35_35.png"
                     alt="">
                <p>惠加油</p>
            </li>
            <li :class="$style.item">
                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/33af1d133f03d0bf0057c04d5e6c8ca9_35_35.png"
                     alt="">
                <p>小白信用</p>
                <p>全新升级</p>
            </li>
            <li :class="$style.item">
                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/ebefa163de2e7094d901a97f6c68cd70_35_35.png"
                     alt="">
                <p>信用卡还款</p>
            </li>
            <li :class="$style.item">
                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/eab9113c8c07578cac1625deb986cda9_35_35.png"
                     alt="">
                <p>卡转让</p>
            </li>
            <li :class="$style.item">
                <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/46ed914884e98a78a228b02d64f9d6c7_35_35.png"
                     alt="">
                <p>定期还款</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue";
    export default {
        name: "life",
        components:{
            Panel,
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content {
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item{
                width: 20%;
                text-align: center;
                img {
                    width: 90px;
                    height: 90px;
                }
                p {
                    font-size: 26px;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-child(3){
                      color: #FF801A;
                    }

                }
            }
        }
    }
</style>