<template>
  <div class="grid grid-cols-3 gap-8 mt-16" v-if="data">
    <!-- First column -->
    <div class="col-span-1 grid grid-cols-1 gap-5">
      <div
        class="bg-white rounded-20 p-2"
        v-for="(item, index) in data.slice(0, 2)"
        :key="index"
      >
        <div class="relative" style="padding-top: 42.6%">
          <picture>
            <source media="(max-width: 767px)" :srcset="item.image" />
            <source media="(max-width: 1023px)" :srcset="item.image" />
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute top-0 left-0 w-full h-full object-cover rounded-20"
              loading="lazy"
          /></picture>
        </div>
        <div class="card-detail-box flex mt-4">
          <time
            class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl mr-1"
            >{{ item.date }}</time
          >
          <div class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl">
            {{ item.tag }}
          </div>
        </div>
        <h3 class="my-2">{{ item.title }}</h3>
      </div>
    </div>
    <!-- Second column -->
    <div class="col-span-1 bg-white rounded-20 p-2">
      <div class="relative" style="padding-top: 42.6%">
        <picture>
          <source media="(max-width: 767px)" :srcset="data[3].image" />
          <source media="(max-width: 1023px)" :srcset="data[3].image" />
          <img
            :src="data[3].image"
            :alt="data[3].title"
            class="absolute top-0 left-0 w-full h-full object-cover rounded-20"
            loading="lazy"
        /></picture>
      </div>
      <div class="card-detail-box flex mt-4">
        <time
          class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl mr-1"
          >{{ data[3].date }}</time
        >
        <div class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl">
          {{ data[3].tag }}
        </div>
      </div>
      <h3 class="my-2">{{ data[3].title }}</h3>
    </div>
    <!-- Third column -->
    <div class="col-span-1 grid grid-cols-1 gap-5">
      <div
        class="bg-white rounded-20 p-2"
        v-for="(item, index) in data.slice(3, 5)"
        :key="index"
      >
        <div class="relative" style="padding-top: 42.6%">
          <picture>
            <source media="(max-width: 767px)" :srcset="item.image" />
            <source media="(max-width: 1023px)" :srcset="item.image" />
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute top-0 left-0 w-full h-full object-cover rounded-20"
              loading="lazy"
          /></picture>
        </div>
        <div class="card-detail-box flex mt-4">
          <time
            class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl mr-1"
            >{{ item.date }}</time
          >
          <div class="font-semibold text-xs bg-lightGray p-1.5 rounded-2xl">
            {{ item.tag }}
          </div>
        </div>
        <h3 class="my-2">{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/slider-img.jpeg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";

export default {
  setup() {
    const data = [
      {
        image: image1,
        title: "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე",
        date: "12.08.2023",
        tag: "პოლიტიკა",
      },
      {
        image: image2,
        title: "განთავსების (ლისტინგის) ორგანიზატორი ",
        date: "15.08.2023",
        tag: "მეცნიერება",
      },
      {
        image: image3,
        title: "სხვა სათაური",
        date: "18.08.2023",
        tag: "სამართალი",
      },
      {
        image: image3,
        title: "სხვა სათაური 4",
        date: "18.08.2023",
        tag: "სამართალი",
      },
      {
        image: image3,
        title: "სხვა სათაური 5",
        date: "18.08.2023",
        tag: "სამართალი",
      },
    ];
    return {
      data,
    };
  },
};
</script>

