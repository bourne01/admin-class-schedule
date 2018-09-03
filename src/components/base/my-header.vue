<template>
  <div>
      <header>
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
      </header>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
    
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    header{
        display: flex;
        justify-content: space-between;        
    }
    .left{
        width:px2rem(60px);
        height:px2rem(100px);
        line-height: px2rem(100px);
    }
    .left img,.right img{
        width: px2rem(50px);
        vertical-align: middle;
    }
    .center{
        width:px2rem(690px);
        height:px2rem(100px);
        line-height: px2rem(100px);
        text-align: center;
        font-size:px2rem(36px);
        color:rgb(28,38,57);
        font-family: 'FingFang-SC-Heavy';
    }
    /* .right{
        font-size:px2rem(36px);
        font-family: 'FingFang-SC-Heavy';
     } */
</style>


