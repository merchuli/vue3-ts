<template>
  My Component - {{ props.name }}
  <br>
  {{ props.foo }}
  <button @click="change">change</button>
  <br>
  <button @click="getData">Get Data</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

interface IProps {
  name: string
  foo?: string
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Haru',
  foo: 'bar!',
});

const emits = defineEmits(['change', 'delete']);

// const props = defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   foo: {
//     type: String,
//     default: 'my prop',
//   },
// });

// type SizeOptions = 'small' | 'medium' | 'large';
// defineProps({
//   size: { type: String as PropType<SizeOptions> },
// })

function change() {
  emits('change', 'my-text');
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log('data', data);
}
</script>
