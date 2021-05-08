<template>
  <el-card :body-style="{ padding: '0px' }" class="card" shadow="always">
    <div class="content">
      <h3 class="title"><i style="margin-right:2px" class="el-icon-price-tag"></i>{{title}}</h3>

      <ul class="list">
          <li v-for="(item,i) in checkItems" :key="i">
              <!-- <el-tag @change="onChange" :checked="item.checked" size="small">{{item.name}}</el-tag> -->
              <el-check-tag @change="onTagCheckedChange(item)" :checked="checkItems[i].checked" size="small">{{item.name}}</el-check-tag>

          </li>
          
          

      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "side-tag",
  data(){
      return{
          checkItems:[],
      };
  },
  props: {
      //标题名称
      title:{
          type:String,
          default: '标题'
      },
      //列表数据
      items:{
        //   validator:function(value){
              
        //   },
          default: []
      },
      callback:{
          type:Function,
      }
  },
  methods:{
      onTagCheckedChange(item){
          item.checked = !item.checked
      }
  },
  created(){
    this.checkItems = this.items
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
  width: 91% !important;

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
    padding: 3px;
    line-height: 1.25;
    font-size: 0.80em;
    list-style: none;
    border: 1px solid #e6e9ee;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;


    li{
        text-decoration: none;
        margin: 1%;

        .el-check-tag{
                font-size: 12px;
    line-height: 12px;
    padding: 8px;
        }

    }
  }
}

</style>