<!--
理财-->
<template>
   <Panel title="理财精选" :class="$style.panel">
       <section :class="$style.content">
           <dl :class="$style.item" v-for="item in items" :key="item.title">
               <!--todo 套上router-link-->
               <dt>{{item.title}}<span>{{item.sub}}</span></dt>
               <dd>{{item.rate}}</dd>
               <dd>{{item.text}}</dd>
           </dl>
       </section>
   </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default {
        name: "money",
        components:{
            Panel,
        },
        data(){
            return{
                items:[
                    {
                        title:"定期理财",
                        sub:"理财首选",
                        rate:"5.60%",
                        text:"历史年回报率",
                    },{
                        title:"小白理财",
                        sub:"理财首选",
                        rate:"4.22%",
                        text:"7日年化收益率",
                    },{
                        title:"月月盈",
                        sub:"养老保障",
                        rate:"5%",
                        text:"7日年化收益率",
                    },{
                        title:"小白基金",
                        sub:"天天赚钱",
                        rate:"4.27%",
                        text:"7日年化收益率",
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content {
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            /*中间的横线, 贯穿左右的, 作为content的一部分比较合适*/
            &:after {
                content: " ";
                display: block;
                width: 100%;
                height: 0px; //??
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                position: relative;
                top: -208px;
            }
            .item{
                box-sizing: border-box;
                position: relative;
                width: 50%;
                &:after {       //高度136px, 起始位置下移到中间, 然后margin-top:高度一半, 实现垂直居中的目的
                    content: " ";
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -68px;
                    border-right:1px solid #eee;
                }
                &:nth-child(2n){        //2,4项不显示竖线
                    &:after{
                        display: none;
                    }
                }
                padding: 34px 16px;
                dt {
                    font-size: 30px;
                    line-height: 42px;
                    color: #333;
                    span {
                        font-size: 22px;
                        color: #ff5155;
                        border: 1px solid #ff5155;
                        padding: 0 8px;
                        vertical-align: 1px;
                        margin-left: 2px;
                    }
                }
                dd {
                    &:nth-child(2) {    //父级元素的第2个子元素的每个dd标签
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3) {
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }
    }

</style>