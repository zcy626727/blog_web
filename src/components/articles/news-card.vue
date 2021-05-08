<template>
  <el-card :body-style="{ padding: '0px' }" class="card" shadow="always">
    <div class="content">
      <h3 class="title">
        <i style="margin-right: 2px" :class="titleIcon"></i>{{ title }}
      </h3>

      <ul class="list">
        <li v-for="(item, i) in items" :key="i">
          <div class="time">{{ item.time }}</div>
          <a href="#" class="title">{{ item.title }}</a>
          <a href="#" class="category"><i style="margin-right:2px" class="el-icon-copy-document"></i>{{ item.category }}</a>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "side-menu",
  props: {
    //element图标
    titleIcon: {
      type: String,
      default: "el-icon-copy-document",
    },
    //标题名称
    title: {
      type: String,
      default: "标题",
    },
    //列表数据
    items: {
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  margin-top: 20px;
  margin-bottom: 20px;
}

.content {
  background-color: transparent;
  
  padding: 0.8rem;
  padding-bottom: 0;
  font-size: 1rem;
  line-height: 20px;
  width: 85% !important;

  .title {
    text-align: start;
    color: #7a7a7a;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 0%;
    margin-bottom: 2%;
  }

  .list {
    margin-top: 0%;
    margin-bottom: 0%;
    padding-left: 0%;
    line-height: 1.25;
    font-size: 0.8em;
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin: 0 0 10% 1%;
      padding: 1%;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: -webkit-match-parent;
      align-items: flex-start;
    border-bottom: 1px solid rgb(236, 229, 229);
      


      .time {
          font-size: 0.85rem !important;
          color: #7a7a7a !important;
          margin-bottom: 2px;
      }
      .title {
          color: #363636;
            text-decoration: none;
            font-size: 1rem !important;
            &:hover{
              color: #3273dc !important;
          }
          
      }


      .category {
          color: #7a7a7a !important;
          text-decoration: none;
          font-size: 0.85rem !important;
          line-height: 1rem;
          text-align: center;
          &:hover{
              color: #3273dc !important;
          }
      }
    }
  }
}
</style>