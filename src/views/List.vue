<template>
  <div class="list-wrap">
   <div class="card" v-for="item in todoList" :key="item.id">
     <card :item="item" @changeStatus="onChangeStatus" @delTask="onHandleDel"></card>
     <!-- <span class="name">{{item.name}}</span> <button class="status" @click="handleChangeStatus(item.id)">{{item.status}}</button> <button @click="handleDel(item.id)">删除</button> -->
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import Card from '../components/Card.vue'
import { TodoItem } from '../store'

@Component({
  components: { Card }
})
export default class List extends Vue {
  @State private todoList!: TodoItem[]
  @Mutation private delTask!: (id: number) => void
  @Mutation private updateStatus!: (id: number) => void

  private onChangeStatus (id: number):void {
    console.log('id=>', id)
    this.updateStatus(id)
  }

  private onHandleDel (id: number):void {
    this.delTask(id)
  }
}
</script>

<style scoped>
.list-wrap {
  width: 100%;
}
 .card {
   width: 100%;
   display: flex;
   justify-content: center;
 }
</style>
