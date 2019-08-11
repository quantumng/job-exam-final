<template>
  <div class="dialog-layer">
    <div class="dialog-layer-wrapper lottery-panel hidden">
      <ul class="lottery">
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border hidden" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item"></li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
        <li class="lottery-item">
          <img class="lottery-item-border" src="@/assets/lottery/cell_border.png" alt="">
          <img class="lottery-item-coupon" src="@/assets/lottery/coupon.png" alt="">
          <div class="lottery-item-value">100金券</div>
        </li>
      </ul>
    </div>
    <div class="dialog-layer-wrapper success-panel">
      <p>恭喜你，中奖了</p>
      <p>获得<span>50</span>金券</p>
      <button>确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
.dialog-layer
  position fixed
  width 100%
  height 100%
  background rgba(34, 34, 34, .3)
  &-wrapper
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-repeat no-repeat
    background-size 100%
    background-position center
    box-sizing border-box
    &.lottery-panel
      width 300px
      height 330px
      padding 75px 16px 33px
      background-image url('../assets/lottery/bg.png')
    &.success-panel
      width 297px
      height 281px
      background-image url('../assets/lottery/bg_success.png')
      background-position top center
      background-color #fff
      border-radius 10px
      text-align center
      >button
        height 38px
        width 190px
        line-height 38px
        font-family PingFangSC-Regular
        font-size 15px
        color #FFFFFF
        letter-spacing 0
        background #1F92FF
        border unset
        border-radius 4px
        margin-top 20px
      >p:first-of-type
        font-family PingFangSC-Regular
        font-size 20px
        color #2B2B2B
        margin-top 120px
      >p:last-of-type
        font-family PingFangSC-Regular
        font-size 15px
        color #373737
        margin-top 20px
        >span
          font-family: PingFangSC-Regular;
          font-size: 38px;
          color: #ffa313;
          line-height: 21px;
    &.hidden
      display none
    .lottery
      width 100%
      height 100%
      display flex
      justify-content space-around
      flex-wrap wrap
      >li
        width 86px
        height 76px
        text-align center
        padding 8px 0 0
        box-sizing border-box
        background-image url('../assets/lottery/cell_blue.png')
        background-repeat no-repeat
        background-size 100%
        background-position center
        &:nth-of-type(odd)
          background-image url('../assets/lottery/cell_white.png')
        &:nth-of-type(5)
          background-image url('../assets/lottery/btn.png')
          order 5
        &:nth-of-type(4)
          order 6
        &:nth-of-type(6)
          order 9
        &:nth-of-type(7)
          order 8
        &:nth-of-type(8)
          order 7
        &:nth-of-type(9)
          order 4
      &-item
        position relative
        &-coupon
          height 34px
          width 50px
        &-value
          font-size 12px
        &-border
          width 100%
          height 100%
          position absolute
          left 0
          top 0
          &.hidden
            display none
</style>
