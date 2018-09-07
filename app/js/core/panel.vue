<!--
使用时只需要详细构造内容的dom即可, 标题通过 title 属性传入-->
<template>
  <section :class="[panelClass,cname]">
      <h4>-{{title}}-</h4>
      <!--<div>{{content}}</div>-->
      <slot/>
      </section>
</template>
    
<script>
  //java script here
  export default{
      props: {
          cname:{
              type:String,
              default:""
          },
          title:{
              type:String,
              default:""
          }
      },
      data() {
        return {
            panelClass:"panel"
        }
      }
  }
  
</script>

<style lang="scss">
  /*css here*/
    @import "../../css/element.scss";
    .panel{
        @include panel;
    }
</style>  