<template>
<link rel="stylesheet" href="//at.alicdn.com/t/font_2524720_pzez8js31zh.css" />
<el-container>
      <el-header><Header></Header></el-header>
      <Layout></Layout>
</el-container>
</template>

<script>


import Layout from "@/layout";
import Header from "@/layout/header";


export default {
  name: "App",
  components: {
    Layout,
    Header
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



</style>
