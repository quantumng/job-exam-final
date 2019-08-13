<template>
  <div>
    <SignTask :taskInfo = "signTaskInfo" />
    <OtherTask :taskInfo = "otherTaskInfo" />
    <VideoTask :taskInfo = "videoTaskInfo" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState({
      username: state => state.username,
    }),
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      const { result } = await taskApi.getTasks(this.username);
      console.log('task result', result);
      result.forEach((item) => {
        switch (item.taskId) {
          case 11:
            this.sign(item);
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
    async sign(item) {
      const {
        taskId,
        username,
        status,
        ...otherData
      } = item;
      if (status !== '3') {
        const params = {
          taskId,
          username,
          status: 3,
        };
        taskApi.finishTask(params).then((res) => {
          console.log('sign res', res);
          this.signTaskInfo = {
            taskId,
            username,
            status: '3',
            ...otherData,
          };
          this.$EventBus.$emit('openLottery', true);
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
