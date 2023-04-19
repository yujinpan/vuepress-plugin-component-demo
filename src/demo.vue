<template>
  <div class="demo custom-block tip" :style="{ borderColor: color }">
    <p>{{ title }}</p>
    <component :is="name" />
    <details class="custom-block details">
      <summary>Click me to show code</summary>
      <div class="language-vue extra-class" v-html="code"></div>
    </details>
  </div>
</template>

<script>
import { CODES } from '@dynamic/demo-codes';

export default {
  props: {
    name: String,
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#eaecef',
    },
  },
  computed: {
    code() {
      return CODES[this.name];
    },
  },
};
</script>

<style scoped>
.demo.custom-block {
  border: 1px solid #eaecef;
  border-radius: 6px;
  background: none;
}
</style>
