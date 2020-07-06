import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken, getUserId, setUserId, getSchoolId, setSchoolId, encryption } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    isSchool: 0,
    userId: getUserId(),
    schoolId: getSchoolId()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_TOKEN_TYPE: (state, tokenType) => {
      state.tokenType = tokenType
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_IS_SCHOOL: (state, isSchool) => {
      state.isSchool = isSchool
    },
    SCHOOL_ID: (state, schoolId) => {
      state.schoolId = schoolId
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const user = encryption({
        data: userInfo,
        key: 'campuscampusabcd',
        param: ['password']
      })
      return new Promise((resolve, reject) => {
        login(user.username, user.password, user.code, user.randomStr).then(response => {
          const data = response.data
          setToken(data.accessToken)
          setUserId(data.userId)
          commit('SET_TOKEN', data.accessToken)
          // commit('SET_ACCESS_TOKEN', data.access_token)
          // commit('SET_REFRESH_TOKEN', data.refresh_token)
          // commit('SET_EXPIRES_IN', data.expires_in)
          // commit('CLEAR_LOCK')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(getUserId()).then(response => {
          const data = response.data
          commit('SET_NAME', data.username)
          if (data.schoolId == '') {
            commit('SET_IS_SCHOOL', 0)
          } else {
            setSchoolId(data.schoolId);
            commit('SCHOOL_ID', data.schoolId)
            commit('SET_IS_SCHOOL', 1)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    SCHOOLID({ commit }, schoolId) {
      setSchoolId(schoolId);
      commit('SCHOOL_ID', schoolId)
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        // commit('SCHOOL_ID','')
        // commit('')
        removeToken('Admin-Token')
        removeToken('userId')
        removeToken('schoolId')
        resolve()
      })
    }
  }
}

export default user
