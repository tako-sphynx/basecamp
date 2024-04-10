<template>
  <a href="#" class="relative block pr-1 pb-4 mt-4">
    <div class="flex items-center">
      <WatchIcon class="mr-2.5" />
      <div class="text-purple text-xs font-semibold">7:30</div>
      <DotIcon class="mx-1" />
      <time class="text-purple text-xs font-semibold">02.01.2023</time>
    </div>
    <p class="text-sm mt-2">
      დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
    </p>
    <div
      class="dashed-line absolute inset-x-0 bottom-0 h-px bg-transparent"
    ></div>
  </a>
</template>

<script setup>
import WatchIcon from "../Icons/WatchIcon.vue";
import DotIcon from "../Icons/DotIcon.vue";
</script>

<style scoped>
.dashed-line {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23F2F3F7FF' stroke-width='4' stroke-dasharray='8%2c 14' stroke-dashoffset='1' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>

