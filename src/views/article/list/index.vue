<template>
  <el-aside class="m-mobile-hide" width="20%">
    <SideMenu
      title="分类"
      :items="[
        { name: 'java', count: '3' },
        { name: 'golang', count: '6' },
        { name: 'javascript', count: '3' },
        { name: 'python', count: '7' },
      ]"
    ></SideMenu>
  </el-aside>
  <el-main>
    <el-scrollbar wrap-style="overflow: visible">
      <el-card :body-style="{ padding: '2%' }" class="c-margin-b">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">文章</a></el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>

      <ArticlesCard
        class="a"
        title="我的传奇一生"
        guankan="2"
        pinglun="2"
        shijian="2000-1-1"
        describe="我家门口有一颗枣树"
      ></ArticlesCard>
      <el-scrollbar>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick"
          hide-on-single-page="false"
          pager-count="6"
          background
          layout="prev, pager, next,jumper"
          :page-size="10"
          :total="1000"
        >
        </el-pagination>
      </el-scrollbar>
    </el-scrollbar>
  </el-main>
  <el-aside class="m-mobile-hide" width="20%">
    <SideTag
      :callback="test"
      title="标签"
      :items="[
        { name: 'java', count: '3', checked: true },
        { name: 'golang', count: '6', checked: false },
        { name: 'javascript', count: '3', checked: true },
        { name: 'python', count: '7', checked: true },
      ]"
    ></SideTag>
    <NewsCard
      titleIcon="el-icon-close-notification"
      title="最新内容"
      :items="[
        { time: '2000-1-1', title: '钢铁是怎样炼成的', category: 'java' },
        { time: '2000-1-1', title: '钢铁是怎样炼成的', category: 'java' },
      ]"
    ></NewsCard>
  </el-aside>
</template>

<script>
import ArticlesCard from "@/components/articles/articles-card";
import SideMenu from "@/components/articles/side-menu";
import SideTag from "@/components/articles/side-tag";
import NewsCard from "@/components/articles/news-card";

export default {
  data() {
    return {};
  },
  components: {
    ArticlesCard,
    SideMenu,
    SideTag,
    NewsCard,
  },
  methods: {
    //每页数量改变
    handleSizeChange(pageSize) {
      // alert('每页数量改变')
    },
    //当前页改变
    handleCurrentChange(pageIndex) {
      // alert('当前页改变')
    },
    //前一页
    handlePrevClick(pageIndex) {
      // alert('前一页')
    },
    //后一页
    handleNextClick(pageIndex) {
      // alert('后一页')
    },
  },
};
</script>

<style lang="less" scoped>

</style>