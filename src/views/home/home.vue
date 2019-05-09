<template>
  <div id="homePage">
    <div style="display: inline-block">
      <div class="box-card preserve-3d">
        <div class="card1">
          <el-card class="card1-item" style="background-color: rgba(255, 255, 255, 0.2);">
            <div class="left-bottom-box">
              螃蟹在剥我的壳，笔记本在写我。
              <br>漫天的我落在枫叶上雪花上。
              <br>而你在想我。
              <br>
              <div class="author">—— 佚名</div>
            </div>
            <div class="sh-title">诗歌分类</div>
            <div style="margin-top: 30px;">
              <div class="tag">标签</div>
              <div class="tag">标签</div>
              <div class="tag">标签</div>
              <div class="tag">标签</div>
            </div>
            <div class="sh-title">诗歌相关</div>
            <div
              class="sh-content"
            >大学无论怎样，在如今出社会的我看来，永远是那么美好，因为——有你。第一次看到你的时候是大一的时候，三号宿舍旁边的广场上，社团组织的乐团表演，由于深爱beyond，我慢慢成为人群中的一员，当唱起《喜欢你》这首经典歌时，我也不由自主的轻轻哼唱，然后你出现在我旁边，让我站在前面大声合唱，只是那么一瞬间，我知道，我已经喜欢上了你。你让我了解到心里有这么一个人的存在是多么幸福的事情。</div>
          </el-card>
        </div>
        <div class="card2">
          <el-card class="card2-item" style="background-color: rgba(255, 255, 255, 0.2);">
            <div class="comment-title">热门评论</div>
            <div class="comment-box">
              <div class="item-box" v-for="item in 4" :key="item">
                <div class="comment-item">
                  <img class="avatar" src="http://img.duoziwang.com/2016/09/02/18485755487.jpg" alt>
                  <div style="flex:1;margin-left:15px">
                    <div class="user-name">一个凡人</div>
                    <div class="user-comment">大学无论怎样，在如今出社会的我看来，永远是那么美好，因为——有你。</div>
                    <div class="time-box">
                      <div class="time">10分钟前</div>
                      <div :class="item%2==0?'praise':''">
                        <i class="iconfont icon-praise"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
            <div contenteditable="true"></div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  methods: {
    forCount: [10]
  }
};
</script>

<style scoped>
div {
  color: #fff;
  font-size: 18px;
}
#homePage {
  min-width: 100%;
  min-height: 100vh;
  display: inline-block;
  text-align: center;
  background-image: url("../../../image/-4ada3Q2f-eweaXkZ5nT3cS1jk-tq.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  background-size: cover;
}
.item-box {
  box-sizing: border-box;
}
.comment-item .time-box {
  display: flex;
  margin-top: 10px;
}
.time-box .time {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  flex: 1;
}
.time-box .praise {
  color: #409eff;
}
.comment-box {
  padding: 10px 0;
  max-height: 500px;
  overflow: auto;
}
.comment-item {
  display: flex;
  padding: 10px 0;
}
.comment-box .line {
  width: calc(100%-55px);
  margin-left: 55px;
  height: 1px;
  border-bottom: 1px solid #fff;
}
.comment-item .avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.comment-item .user-name {
  color: #409eff;
}
.comment-item .user-comment {
  margin-top: 10px;
  font-size: 16px;
}
.sh-title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
}
.sh-content {
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  line-height: 30px;
}
.tag {
  display: inline-block;
  margin-right: 5px;
  padding: 2px 5px;
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
}
.left-bottom-box {
  height: auto;
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 24px;
  line-height: 55px;
  text-decoration: underline;
}
.author {
  text-align: right;
}
.box-card {
  width: 80vw;
  height: 80vh;
  display: flex;
  margin-top: 100px;
}
.card1 {
  flex: 1;
  position: relative;
  margin-right: 2px;
}
.card1 .card1-item {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
}
.card2 {
  flex: 1;
  position: relative;
  margin-left: 2px;
}
.card2 .card2-item {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
<style>
.el-card {
  /* background-color: rgba(255, 255, 255, 0.2); */
}
</style>


