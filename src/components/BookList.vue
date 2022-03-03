<template>
  <h4>My Book List</h4>
  <ul>
    <li
      v-for="(item, index) in props.bookList"
      class="clickable"
      :key="index"
      @click="updateSelectedBook(item)">
      <b>{{ item.title }}</b> by {{ item.author }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { BookItem } from '../interfaces/bookItem';

type Props = {
  bookList: BookItem[]
}

type Emits = {
  (e: 'update-selected-book', payload: BookItem): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function updateSelectedBook(payload: BookItem) {
  emit('update-selected-book', payload);
}

</script>
<style scoped lang="sass">
.clickable
  &:hover
    cursor: pointer
    background-color: #eee

</style>
