<template>
  <div class="video-task">
    <div class="video-task-wrapper">
      <h2>看广告，领金券</h2>
      <p>【广告收益补贴正版权益】</p>
      <ul class="progress">
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle"></span>
          </div>
          <div class="progress-bar-order">1</div>
        </li>
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle"></span>
          </div>
          <div class="progress-bar-order">2</div>
        </li>
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle circle-sp">
              <div>5</div>
              <div>金券</div>
            </span>
          </div>
          <div class="progress-bar-order">3</div>
        </li>
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle"></span>
          </div>
          <div class="progress-bar-order">4</div>
        </li>
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle"></span>
          </div>
          <div class="progress-bar-order">5</div>
        </li>
        <li class="progress-bar">
          <div class="progress-bar-item">
            <span class="line"></span>
            <span class="circle circle-sp">
              <div>10</div>
              <div>金券</div>
            </span>
          </div>
          <div class="progress-bar-order">6</div>
        </li>
      </ul>
      <div class="task-reward">
        <span>累计有效点击6次可领取10金券</span>
        <button>领取</button>
      </div>
      <ul class="task-rule">
        <li>参与规则：</li>
        <li>1.点击客户端任意广告后进入页面，并停留3秒以上算作有效点击</li>
        <li>2.同一位置广告30秒内只记录1次有效点击</li>
        <li>3.累计点击在次日清零，请及时领取</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoTask',
  props: {
    taskInfo: {
      type: Array,
    },
  },
  data() {
    return {

    };
  },
  mounted() {
    console.log('video task', this.taskInfo);
  },
};
</script>

<style lang="stylus" scoped>
.video-task
  padding 13px 20px
  &-wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 8px;
    text-align center
    padding 10px 18px
    >h2
      font-family PingFangSC-Medium
      font-size 16px
      color #19191B
      letter-spacing 0
      line-height 14px
      margin-bottom 15px
    >p
      font-family: PingFangSC-Regular
      font-size: 13px
      color: #E2BD74
      letter-spacing 0
      line-height 13px
      margin-bottom 12px
    .progress
        display flex
        height 50px
        &-bar
          &-item
            line-height 32px
            .line
              display inline-block
              width 28px
              height 4px
              background #E2BD74
              vertical-align middle
            .circle
              display inline-block
              width 12px
              height 12px
              border-radius 50%
              background #E2BD74
              vertical-align middle
              &-sp
                width 28px
                height 28px
                background: #FFA313;
                border: 2px solid #FFCD00;
                vertical-align middle
                >div
                  font-family PingFangSC-Semibold;
                  font-size 14px;
                  color #FFFFFF;
                  letter-spacing 0
                  text-align center
                  line-height 14px
                  &:last-of-type
                    font-size 8px
                    line-height 8px
          &-order
            font-family: PingFangSC-Medium;
            font-size: 10px;
            color: #E2BD74;
            letter-spacing: 0;
            line-height: 10px;
            text-align right
            padding-right 4px
            margin-top 8px
          &:nth-child(3n)
            .progress-bar-order
              padding-right 13px
              margin-top 7px
  .task-reward
    margin 24px 0 43px 0
    span
      font-family PingFangSC-Regular
      font-size 12px
      color #82848B
      letter-spacing 0
      line-height 13px
      margin-right 15px
    button
      width 75px
      height 26px
      border unset
      background: #FFA313;
      border-radius: 100px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 12px;
      margin-left 25px
  .task-rule
    text-align left
    background: #F5F5F7;
    border-radius: 4px;
    padding 3px 25px 6px 13px
    box-sizing border-box
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #82848B;
    letter-spacing: 0;
    line-height: 18px;
</style>
