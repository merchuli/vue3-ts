<template>
  <div>
    <h1>Welcome to My Book Store</h1>
    The book you choose is: {{ selectedBook }}
    <book-list :book-list="bookItemList" @update-selected-book="selectBook"></book-list>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { IBookItem } from '../interfaces/bookItem';
import BookList from '../components/BookList.vue';

const selectedBook = ref<string>('');
const bookItemList = reactive<IBookItem[]>([
  {
    id: 1,
    title: 'A Song of Ice and Fire',
    author: 'George R. R. Martin',
    publishedYear: 1996,
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
]);

function selectBook(payload: IBookItem) {
  selectedBook.value = payload.title;
}
</script>
