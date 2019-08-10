<template>
  <div class="home">
    <button class="sign-btn" @click="() => {$router.push('/task-center')}">签到</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      msg: 'hello world',
    };
  },
};
</script>

<style lang="stylus" scoped>
.home
  text-align center
.sign-btn {
  height 30px
  width 100px
  background-color #0094ff
  border none
  border-radius 4px;
  color #fff;
  margin 20px auto
}
</style>
