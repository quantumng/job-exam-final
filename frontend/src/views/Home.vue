<template>
  <div class="home">
    <button class="sign-btn" @click="() => {$router.push('/task-center')}">签到</button>
    <div class="user-form">
      <div class="user-form-item">
        <label for="username">用户名：</label>
        <input id="username" type="text" v-model="username">
      </div>
      <div class="user-form-item">
        <label for="password">密码：</label>
        <input id="password" type="text" v-model="password">
      </div>
      <div class="user-form-item">
        <button class="btn" @click="addUser">注册</button>&nbsp;&nbsp;
        <button class="btn" @click="login">登录</button>
      </div>
    </div>
    <div class="user-list">
      <table>
        <tr>
          <th>序号</th>
          <th>用户名</th>
          <th>密码</th>
        </tr>
        <tr v-for="(user, index) in userList" :key="user.username">
          <td>{{index + 1}}</td>
          <td>{{user.username}}</td>
          <td>{{user.password}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { userApi } from '@/api/index';

export default {
  name: 'home',
  data() {
    return {
      msg: 'hello world',
      username: '',
      password: '',
      userList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions(['setUsername']),
    async getList() {
      const { result } = await userApi.list();
      console.log('list', result);
      this.userList = result;
    },
    addUser() {
      const params = {
        username: this.username,
        password: this.password,
      };
      userApi.register(params).then((res) => {
        console.log('res', res);
        this.getList();
      });
    },
    login() {
      const params = {
        username: this.username,
        password: this.password,
      };
      userApi.login(params).then((res) => {
        console.log('res', res);
        // this.mapActions()
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.home
  text-align center
  padding 20px
.sign-btn
  height 30px
  width 100px
  background-color #0094ff
  border none
  border-radius 4px;
  color #fff;
  margin 20px auto
.user-form
  margin 30px auto
  padding 10px
  border 1px solid #ddd
  border-radius 10px
  &-item
    margin 20px 0
    .btn
      height 30px
      width 80px
      background-color #0094ff
      border none
      border-radius 4px
      color #fff
    >label
      width 50px
      display inline-block
      font-size 12px
      text-align right
.user-list
  table
    width 300px
    border 1px solid #ddd
    margin 0 auto
    tr
      border 1px solid #ddd
      th,td
        border 1px solid #ddd
</style>
