<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/font_2524720_ib24f5nq4k.css" />

  <el-card :body-style="{ padding: '1%' }" shadow="hover">
    <div class="card-box">
      <div class="content">
        <div class="top">
          <i class="el-icon-time"> 发布于{{shijian}} </i>&ensp;
          <!-- <i class="iconfont icon-redu"></i> -->
        </div>
        <div class="title"><h3>{{title}}</h3></div>
        <div class="info">
          <i class="iconfont icon-pinglun"><span>{{guankan}}观看</span></i>&ensp;
          <i class="iconfont icon-guankancishu"><span>{{pinglun}}条评论</span></i>
        </div>
        <div class="des">
          <p>{{describe}}</p>
        </div>
        <div class="footer">
          <el-button @click="infoCli">详细信息</el-button>
        </div>
      </div>

      <div class="img">
        <a href="#">
            <el-image class="image" :src="imageSrc" fit="cover">
                 <template #error>
                    <div class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                    </div>
                </template>
            </el-image>
          <!-- <img src="../../assets/img/cat.jpg" alt="" /> -->
        </a>
      </div>
    </div>
  </el-card>
</template>

<script>

import logo from '@/assets/img/cat.jpg'

export default {
  name: "card-describe",
  data(){
      return{

      }
  },
  props:{
      title:{
          type:String,
          default: '标题'
      },
      describe:{
          type:String,
          default: '描述内容'
      },
      imageSrc:{
          type:String,
          default: logo
      },
      pinglun:{
          type:Number,
          default: 0
      },
      guankan:{
          type:Number,
          default: 0
      },
      shijian:{
          type:String,
          default: '未知'
      },
      InfoSrc:{
          type:String,
          default: '#'
      },


  },
  methods:{
      infoCli(event){
          //路由跳转
      }
  }
};
</script>

<style lang="less" scoped>
.el-card{
    margin-bottom: 10px;
}
.card-box {
  display: flex;
  flex-direction: "row";
  width: 100% !important;

  .content {
    padding: 1%;
    flex-direction: column;
    // background-color: rgb(162, 45, 45);
    display: inline-flex;
    width: 65%;
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
    }

    .info {
        
      i {
         
        color: #888;
        font-size: 12px;

        span{
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
    width: 30%;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 300px;
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
    .image {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      pointer-events: none;
      transition: all 0.6s;
    }
  }
}
</style>