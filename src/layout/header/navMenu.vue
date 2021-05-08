<template>

<div class="nav">
  <div class="logo">
    <el-image :src="imageSrc" fit="cover">
      <template #error>
        <div class="image-slot">
          <i style="color: #fff;" class="el-icon-picture-outline"></i>
        </div>
      </template>
    </el-image>
  </div>

  <el-menu
  
    :default-active="2"
    class="menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#333"
    text-color="#fff"
    active-text-color="#409EFF"
    router="true">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/articles">文章</el-menu-item>
  </el-menu>

</div>
</template>

<script>
import logo from '@/assets/img/cat.jpg'
export default {
    name:'nav-menu',
    data(){
      return{
        imageSrc:logo
      }
    }
    
}
</script>

<style lang="less">

.nav{
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  height: 60px;
  
  
  .logo{
    position: relative;
    display: inline-block;
    width: 45px;
    .el-image{
      margin-top: 10px;
      width:45px;
    }
    .image-slot{
      margin-top: -5px;
    }
    
  }

  .menu{
    position: relative;
    display: inline-block;
  }
}


</style>