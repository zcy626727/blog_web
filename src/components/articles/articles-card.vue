<template>
  <el-card
    :body-style="{ padding: '1%' }"
    shadow="hover"
    class="c-margin-b c-shadow"
  >
    <div class="card-box">
      <div
        class="content"
        :style="
          imageSrc == '无' ? 'width: 99% !important;' : 'width: 65% !important;'
        "
        id="content"
      >
        <div class="top">
          <i class="el-icon-time"> 发布于{{ createTime }} </i>&ensp;
          <!-- <i class="iconfont icon-redu"></i> -->
        </div>
        <div class="title">
          <h3>
            <a
              class="c-hover-blue c-text"
              @click="routeToDetails(id)"
              style="cursor: pointer"
              >{{ title }}</a
            >
          </h3>
        </div>
        <div class="info">
          <i class="iconfont icon-yanjing"
            ><span>{{ guankan }}观看</span></i
          >&ensp;
          <i class="iconfont icon-pinglun"
            ><span>{{ pinglun }}条评论</span></i
          >
        </div>
        <div class="des">
          <p>{{ describe }}</p>
        </div>
        <div class="footer">
          <el-button @click="routeToDetails(id)">详细信息</el-button>
        </div>
      </div>
      <!-- 若图像地址为no，则不需要显示 -->
      <div class="img m-mobile-hide" v-if="!(imageSrc == '无')">
        <a href="#">
          <el-image class="image" :src="imageSrc" fit="cover">
            <template #error>
              <div class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </template>
          </el-image>
        </a>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "card-describe",
  data() {
    return {};
  },
  props: {
    id: String,
    title: {
      type: String,
      default: "标题",
    },
    describe: {
      type: String,
      default: "描述内容",
    },
    imageSrc: {
      type: String,
      default: "无",
      // default: "no",
    },
    pinglun: {
      type: Number,
      default: 0,
    },
    guankan: {
      type: Number,
      default: 0,
    },
    createTime: {
      type: String,
      default: "未知",
    },
  },
  mounted() {
    if (this.imageSrc == "no") {
      // document.querySelector(".content").style.width="99%"
      // console.log(document.querySelector(".content"))
    }
  },
  methods: {
    infoCli(event) {
      //路由跳转
    },
    routeToDetails(id) {
      //跳转到详细页面
      this.$router.push({
        path: `/articles/details/${id}`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-card.is-hover-shadow:hover {
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.3);
}

.card-box {
  display: flex;
  flex-direction: row;
  width: 100% !important;

  .content {
    padding: 1%;
    flex-direction: column;
    // background-color: rgb(162, 45, 45);
    display: inline-flex;
    align-items: flex-start;

    .top {
      color: #888;
      font-size: 12px;
    }

    .title {
      //不留空白
      white-space: nowrap;
      margin-left: 10px;

      //单行超出隐藏
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      word-wrap: break-word;

      h3 {
        a {
          color: #242424;
        }
      }
    }

    .info {
      i {
        color: #888;
        font-size: 12px;

        span {
          margin-left: 6px;
        }
      }
    }

    .des {
      margin-bottom: 1.5em;
      position: relative;
      width: 100%;
      right: 0;
      margin: 0;
      padding: 0;
      z-index: 50;
      color: rgba(0, 0, 0, 0.66);

      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        //多行文字溢出
        -webkit-line-clamp: 3;
        height: 60px;
        overflow: hidden;
        text-align: left;
      }
    }

    .footer {
      color: rgba(0, 0, 0, 0.66);
    }
  }

  .img {
    width: 250px;
    height: 250px;

    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 5px 5px 5px 5px;
    .image {
      // width: 100%;
      height: 100%;
      -o-object-fit: cover;
      //图片剪切保持原比例
      object-fit: cover;
      //对指针事件不做反应
      pointer-events: none;
      transition: all 0.6s;
    }
  }
}
//移动端适配
@media screen and (max-width: 768px) {
  .card-box {
    flex-direction: column-reverse;
  }
}
</style>