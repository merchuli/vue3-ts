<template>
  <h1>Product Page</h1>
  <h3>product: {{ product }}</h3>
  <h3>color list: {{ colorList }}</h3>
  <h3>selected color {{ selectedColor }}</h3>
  <h3>
    amount: {{ amount }} (price * amount)
    <button @click="addAmount(1)">Add amount</button>
    <button @click="reset">Reset</button>
  </h3>
  <h3>total: {{ total }}</h3>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from 'vue';

interface IProduct {
  price: number;
  capacity: number;
}

const selectedColor = ref<string>('pink');
const amount = ref(0); // 不特別註明也可，會自動賦予型別 Ref<number>
const colorList: string[] = reactive(['pink', 'blue', 'yellow']);
const product: IProduct = reactive({ price: 15, capacity: 100 });

const total = computed(() => product.price * amount.value);

function addAmount(num: number) {
  amount.value += num;
}

function reset() {
  amount.value = 0;
}

</script>
