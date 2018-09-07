<template>
    <div :class="$style.home">
        <Heador/>
        <Hslider/>
        <Novice/>
    </div>
</template>

<script>
    import Heador from "../public/header.vue";
    import Hslider from "./hslider.vue";
    import Novice from "./novice.vue";

    export default {
        components: {
            Heador,       //和html header区分开
            Hslider,
            Novice,
        }
    }
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';

    .home {
        //color: red;
        font-size: 80px;
    }
</style>
0-0-78