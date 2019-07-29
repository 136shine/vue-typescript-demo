<template>
  <div id="app">
    <div class="left">选中：{{ checked }} ---- </div>
    <radio class="right" :options="options" v-model="checked"></radio>
    <!-- <radio class="right" :options="options" :val="checked" v-on:update="handleUpdate"></radio>  -->
    <!-- value是子组件传递过来的 -->
    <!--
        <input v-model="value" />
        等同于
        <input v-bind:value="value" v-on:input="value= $event.target.value" />
    -->
    <div><button @click="changeChecked">changeChecked</button></div>
  </div>
</template>

<script lang="js">
import radio from './radio.vue'
export default {
  name: 'index',
  components: {
    radio
  },
  data () {
    return {
      checked: 1,
      options: [
        {
          value: 0,
          name: '选项1'
        },
        {
          value: 1,
          name: '选项2'
        }
      ]
    }
  },
  watch: {
    checked: function (val, oldVal) {
      console.log('val-watch=>', val)
    }
  },
  methods: {
    // handleUpdate (val) {
    //   console.log('val==>', val)
    //   this.checked = val
    // },
    changeChecked () {
      this.checked = Number(!this.checked)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
