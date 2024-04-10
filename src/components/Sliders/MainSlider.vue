<template>
  <section class="main-slider w-full bg-white p-3 pb-6 rounded-20">
    <swiper
      :cssMode="true"
      :navigation="true"
      :draggable="true"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      :effect="'fade'"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, i) in sliderData" :key="i">
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
        <h3 class="text-2xl font-medium my-2">{{ item.title }}</h3>
        <p class="text-black600">{{ item.subtitle }}</p>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import image1 from "@/assets/images/slider-img.jpeg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const sliderData = [
      {
        image: image1,
        title:
          "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
        subtitle:
          "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
        date: "12.08.2023",
        tag: "პოლიტიკა",
      },
      {
        image: image2,
        title:
          "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
        subtitle: "სხვა ტექსტი",
        date: "15.08.2023",
        tag: "მეცნიერება",
      },
      {
        image: image3,
        title: "სხვა სათაური",
        subtitle:
          "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
        date: "18.08.2023",
        tag: "სამართალი",
      },
    ];
    return {
      sliderData,
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style>
.swiper-button-prev {
  left: 24px;
}
.swiper-button-next {
  right: 24px;
}
.swiper-button-next,
.swiper-button-prev {
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-slider .swiper-button-next,
.main-slider .swiper-button-prev {
  top: 218px !important;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  font-size: 10px;
  color: #1d2d35;
}
.swiper-pagination {
  position: absolute;
  bottom: 40px !important;
}
.main-slider .swiper-pagination {
  top: 360px !important;
}
.swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-bullet-active {
  width: 24px;
  background-color: rgba(255, 255, 255, 1);
  transition: 0.4s;
  border-radius: 64px;
}
</style>

