<template>
<el-backtop :bottom="100">
  <div
    style="{
      height: 100%;
      width: 100%;
      background-color: #f2f5f6;
      box-shadow: 0 0 6px rgba(0,0,0, .12);
      text-align: center;
      line-height: 40px;
      color: #1989fa;
    }"
  >
    UP
  </div>
</el-backtop>
  <el-aside class="c-margin-t-large m-mobile-hide" width="20%">left</el-aside>

  <el-main >
    <el-card :body-style="{ padding: '1rem' }" class="c-margin-bt-large">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/articles">文章</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">色批是怎样炼成的</a></el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
    <div class="entry c-border c-shadow">
      <div class="entry-title">
        <h1>色批是怎样炼成的</h1>
        <p class="entry-des c-color-text">
          <span class="time"
            ><i class="iconfont icon-yanjing c-margin-i"></i>2000-7-1</span
          >
          <span class="watch"
            ><i class="iconfont icon-time c-margin-i"></i>255观看</span
          >
        </p>
        <p class="entry-tag c-color-text">
          <el-tag size="mini">萝莉</el-tag><el-tag size="mini">猛男</el-tag>
        </p>
      </div>
      <div class="entry-content c-margin-b-large">
        在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。这上面的夜的天空，奇怪而高，我生平没有见过这样的奇怪而高的天空。他仿佛要离开人间而去，使人们仰面不再看见。然而现在却非常之蓝，闪闪地眨着几十个星星的眼，冷眼。他的口角上现出微笑，似乎自以为大有深意，而将繁霜洒在我的园里的野花草上。
        我不知道那些花草真叫什么名字，人们叫他们什么名字。我记得有一种开过极细小的粉红花，现在还开着，但是更极细小了，她在冷的夜气中，瑟缩地做梦，梦见春的到来，梦见秋的到来，梦见瘦的诗人将眼泪擦在她最末的花瓣上，告诉她秋虽然来，冬虽然来，而此后接着还是春，胡蝶乱飞，蜜蜂都唱起春词来了。她于是一笑，虽然颜色冻得红惨惨地，仍然瑟缩着。枣树，他们简直落尽了叶子。先前，还有一两个孩子来了他们别人打剩的枣子，现在是一个也不剩了，连叶子也落尽了，他知道小粉红花的梦，秋后要有春；他也知道落叶的梦，春后还是秋。他简直落尽叶子，单剩干子，然而脱了当初满树是果实和叶子时候的弧形，欠伸得很舒服。但是，有几枝还低亚着，护定他从打枣的竿梢所得的皮伤，而最直最长的几枝，却已默默地铁似的直刺着奇怪而高的天空，使天空闪闪地鬼陕眼；直刺着天空中圆满的月亮，使月亮窘得发白。
      </div>
      <div class="c-border c-margin-bt-large">评论</div>
      <!-- <a href="#" class="c-hover-blue c-border-radius">sss</a> -->
    </div>
  </el-main>
  <!-- <el-aside class="c-margin-t-large" width="20%">right</el-aside> -->
</template>

<script>
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