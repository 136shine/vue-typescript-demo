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

<script>
export default {
  name: 'radio',
  props: {
    options: Array,
    val: Number
  },
  model: {
    prop: 'val', // 绑定的值，通过父组件传递
    event: 'update' // 自定义时间名
  },
  methods: {
    clickRadio (val) {
      this.checked2 = val
      this.$emit('update', val) // 子组件与父组件通讯，告知父组件更新绑定的值
    }
  },
  // 等同于
  // @Prop() readonly options !: string
  // @Model('update', {
  //   type: 'String'
  // })
  // val!: string
  // @Emit('update')
  // private clickRadio (val) {
  //   this.checked2 = val
  //   return val
  // }

  computed: {
    checked2: {
      get () {
        return this.val
      },
      set (newVal) {
        console.log(newVal)
      }
    }
  },
  watch: {
    checked2: function (newVal, oldVal) {
      console.log('我是子组件，现在的值为：' + newVal)
      alert('我是子组件，现在的值为：' + newVal)
    }
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
