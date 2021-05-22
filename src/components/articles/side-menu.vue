<template>
  <el-card :body-style="{ padding: '0px' }" class="card" shadow="always">
    <div class="content">
      <h3 class="title"><i style="margin-right:2px" :class="titleIcon"></i>{{title}}</h3>

      <ul class="list">
        <li :class="{'active':item.id == activeId}" v-for="(item,i) in items" :key="i">
          <a @click="getArticlesByCategory(item.id)" class="level">
            <span class="level-start"
              ><span class="level-item">{{item.name}}</span></span
            >
            <span class="level-end"><span class="level-item tag">{{item.articleNum}}</span></span>
          </a>
        </li>

      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "side-menu",
  data(){
    return{
      activeId:0,
    }
  },
  props: {
      //element图标
      titleIcon:{
          type:String,
          default: 'el-icon-copy-document'
      },
      //标题名称
      title:{
          type:String,
          default: '标题'
      },
      //列表数据
      items:{
          default: []
      },
  },
  methods:{
    getArticlesByCategory(id){
      let query = {
      }
      if(id == this.activeId){//已选中
        this.activeId = 0
      }else{
        query['categoryId'] = id
        this.activeId = id
      }
      
      this.$emit('getArticles',query)
      debugger
    },
  }
};
</script>

<style lang="less" scoped>

.card{
    margin-top: 20px;
    margin-bottom: 20px;
    
}

.content {
  background-color: transparent;
  padding: 0.8rem;
  font-size: 1rem;
  line-height: 20px;
  width: 90% !important;

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
    font-size: 0.80em;
    list-style: none;

    li {
      display: list-item;
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      text-align: -webkit-match-parent;
      justify-content: space-between;

      :hover {
        background-color: whitesmoke;
        color: #363636;
      }

      &.active{
        background-color: whitesmoke;
        color: #322e2e;
      }

      a.level {
          border: 1px solid #f0f1f3;
        display: inline-flex;
        width: 100%;
        height: 20px;
        border-radius: 2px;
        color: #4a4a4a;
        padding: 0.5em 0.75em;
        align-items: center;
        justify-content: space-between;
        margin: 0 !important;
        cursor: pointer;
        text-decoration: none;

        .level-start {
          .level-item {
            align-items: center;
            display: inline-flex;
            flex-basis: auto;
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
          }
        }

        .level-end {
          .level-item {
            align-items: center;
            background-color: whitesmoke;
            border-radius: 4px;
            color: #4a4a4a;
            display: inline-flex;
            font-size: 0.75rem;
            height: 2em;
            justify-content: center;
            line-height: 1.5;
            padding-left: 0.75em;
            padding-right: 0.75em;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

</style>