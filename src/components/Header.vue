<template>
  <header class="bg-white h-28 flex items-center">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <Logo />
        <nav class="flex items-center">
          <ul class="flex">
            <li
              v-for="(item, i) in navItems"
              :key="i"
              :class="{ 'mr-8': i < navItems.length - 1 }"
            >
              <a href="#" class="font-bpg text-base text-black600">{{
                item.name
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-tools flex items-center">
        <a
          href="#"
          class="w-8 h-8 mr-2 flex items-center justify-center bg-lightGray rounded-full"
        >
          <Insta />
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-lightGray rounded-full"
        >
          <Facebook />
        </a>
        <div class="relative ml-4">
          <input
            type="text"
            placeholder="ძიება"
            class="w-56 h-12 pl-4 pr-10 rounded-full bg-lightGray placeholder-darkGray focus:outline-none focus:placeholder-transparent"
          />
          <button type="button" class="absolute inset-y-0 right-4">
            <Search />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Facebook from "./Icons/Facebook.vue";
import Insta from "./Icons/Insta.vue";
import Logo from "./Icons/Logo.vue";
import Search from "./Icons/Search.vue";

const navItems = [
  { id: 1, name: "პოლიტიკა" },
  { id: 2, name: "საზოგადოება" },
  { id: 3, name: "სამართალი" },
  { id: 4, name: "ბიზნესი & ეკონომიკა" },
];
</script>

<style scoped>
nav::before {
  content: "";
  width: 2px;
  height: 32px;
  border-radius: 64px;
  background-color: #f2f3f7;
  display: inline-block;
  margin: 0 32px;
}
</style>

