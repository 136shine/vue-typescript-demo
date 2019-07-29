<template>
  <div class="card-wrap">
    <span class="name">{{item.name}}</span> <button class="status" @click="handleChangeStatus(item.id)">{{statusComputed}}</button> <button @click="handleDelTask(item.id)">删除</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { TodoItem } from '../store'

@Component
export default class Card extends Vue {
  @Prop() private item!: TodoItem

  @Emit('changeStatus')
  // private changeStatus(id: number) {
  //   return id
  // }
  private handleChangeStatus (id: number): void {
    // this.changeStatus(id)
  }

  @Emit('delTask')
  private handleDelTask (id: number): number {
    return id
  }

  private get statusComputed (): any {
    let _status: string = ''
    switch (this.item.status) {
      case 0: _status = '进行中'; break
      case 1: _status = '已完成'; break
      default: {
        return
      }
    }
    return _status
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 60px;
    background: #eff9f9;
    border-bottom: 1px dotted #ccc;
  }
  span.name {
    width: 400px;
    text-align: left;
  }
</style>
