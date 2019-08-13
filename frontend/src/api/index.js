import http from '../lib/http';

const userPath = '/api/user';
const taskPath = '/api/task';
export const userApi = {
  register(params) {
    return http.post(`${userPath}/register`, params).then(res => res.data);
  },
  login(params) {
    return http.post(`${userPath}/login`, params).then(res => res.data);
  },
  list() {
    return http.get(`${userPath}/list`).then(res => res.data);
  },
};

export const taskApi = {
  getTasks(params) {
    return http.get(`${taskPath}/getUserTask?username=${params}`).then(res => res.data);
  },
  finishTask(params) {
    return http.post(`${taskPath}/finishTask`, params).then(res => res.data);
  },
  getLottery(params) {
    return http.get(`${taskPath}/lottery?username=${params}`).then(res => res.data);
  },
  finishLottery(params) {
    return http.post(`${taskPath}/finishLottery`, params).then(res => res.data);
  },
};
