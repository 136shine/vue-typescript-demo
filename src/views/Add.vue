<template>
  <div class="add-wrap">
    <input type="text" placeholder="请添加任务，20字以内" v-model="value">
    <button @click="handleAddTask">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import { TodoItem } from '../store'

@Component
export default class Add extends Vue {
  private value: string = ''
  @State private todoList!: TodoItem[]
  @Mutation private addTask!: (item: TodoItem) => void

  private handleAddTask (): void {
    const len = this.todoList.length
    const task: TodoItem = {
      id: Number(this.todoList[len - 1].id + 1),
      name: this.value,
      status: 0
    }

    this.addTask(task)
    this.$router.push('/')
  }
}
</script>

<style scoped>
  .add-wrap {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  input {
    width: 300px;
    height: 35px;
    background: #fff;
    border: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-indent: 1em;
  }
  button {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    outline: none;
    border: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left: 20px;
    font-size: 20px;
  }
</style>
