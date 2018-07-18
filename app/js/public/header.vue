<template lang="html">
    <div :class="$style.header">
        <span :class="$style.left"><em>注册</em>&nbsp;|&nbsp;<em>登录</em></span>
        <btn :class="$style.btn-download">App下载</btn>
    </div>
</template>

<script>
    import btn from "../core/btn.vue"

    export default {
        components: {
            btn,
        }
    };
</script>
<style lang="scss" module>      /*使用module后, 在编译时, 会将 header 放入 $style命名空间中, 然后就可以用$style.header调用了*/
    .header {
        color: #666;
        height: 100px;
        line-height: 100px;
        position: fixed; /*吸顶效果*/
        top: 0;
        left: 0;
        right: 0;       /*==width=100% 在fixed下*/
        font-size: 32px;
        background: #fff url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
            //不带http的, 我的网站是什么协议, 就是什么协议
        -webkit-background-size: auto 50%;  //达到居中效果
        background-size: auto 50%;
        z-index:100;        //向下滑动屏幕时, 头部始终显示

        .left{
            font-size: 28px;
            height: 30px;
            line-height: 30px;
            margin: 17px 0 0 18px;
        }
        .btn-download{
            float: right;
            font-size: 24px;
            border-width:0;
            height: 56px;
            line-height: 56px;
            min-width: 120px;
            padding:0;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            margin: 28px 24px 0 0;
        }

    }
</style>