
import { getToken, setToken, removeToken } from '@/utils/auth'
import request from '@/utils/request'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    console.log('login');
    return new Promise((resolve, reject) => {
      request({
        url: '/user/login',
        method: 'post',
        data: {
          username: userInfo.username,
          password: userInfo.password
        }
      })
        .then(response => {
          // const { data } = response
          const data = response;
          this.token = data.token;

          commit('SET_TOKEN', data.token)
          // localStorage.setItem("token", this.token);
          setToken(data.token)
          // this.getUserInfo();
          resolve()
        })
        .catch(err => {
          console.log(err);
          reject(error)
        });
    });
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      // resetRouter()
      resolve()
      // }).catch(error => {
      // reject(error)
      // })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      request({
        url: '/user/info',
        method: 'get'
      })
        .then(response => {
          // const { data } = response
          const data = response
          console.log(data);
          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { roles, name, avatar, introduction } = data
          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }
          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)

        })
        .catch(err => {
          console.log(err);
        });
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      console.log("reset Token")
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
