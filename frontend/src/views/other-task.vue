<template>
  <div class="other-task">
    <div class="my-info">
      <div class="my-info-task">
        <h3 class="title">我的任务</h3>
        <button class="click-btn" @click="getLottery">1份任务待领取</button>
      </div>
      <div class="my-info-lottery">
        <h3 class="title">鱼蛋换好礼</h3>
        <button class="click-btn" @click="finishLottery">200鱼蛋</button>
      </div>
    </div>
    <ul class="all-tasks">
      <li class="task-item" v-if="taskList['12']">
        <img src="@/assets/task_center/center/update.png" alt="" class="task-item-icon">
        <div class="task-item-content">
          <p>更新版本领奖</p>
          <p>可领取20金券！</p>
        </div>
        <button class="task-item-btn" v-if="taskList['12'].status === '1'"
        @click="finishTask(taskList['12'].username, taskList['12'].taskId, '2')">去更新</button>
        <button class="task-item-btn" v-else-if="taskList['12'].status === '2'"
        @click="finishTask(taskList['12'].username, taskList['12'].taskId, '3')">领取</button>
        <button class="task-item-btn finished" v-else>已领取</button>
      </li>
      <li class="task-item" v-if="taskList['13']">
        <img src="@/assets/task_center/center/free-zone-copy.png" alt="" class="task-item-icon">
        <div class="task-item-content">
          <p>每月福利10元礼包等你拿</p>
          <p>还有N天N小时N分领取</p>
        </div>
        <button class="task-item-btn" v-if="taskList['13'].status === '1'"
        @click="finishTask(taskList['13'].username, 13, '2')">领取预约</button>
        <button class="task-item-btn" v-else-if="taskList['13'].status === '2'"
        @click="finishTask(taskList['13'].username, 13, '3')">领取</button>
        <button class="task-item-btn finished" v-else>已领取</button>
      </li>
      <li class="task-item" v-if="taskList['14']">
        <img src="@/assets/task_center/center/free-zone.png" alt="" class="task-item-icon">
        <div class="task-item-content">
          <p>今日免费专区</p>
          <p>买30得60，双倍返还</p>
        </div>
        <button class="task-item-btn" v-if="taskList['14'].status === '1'"
        @click="finishTask(taskList['14'].username, 14, '2')">去看看</button>
        <button class="task-item-btn" v-else-if="taskList['14'].status === '2'"
        @click="finishTask(taskList['14'].username, 14, '3')">领取</button>
        <button class="task-item-btn finished" v-else>已领取</button>
      </li>
      <li class="task-item" v-if="taskList['15']">
        <img src="@/assets/task_center/center/reading-plan.png" alt="" class="task-item-icon">
        <div class="task-item-content">
          <p>阅读计划</p>
          <p>看这里@好看的免费书等你挑~</p>
        </div>
        <button class="task-item-btn" v-if="taskList['15'].status === '1'"
        @click="finishTask(taskList['15'].username, 15, '2')">去看看</button>
        <button class="task-item-btn" v-else-if="taskList['15'].status === '2'"
        @click="finishTask(taskList['15'].username, 15, '3')">领取</button>
        <button class="task-item-btn finished" v-else>已领取</button>
      </li>
      <li class="task-item">
        <img src="@/assets/task_center/center/ads.png" alt="" class="task-item-icon">
        <div class="task-item-content">
          <p>看广告得好礼</p>
          <p>本次奖励100金券，100经验</p>
        </div>
        <button class="task-item-btn">去看看</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { taskApi } from '@/api/index';

export default {
  name: 'OtherTask',
  props: {
    taskInfo: {
      type: Array,
    },
  },
  data() {
    return {
      id: '',
    };
  },
  computed: {
    ...mapState({
      username: state => state.username,
    }),
    taskList() {
      console.log('info', this.taskInfo);
      const list = [];
      this.taskInfo.forEach((item) => {
        list[item.taskId] = item;
      });
      return list;
    },
  },
  methods: {
    finishTask(username, taskId, status) {
      const params = {
        username,
        taskId,
        status,
      };
      taskApi.finishTask(params).then((res) => {
        console.log('res', res);
        this.taskList[taskId].status = status;
      }).catch((err) => {
        console.log('err', err);
      });
    },
    async getLottery() {
      try {
        const { result } = await taskApi.getLottery(this.username);
        console.log('lottery list', result);
        this.id = result._id;
        console.log('ids', this.id, result._id);
      } catch (err) {
        throw err;
      }
    },
    async finishLottery() {
      try {
        const params = {
          id: this.id,
          giftId: 2,
          status: 1,
        };
        await taskApi.finishLottery(params);
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.other-task
  padding 12px 0 13px 0
  .my-info
    margin-bottom 7px
    text-align center
    div
      width 160px
      height 83px
      margin 0 5px
      padding 20px
      display inline-block
      text-align left
      box-sizing border-box
      .title
        font-family PingFangSC-Regular
        font-size 15px
        color #19191B
        letter-spacing 0
        line-height 15px
      .click-btn
        background #19191B
        border-radius 11px
        border unset
        margin-top 5px
        font-size: 12px;
        letter-spacing: 0;
        line-height: 12px;
        padding 4px 8px
        box-sizing border-box
    &-task
      background-image url('../assets/task_center/my_task.png')
      background-size 100%
      background-repeat no-repeat
      .click-btn
        color #FEE434
    &-lottery
      background url('../assets/task_center/my_lottery.png')
      background-size 100%
      background-repeat no-repeat
      .click-btn
        color #81CDFF
  .all-tasks
    .task-item
      display flex
      height 66px
      padding 0 24px
      align-items center
      &-icon
        width 42px
        height 42px
        flex 0 0 42px
        margin-right 12px
      &-content
        flex 1 1 auto
        >p:first-of-type
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #19191B;
          letter-spacing: 0;
          line-height: 14px;
        >p:last-of-type
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #82848B;
          letter-spacing: 0;
          line-height: 12px;
          margin-top 5px
      &-btn
        flex 0 0 64px
        width 64px
        height 28px
        background: rgba(60,157,251,0.10);
        border unset
        border-radius: 100px;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        color: #3C9DFB;
        letter-spacing: 0;
        text-align: center;
        line-height: 12px;
        &.finished
          background #EFEFF0
          color #fff;
</style>
