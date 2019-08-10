<template>
  <div class="dialog-layer">
    <ul class="lottery">
      <li class="lottery-item">
        <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
      </li>
      <li class="lottery-item"><img src="" alt="">
        <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
      </li>
      <li class="lottery-item"><img src="" alt="">
        <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
      </li>
        <li class="lottery-item"><img src="" alt="">
      <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
      </li>
      <li class="lottery-item"><img src="" alt="">
      菜单
      </li>
      <li class="lottery-item"><img src="" alt="">
      <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span></li>
      <li class="lottery-item"><img src="" alt="">
      <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span></li>
      <li class="lottery-item"><img src="" alt="">
      <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
      </li>
      <li class="lottery-item"><img src="" alt=""></li>
      <img src="@/assets/lottery/cell_border.png" alt="">
        <img src="@/assets/lottery/coupon.png" alt="">
        <span>100金券</span>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>
.dialog-layer
  position fixed
  width 100%
  height 100%
  background rgba(34, 34, 34, .3)
  .lottery
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 300px
    height 330px
    background-image url('../assets/lottery/bg.png')
    background-size 100%
    display flex
    >li
      width 90px
      height 75px
      background-image url('../assets/lottery/cell_blue.png')
      background-repeat no-repeat
      background-size 100%
      &:nth-of-type(odd)
        background-image url('../assets/lottery/cell_white.png')
      &:nth-of-type(5)
        background-image url('../assets/lottery/btn.png')
</style>
