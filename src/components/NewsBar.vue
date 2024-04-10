<template>
  <section class="w-full ml-8 bg-white rounded-20 pt-8 pl-6 pr-2">
    <h1 class="font-bpg">ყველა სიახლე</h1>
    <div
      class="max-h-530 overflow-auto scrollbar-thumb-black600 scrollbar-track-transparent"
    >
      <NewsCard v-for="(item, i) in 15" :key="i" />
    </div>
  </section>
</template>

<script setup>
import NewsCard from "./Cards/NewsCard.vue";
</script>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent; /* Set the scrollbar track color to transparent */
}
/* Thumb */
::-webkit-scrollbar-thumb {
  background: #657178; /* Set the scrollbar thumb color */
  border-radius: 64px; /* Set the scrollbar thumb border radius */
}
</style>

