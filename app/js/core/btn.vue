<template lang="html">
  <div :class="[btnClass,cname]">
  <!--input html here-->
  <slot/>
  </div>
</template>

<script>
  //java script here
  export default {
      props: {
          cname: {
              type: String,
              default: ""
          }
      },
      data() {
          return {
              btnClass: "btn"   //为组件指定默认class
          };
      }
  };

</script>

<style lang="scss">
  /*css here*/
  @import "../../css/element.scss";
  .btn{
    @include btn;
  }
</style>  