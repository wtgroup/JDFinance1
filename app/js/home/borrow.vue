<!--
急速接待-理财精选-->
<template>
    <Panel title="急速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{ name:'home' }">
                <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-158121246.jpg" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default {
        name: "borrow",
        components:{
            Panel,
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            img{
                display: block;
                width: 100%;
            }
        }
    }
</style>