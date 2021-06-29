<template>
  <el-aside class="toc-outer c-margin-t-large m-mobile-hide" width="20%">
    <div class="js-toc"></div>
  </el-aside>

  <el-main class="details-main" style="overflow: visible">
    <el-card :body-style="{ padding: '1rem' }" class="c-margin-bt-large">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/articles">文章</a></el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="#">{{ title }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </el-card>
    <div
      class="entry c-border c-shadow"
      v-loading="loading.markedLoading"
      element-loading-text="加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(137, 137, 137, 0.4)"
    >
      <div class="entry-title">
        <h1>{{ title }}</h1>
        <p class="entry-des c-color-text">
          <span class="time"
            ><i class="iconfont icon-yanjing c-margin-i"></i>2000-7-1</span
          >
          <span class="watch"
            ><i class="iconfont icon-time c-margin-i"></i>255观看</span
          >
        </p>
        <p class="entry-tag c-color-text">
          <el-tag v-for="(item, i) in tags" :key="i" size="small">{{
            item.name
          }}</el-tag>
        </p>
      </div>

      <div class="markdown-body entry-content c-margin-b-large js-toc-content">
        <dl v-html="html"></dl>
      </div>
      <div class="c-border c-margin-bt-large">评论</div>
      <!-- <a href="#" class="c-hover-blue c-border-radius">sss</a> -->
    </div>
  </el-main>

  <!-- <el-aside class="c-margin-t-large" width="10%">
    
  </el-aside> -->
</template>

<script>
import tocbot from "tocbot";
import "github-markdown-css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { getArticleById } from "@/api/article";
import marked from "marked";

export default {
  name: "details",
  data() {
    return {
      html: "",
      title: null,
      tags: [],
      loading: {
        markedLoading: true,
      },
      options: {
        //显示在哪里
        tocSelector: ".js-toc",
        // 解析的目标
        contentSelector: ".js-toc-content",
        // 解析的元素
        headingSelector: "h1, h2, h3",
        // scrollContainer: ".el-scrollbar__wrap",
        scrollSmooth: true,
        // Smooth scroll duration.
        scrollSmoothDuration: 420,
      },
    };
  },
  methods: {
    test() {
      alert("11");
    },
    init() {
      this.getArticleByIdA(this.$route.params.id);
    },
    tocbotinit() {
      tocbot.init(this.options);
    },
    //获取文章详细信息
    getArticleByIdA(id) {
      getArticleById(id)
        .then((response) => {
          const { article } = response.data.data;
          this.title = article.title;
          this.tags = article.tags;
          this.html = marked(article.content);
          this.loading.markedLoading = false;
          setTimeout(this.tocbotinit, 1000);
        })
        .catch((error) => {
          this.$message.error("获取文章信息失败");
          this.loading.markedLoading = false;
        });
    },
  },
  created() {
    var rendererMD = new marked.Renderer();
    marked.setOptions({
      renderer: rendererMD,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    this.init();
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "tocbot/src/scss/tocbot";
.details-main {
  padding: 0px;
  .entry {
    text-align: left;
    padding: 1rem 2rem;
    .entry-title {
      h1 {
        padding-left: 0.5rem;
        font-size: 2rem !important;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }

      .entry-des {
        span {
          padding-right: 10px;
        }
      }

      .entry-tag {
        .el-tag {
          margin-right: 0.5rem;
        }
      }
    }

    .entry-content {
    }
  }
}

.toc-outer {
  overflow: visible;
  .js-toc {
    position: sticky;
    width: 340px;
    margin: 0px auto;
    top: 10px;
    left: 5%;
    text-align: left;
    ol {
      list-style: none;
      li {
        list-style: none;

        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>