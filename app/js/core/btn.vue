<template>
  <!--<div :class="[btnClass,cname]">-->
  <div :class="$style.btn">
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

<style lang="scss" module>
  /*css here*/
  @import "../../css/element.scss";
  .btn{
    @include btn;
  }
</style>  