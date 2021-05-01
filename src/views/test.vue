<template>
  <el-aside width="20%">left</el-aside>
    <el-main>
      
      <!-- <el-scrollbar height="400px">
        <p class="item" v-for="item in 20" :key="item">{{ item }}</p>
      </el-scrollbar> -->
      
      <ArticlesCard class="a" title="sss" guankan='2' pinglun='2' shijian='2000-1-1' describe="我家门口有一颗枣树" ></ArticlesCard>
      <ArticlesCard class="a" title="sss" guankan='2' pinglun='2' shijian='2000-1-1' describe="我家门口有一颗枣树" ></ArticlesCard>
      <ArticlesCard class="a" title="sss" guankan='2' pinglun='2' shijian='2000-1-1' describe="我家门口有一颗枣树" ></ArticlesCard>
      <ArticlesCard class="a" title="sss" guankan='2' pinglun='2' shijian='2000-1-1' describe="我家门口有一颗枣树" ></ArticlesCard>

    </el-main>
  <el-aside width="20%">right</el-aside>
</template>

<script>
import ArticlesCard from '@/components/articles/articles-card'

export default {
  data(){
    return{

    }
  },
  components:{
    ArticlesCard,
  }
};
</script>

<style lang="less" scoped>
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.a{
  margin-bottom: 10px;
}
</style>