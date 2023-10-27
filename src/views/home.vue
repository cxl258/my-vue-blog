<template>
  <div class="">nijdkghjhfkdjghkdjf</div>
</template>

<script>
import {yiyan } from '../api/index'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  methods(){
   const getYiyan=async ()=>{
        const {data} = await yiyan({
          url:'/api/yiyan',
          methods:'get'
      })
   }
   

  }
};
</script>
<style  scoped>
</style>
