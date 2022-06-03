<template>
  <el-aside style="overflow: visible" class="m-mobile-hide" width="20%">
    <SideMenu
      @getArticles="getArticlesA"
      title="分类"
      :items="categoryOptions"
    ></SideMenu>
  </el-aside>
  <el-main>
      <el-card :body-style="{ padding: '2%' }" class="c-margin-b">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">文章</a></el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
      <ul class="articleList">
        <li v-for="(article,index) in listData" :key="index" :class="reload.aCardClass">
          <!-- animate使用 -->
          <ArticlesCard
            :id="article.id"
            :title="article.title"
            :watch="article.watchCount"
            :favour="article.favourCount"
            :imageSrc="article.avatar != '无' ? article.avatarUrl : '无'"
            :article="article"
          ></ArticlesCard>
        </li>
      </ul>

      <el-scrollbar>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          hide-on-single-page="false"
          background
          :page-sizes="[10, 20, 30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :page-size="ListInfo.size"
          :total="ListInfo.total"
        >
        </el-pagination>
      </el-scrollbar>


  </el-main>
  <el-aside style="overflow: visible" class="m-mobile-hide" width="20%">
    <SideTag
      @getArticles="getArticlesA"
      title="标签"
      :items="TagOptions"
    ></SideTag>
    <NewsCard
      titleIcon="el-icon-close-notification"
      title="最新内容"
      :items="NewArticles"
    ></NewsCard>
  </el-aside>
</template>

<script>
import ArticlesCard from "@/components/articles/articles-card";
import SideMenu from "@/components/articles/side-menu";
import SideTag from "@/components/articles/side-tag";
import NewsCard from "@/components/articles/news-card";
import {
  getTagList,
  getNewArticle,
  getCategoryList,
  getArticleList,
} from "@/api/article";
export default {
  data() {
    return {
      ListInfo: {
        total: 0,
        page: 1,
        size: 10,
      },
      listQuery: {
        createTime: null,
        title: null,
        categoryId: null,
      },
      listData: [],
      categoryOptions: [],
      TagOptions: [],
      NewArticles: [],
      reload:{
        aCardClass:'animate__animated',
        aCardClassTimer:null
      }
    };
  },
  components: {
    ArticlesCard,
    SideMenu,
    SideTag,
    NewsCard,
  },
  methods: {
    reloadArticlesCards(sty){
      if(sty){
        this.reload.aCardClass = "animate__animated "+sty
        this.reload.aCardClassTimer = setTimeout(this.reloadArticlesCards, 1000);
      }else{
        this.reload.aCardClass = "animate__animated"
        if(this.reload.aCardClassTimer){
          clearTimeout(this.reload.aCardClassTimer);
        }
      }
      
      
    },
    init() {
      this.getTagListA();
      this.getArticlesA({});
      this.getCategorysA({});
      this.getNewArticlesA({});
    },
    getNewArticlesA(query) {
      query["order"] = "update_time";
      query["limit"] = 5;
      query["published"] = "true";
      query["deleted"] = "false";
      getNewArticle(query)
        .then((response) => {
          const { data } = response.data;
          this.NewArticles = data.articleList;
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },
    test() {
      alert("seshi");
    },
    getArticlesA(query) {
      query["published"] = "true";
      query["deleted"] = "false";
      query["size"] = this.ListInfo.size;
      query["page"] = this.ListInfo.page;
      query["order"] = "create_time";
      if (!query["tags"]) {
        query["tags"] = [];
      }
      debugger
      if(query.categoryId==0){
        this.listQuery.categoryId = undefined
      }else{
        if(query.categoryId){
          this.listQuery.categoryId = query.categoryId
        }
      }
      
      // if(this.listQuery.categoryId){
        query["categoryId"] = this.listQuery.categoryId
      // }
      getArticleList(query)
        .then((response) => {
          // debugger
          const { data } = response.data;
          this.ListInfo.total = data.total;
          this.listData = data.articleList;
          this.reloadArticlesCards("animate__bounceInUp")
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },
    getTagListA() {
      getTagList()
        .then((response) => {
          const { data } = response.data;
          for (let i in data.tagList) {
            data.tagList[i]["checked"] = true;
          }
          this.TagOptions = data.tagList;
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },
    getCategorysA(query) {
      query["CountCondition"] = "published";
      getCategoryList(query)
        .then((response) => {
          const { data } = response.data;
          this.categoryOptions = data.categoryList;
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },
    //每页数量改变
    handleSizeChange(pageSize) {
      this.ListInfo.size = pageSize;
      this.getArticlesA({});
    },
    //当前页改变
    handleCurrentChange(pageIndex) {
      this.ListInfo.page = pageIndex;
      this.getArticlesA({});
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
.el-main {
  overflow: hidden;
  .el-scrollbar {
    overflow: visible !important;
  }
}

ul {
  padding-left: 0px;
  li {
    list-style: none;
  }
}
</style>