import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

enum STATUS {
  DOING, // 进行中
  DONE // 完成
}

export interface TodoItem {
  id: number,
  name: string,
  status: number
}

export interface State {
  todoList: TodoItem[]
}

export const state: State = {
  todoList: [{
    id: 0,
    name: 'see movie',
    status: STATUS['DOING']
  }, {
    id: 1,
    name: 'reading',
    status: STATUS['DONE']
  }]
}

export const mutations: any = {
  delTask (state: State, id: number):void {
    const list: TodoItem[] = state.todoList
    state.todoList = list.filter(item => item.id !== id)
  },

  updateStatus (state: State, id: number):void {
    const list: TodoItem[] = state.todoList
    console.log('list===>', list)
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].id === id) {
        list[i].status = Number(!list[i].status)
      }
    }
  },

  addTask (state: State, item: TodoItem):void {
    const list: TodoItem[] = state.todoList
    list.push(item)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
