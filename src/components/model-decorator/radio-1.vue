<template>
  <div class="radio">
    <div class="radioGroup">
      <div
        class="radioItem"
        v-for="item in options"
        :key="item.value"
        @click="clickRadio(item.value);"
      >
        <div
          class="radioBox"
          :class="{ checked: item.value === checked2 }"
        ></div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model, Watch } from 'vue-property-decorator'

@Component
export default class Radio extends Vue {
  @Prop() options!: any[]
  @Model('update', {
    type: Number
  })
  val!: number

  get checked2 () {
    return this.val
  }

  //   set checked2 (val) {
  //     //   this.checked2 = val
  //   }

  @Emit('update')
  private clickRadio (val: number) {
    // this.checked2 = val
    return val
  }

  @Watch('checked2')
  onChecked2 (val: number, oldVal: number) {
    console.log('我是子组件，现在的值为：' + val)
  }
}

</script>
<style>
.left,
.right,
.radioItem,
.radioBox,
.name {
  display: inline-block;
}
.radioItem,
.name {
  margin-left: 10px;
}
.radioBox {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid #16cbf1;
}
.checked {
  background-color: #16cbf1;
}
</style>
