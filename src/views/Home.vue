<template>
  <div class="home">
    Hello World！
    <button @click="log">Click me!</button>
    <div>{{ capitalize('hello') }}</div>
    amount: {{ amount }}
    refObj: {{ refObj }}
    <button @click="decreaseAmount">-</button>
    <button @click="increaseAmount">+</button>
    <br>
    <my-component :name="name" @change="change"></my-component>
    <br>
    <button @click="getStoreState">get store state</button>
    <br>
    <button ref="myBtn" @click="getMyBtn">Ref Btn</button>
    <h3>ref() v.s reactive()</h3>
    <p>initial value: {{ normalArray }}</p>
    <button @click="appendValue">Append 5</button>
    <button @click="updateArray">update array</button>
    <p>refArray: {{ refArray }}</p>
    <p>reactiveArray: {{ reactiveArray }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';

import MyComponent from '../components/MyComponent.vue';
import capitalize from '../services/myService';

console.log('hello script setup');

// varibales
const store = useStore();
// let amount = 1;
// Reactive Amount
const amount = ref(1);
const myBtn = ref('');
// 下方要使用 ref or reactive 勒？
const refObj = ref({ a: 1, b: 2 });
const product = reactive({ price: 5, quantity: 2 });

const normalArray = [1, 2, 3, 4];
const refArray = ref([1, 2, 3, 4]);
const reactiveArray = reactive([1, 2, 3, 4]);

// Static Variables
const msg = 'Hello';
const name = 'Merchu';

// functions
function log() {
  console.log('msg', msg);
  console.log('product', product);
}

function change(value: string) {
  console.log('change', value);
}

function getStoreState() {
  console.log(store.state.a.count);
}

function increaseAmount() {
  amount.value += 1;
  refObj.value.a += 2;
}

function decreaseAmount() {
  amount.value -= 1;
  refObj.value.a -= 2;
}

function getMyBtn() {
  console.log(myBtn.value, typeof myBtn.value);
}

function appendValue() {
  normalArray.push(5); // not reactive, so the value won't be updated
  refArray.value.push(5);
  reactiveArray.push(5);
}

function updateArray() {
  normalArray[0] = 8; // not reactive, so the value won't be updated
  refArray.value[0] = 9;
  reactiveArray[0] = 10;
}

// reactive
// const count = ref(1);
//  count = 1;
</script>
