<template>
  <div id="app">
    <div class="header">
      <span class="back-btn" v-if="$route.name !== 'home'" @click="() => {$router.go(-1)}">
      </span>
      鲸鱼阅读</div>
    <Layer class="dialog-layer" />
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Layer from './views/Layer.vue';

export default {
  name: 'App',
  components: {
    Layer,
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="stylus">
#app
 position relative
 height 100%
 width 100%
.header
  height 48px
  width 100%
  line-height 48px
  text-align center
  position relative
  border-bottom 1px solid #D5D5D5
  background #fff;
  position fixed
  .back-btn
    position absolute
    left 0
    width 48px
    height 48px
    text-align center
    background-image url('./assets/task_center/nav_bar/navigation_return_normal.png')
    background-position center
    background-repeat no-repeat
    background-size 30px 30px
.view
  padding-top 50px
</style>
