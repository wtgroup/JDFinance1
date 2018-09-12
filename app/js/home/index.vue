<template>
    <div :class="$style.home">
        <Heador/>
        <Hslider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
    </div>
</template>

<script>
    import Heador from "../public/header.vue";
    import Hslider from "./hslider.vue";
    import Novice from "./novice.vue";
    import Borrow from "./borrow.vue";
    import Money from "./money.vue";
    import Product from "./product.vue";
    import Life from "./life.vue";

    export default {
        components: {
            Heador,       //和html header区分开
            Hslider,
            Novice,
            Borrow,
            Money,
            Product,
            Life,
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