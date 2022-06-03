<template>
  <dl v-html="html"></dl>
  <el-main>
  </el-main>
  <!-- <el-aside class="c-margin-t-large" width="20%">right</el-aside> -->
</template>

<script>
export default {
  data() {
    return {
      html: "用于测试",
    };
  },
  created() {
    // this.html = require("marked")("# ");
  },
};
</script>

<style lang="scss" scoped>
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

</style>