<template>
  <div>
    <SignTask />
    <OtherTask />
    <VideoTask />
  </div>
</template>

<script>
import SignTask from './sign-task.vue';
import OtherTask from './other-task.vue';
import VideoTask from './video-task.vue';

export default {
  name: 'TaskCenter',
  components: {
    SignTask,
    OtherTask,
    VideoTask,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
</style>
