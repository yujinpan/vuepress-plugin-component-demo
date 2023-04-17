<template>
  <div class="demo custom-block tip" :style="{ borderColor: color }">
    <p>{{ title }}</p>
    <component :is="name" />
    <details class="custom-block details">
      <summary>Click me to show code</summary>
      <p v-html="code"></p>
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
      default: 'gray',
    },
  },
  computed: {
    code() {
      return CODES[this.name];
    },
  },
};
</script>
