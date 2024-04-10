<script setup>
import Header from "./components/Header.vue";
import MainSlider from "./components/Sliders/MainSlider.vue";
import NewsBar from "./components/NewsBar.vue";
import PopularBar from "./components/PopularBar.vue";
import KnownFactsSlider from "./components/Sliders/KnownFactsSlider.vue";
import GridBoxes from "./components/GridBoxes.vue";
</script>

<template>
  <Header />
  <main class="container mx-auto mt-11 flex font-regular text-darkGray">
    <div class="w-976">
      <MainSlider />
      <KnownFactsSlider />
      <GridBoxes />
    </div>
    <div style="width: calc(100% - 976px)">
      <NewsBar />
      <PopularBar />
    </div>
  </main>
</template>

