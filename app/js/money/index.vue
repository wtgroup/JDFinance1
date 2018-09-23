<!--理财页入口-->
<template>
    <div :class="$style.home">
        <Heador/>
        <Mslider/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from "../public/header.vue";
    import Mslider from "./mslider.vue";
    import Footer from "../public/footer.vue";
    import Navbar from "../public/navbar.vue";

    export default {
        components: {
            Heador,       //和html header区分开
            Mslider,
            Footer,
            Navbar,
        }
    }
</script>

<style lang="scss" module>

</style>