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
import { IBookItem } from '../interfaces/bookItem';

type Props = {
  bookList: IBookItem[]
}

type Emits = {
  (e: 'update-selected-book', payload: IBookItem): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function updateSelectedBook(payload: IBookItem) {
  emit('update-selected-book', payload);
}
</script>
<style scoped lang="sass">
.clickable
  &:hover
    cursor: pointer
    background-color: #eee

</style>
