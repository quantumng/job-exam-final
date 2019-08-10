<template>
  <div class="sign-task">
    <div class="sign-zone">
      <div class="sign-zone-info">
        <span>连续签到1天</span>
        <span>随机可获得鱼蛋</span>
      </div>
      <button class="sign-zone-btn">签到</button>
    </div>
    <ul class="sign-calendar">
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+16</div>
          <!-- @/assets/task_center/center/fish-egg.png -->
          <img class="reward-thing" src="@/assets/task_center/center/coupon.png" alt="">
        </div>
        <div class="date">周一</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+8</div>
          <img class="reward-thing" src="@/assets/task_center/center/fish-egg.png" alt="">
        </div>
        <div class="date">周二</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+8</div>
          <img class="reward-thing" src="@/assets/task_center/center/fish-egg.png" alt="">
        </div>
        <div class="date">周三</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+16</div>
          <img class="reward-thing" src="@/assets/task_center/center/coupon.png" alt="">
        </div>
        <div class="date">周四</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+8</div>
          <img class="reward-thing" src="@/assets/task_center/center/fish-egg.png" alt="">
        </div>
        <div class="date">周五</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+8</div>
          <img class="reward-thing" src="@/assets/task_center/center/fish-egg.png" alt="">
        </div>
        <div class="date">周六</div>
      </li>
      <li class="sign-calendar-item">
        <div class="reward">
          <div class="reward-value">+16</div>
          <img class="reward-thing" src="@/assets/task_center/center/coupon.png" alt="">
        </div>
        <div class="date">周日</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SignTask',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
.sign-task
  border-bottom 1px solid #EFEFF0
  padding 12px
  box-sizing border-box
.sign-zone
  height 30px
  line-height 30px
  margin 6px 0 12px 0
  &-info
    float left
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #19191B;
    letter-spacing: -0.16px;
    line-height: 15px;
    &>span
      display block
    &>span:first-of-type
      font-size 16px
      line-height 18px
    &>span:last-of-type
      font-size 12px
      color #C8C8C8
      letter-spacing -0.13px
      line-height 12px
      margin-top 3px
  &-btn
    float right
    height 28px
    width 64px
    vertical-align top
    background: #FFA313
    border-radius: 100px;
    border none;
    color #fff;
    &.signed
      background: #D6D6D6;
.sign-calendar
  display flex
  justify-content space-around
  align-items center
  &-item
    &.signed
      .reward
        background: rgba(239,239,240,0.47)
        .reward-value
          color: rgba(25,25,27,0.26)
        .reward-thing
          opacity: 0.46;
      .date
        color: rgba(130,132,139,0.33)
    .reward
      background-color #EFEFF0
      border-radius 50%
      width 42px
      height 42px
      text-align center
      padding 5px
      box-sizing border-box
      &-value
        font-size 14px
        color: #19191B;
        letter-spacing 0
        line-height 14px
      &-thing
        width 18px
        height 18px
    .date
      font-size: 10px
      text-align center
      margin-top 2px
</style>
