<template>
  <div>
    <SignTask :taskInfo = "signTaskInfo" />
    <OtherTask :taskInfo = "otherTaskInfo" />
    <VideoTask :taskInfo = "videoTaskInfo" />
  </div>
</template>

<script>
import SignTask from './sign-task.vue';
import OtherTask from './other-task.vue';
import VideoTask from './video-task.vue';
import { taskApi } from '@/api/index';

export default {
  name: 'TaskCenter',
  components: {
    SignTask,
    OtherTask,
    VideoTask,
  },
  data() {
    return {
      signTaskInfo: {},
      otherTaskInfo: [],
      videoTaskInfo: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      const { result } = await taskApi.getTasks('wu');
      console.log('res', result);
      result.forEach((item) => {
        switch (item.taskId) {
          case 11:
            this.signTaskInfo = item;
            break;
          case 16:
          case 17:
            this.videoTaskInfo.push(item);
            break;
          default:
            this.otherTaskInfo.push(item);
            break;
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
