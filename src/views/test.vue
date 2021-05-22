<template>
  <el-aside class="c-margin-t-large m-mobile-hide" width="20%">left</el-aside>
  <dl v-html="html"></dl>
  <el-main>
    
  </el-main>
  <!-- <el-aside class="c-margin-t-large" width="20%">right</el-aside> -->
</template>

<script>
export default {
  data() {
    return {
      html: "未解析",
    };
  },
  created() {
    this.html = require("marked")("# aaa");
  },
};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0px;
  .entry {
    text-align: left;
    padding: 1.5rem;
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
          // margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      }
    }

    .entry-content {
    }
  }
}

// .el-card {
//   margin-bottom: 10px;
//   border: 1px solid #dde1eb;
// }

// .el-scrollbar {
//   overflow: visible !important;
// }

// .el-aside {

//     background-color: #D3DCE6;
//     color: #333;
//     text-align: center;
//     line-height: 200px;
//   }
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
</style>