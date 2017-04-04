/**
 * Created by 98882 on 2017/4/1.
 */
import globalConfig from '../../config/config.js'
import axios from 'axios'

const state = {
  id: ''
}

const getters = {
  id: state => state.id
}

const mutations = {
  removeArticle (id) {
    state.id = id
  }
}

const actions = {
  removeArticle (context, data) {
    console.log(data)
    return axios.post(globalConfig.apiUrl + 'remove', {
      _id: data
    }).then(rep => {
     // commit('removeArticle', rep.body)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
