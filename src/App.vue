<script setup>
</script>
<template>
  <div class="nav">
    <div class="top">
      <!-- 导航栏 -->
       <router-link to="/"><div>首页</div></router-link>
       <router-link to="/airticle"><div>文章</div></router-link> 
       <router-link to="/camera" ><div>相册</div></router-link> 
       <router-link to="/api"><div>api文档</div></router-link>
       <router-link to="/about"><div>关于</div></router-link> 
    </div>
    <!-- 内容切换 -->
    <div>
      <router-view/>
    </div>
  </div>
  <!-- 备案信息 -->
    <div class="baxx">
      <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fff;">冀ICP备2023018480号</p><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13012102000115" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/image/tu.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fff;">冀公网安备 13012102000115号</p></a>
    </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  color: black;
}
.nav{
  width: 90vw;
  height: 80vh;
  background-color: #fff;
  opacity: .8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1vw;
}
.top{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5vh;
  border-bottom: 1px solid rgb(136, 136, 136);
}
.baxx {
    position: fixed;
    width: auto;
    margin: auto;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%);
    font-size: 16px;
}
</style>
