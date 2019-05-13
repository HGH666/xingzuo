import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let key = '0db4a6757ed64712b97d60238e8c6bf1'

export default new Vuex.Store({
  state: {
    myJson: '',
    today: '',
    tomrrow: '',
    week: '',
    nextWeek: '',
    month: '',
    year: ''
  },
  mutations: {
    myJson (state, res) {
      state.myJson = res.data.data
    },
    settoday (state, data) {
      state.today = data
    },
    settomrrow (state, data) {
      state.tomrrow = data
    },
    setweek (state, data) {
      console.log(data)
      state.week = data
    },
    setmonth (state, data) {
      state.month = data
    },
    setNexWeek (state, data) {
      state.nextWeek = data
    },
    setyear (state, data) {
      state.year = data
    }
  },
  actions: {
    // 获取自编的Json文件
    getmyJson (store) {
      this._vm.$axios.get('/static/home.json')
      .then(res => {
        store.commit('myJson', res)
        // console.log(res)
      })
    },
    getdata (store, val) {
      // 根据页面触发方法传来的参数触发mutations里的方法赋值
      this._vm.$axios.get('/api/constellation/getAll?consName=' + val.name + '&type=' + val.time + '&key=' + key)
      .then((res) => {
        // console.log(typeof data)
        this.commit(val.fun, res.data)
      }).catch(error => console.log(error))
    }
  }
})
