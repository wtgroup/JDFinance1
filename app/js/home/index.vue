<template lang="html">
    <div :class="$style.home">
        Home
        <!--<headerer/>-->
    </div>
</template>

<script>
    import headerer from "../public/header.vue";

    export default {
        components: {
            headerer,       //和html header区分开
        }
    }
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';

    .home {
        color: red;
        font-size: 80px;
    }
</style>
