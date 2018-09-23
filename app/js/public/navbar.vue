<template>
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{name:'home'}">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537631826194&di=2b41ff685742c4f3403b17b547af12b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01519b560de2796ac7251df8143b2d.jpg%401280w_1l_2o_100sh.jpg" alt="">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'money'}">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537631826194&di=2b41ff685742c4f3403b17b547af12b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01519b560de2796ac7251df8143b2d.jpg%401280w_1l_2o_100sh.jpg" alt="">
                    <p>理财</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537631826194&di=2b41ff685742c4f3403b17b547af12b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01519b560de2796ac7251df8143b2d.jpg%401280w_1l_2o_100sh.jpg" alt="">
                    <p>白条</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537631826194&di=2b41ff685742c4f3403b17b547af12b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01519b560de2796ac7251df8143b2d.jpg%401280w_1l_2o_100sh.jpg" alt="">
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537631826194&di=2b41ff685742c4f3403b17b547af12b4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01519b560de2796ac7251df8143b2d.jpg%401280w_1l_2o_100sh.jpg" alt="">
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default {
        components:{
            Panel,
        },
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100px;
        margin: 0;
        >h4{
            display: none;
        }
        .content {
            @include flex(row);
            justify-content: space-around;
            li{
                text-align: center;
                a{
                    text-decoration: none;
                }
                img{
                    width: 44px;
                    height: 44px;
                    display: inline-block;
                    margin: 12px auto 6px;
                }
                p{
                    font-size: 22px;
                    color: #656565;
                }
            }
        }
    }
</style>
