<template>
  <el-scrollbar max-height="91vh">
    <el-row>
      <!-- 
          xs	<768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          sm	≥768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          md	≥992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          lg	≥1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
          xl	≥1920px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	— 
          -->
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 24, offset: 0 }"
        :md="{ span: 24, offset: 0 }"
        :lg="{ span: 22, offset: 1 }"
        :xl="{ span: 20, offset: 2 }"
      >
        <el-container>
          <Body></Body>
        </el-container>
      </el-col>
    </el-row>
    <!-- <el-footer><Footer></Footer></el-footer> -->
  </el-scrollbar>
</template>

<script>
import Footer from "@/layout/footer";
import Body from "@/layout/body";

export default {
  name: "Layout",
  components: {
    Footer,
    Body,
  },
};
</script>

<style lang="less">
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
</style>
