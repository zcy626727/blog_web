<template>
    <el-container>
      <el-header><Header></Header></el-header>
        <el-row>
          <!-- 
          xs	<768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          sm	≥768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          md	≥992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          lg	≥1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          xl	≥1920px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	— 
          -->
          <el-col :xs="20" :sm="20" :md="{span: 24, offset: 0}" :lg="{span: 22, offset: 1}" :xl="{span: 20, offset: 2}">
            <el-container>
              <Body></Body>
            </el-container>
          </el-col>
        </el-row>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
    
</template>

<script>


import Header from "./layout/header.vue";
import Footer from "./layout/footer.vue";
import Body from "./layout/body.vue";
import About from './views/About.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Body,
    About,
  },
};
</script>

<style lang="less">
body{
  margin:0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #676b6f;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

</style>
