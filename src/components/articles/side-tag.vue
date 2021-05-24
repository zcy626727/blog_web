<template>
  <el-card :body-style="{ padding: '0px' }" class="card" shadow="always">
    <div class="content">
      <h3 class="title">
        <i style="margin-right: 2px" class="el-icon-price-tag"></i>{{ title }}
      </h3>

      <ul class="list">
        <li v-for="(item, i) in items" :key="i">
          <el-check-tag
            @change="onTagCheckedChange(item)"
            :checked="items[i].checked"
            size="small"
            >{{ item.name }}</el-check-tag
          >
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "side-tag",
  data() {
    return {
      timer: null,
    };
  },
  props: {
    //标题名称
    title: {
      type: String,
      default: "标题",
    },
    //列表数据
    items: {
      //   validator:function(value){
      //   },
      type: Array,
      default: [],
    },
  },
  methods: {
    onTagCheckedChange(item) {
      item.checked = !item.checked;
      this.items;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(this.setTagTimeout, 1500);
    },
    setTagTimeout() {
      let tags = []
      for(let i in this.items){
        if(this.items[i].checked == true){
          tags.push(this.items[i].id)
        }
      }
      debugger
      let query = {
        tags
      }
      this.$emit('getArticles',query)
    },
  },
  created() {

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
    font-size: 0.8em;
    list-style: none;
    border: 1px solid #e6e9ee;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      text-decoration: none;
      margin: 1%;

      .el-check-tag {
        font-size: 12px;
        line-height: 12px;
        padding: 8px;
      }
    }
  }
}
</style>