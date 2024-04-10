<template>
  <a href="#" class="relative block pr-1 pb-4 mt-4">
    <div class="flex items-center">
      <div class="relative w-24 h-24 shrink-0 mr-2">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="@/assets/images/image3.jpg" />
          <source
            media="(max-width: 1023px)"
            srcset="@/assets/images/image3.jpg" />
          <img
            src="@/assets/images/image3.jpg"
            alt="description"
            class="absolute top-0 left-0 w-full h-full object-cover rounded-20"
            loading="lazy"
        /></picture>
      </div>
      <p class="text-sm mt-2 font-regular">
        დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა
      </p>
    </div>
    <div
      class="dashed-line absolute inset-x-0 bottom-0 h-px bg-transparent"
    ></div>
  </a>
</template>

<script setup></script>

<style scoped>
.dashed-line {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23F2F3F7FF' stroke-width='4' stroke-dasharray='8%2c 14' stroke-dashoffset='1' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>

