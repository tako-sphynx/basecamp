<template>
  <section class="w-full bg-white pt-5 pl-5 pb-6 rounded-20 mt-14">
    <h2 class="font-bpg">ცნობილი ფაქტები</h2>

    <slot name="prevButton" :swiper="swiper" />
    <slot name="nextButton" :swiper="swiper" />
    <div class="mt-5">
      <swiper
        :cssMode="true"
        :navigation="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        :slidesPerView="2.8"
        :spaceBetween="30"
        class="mySwiper"
        @swiper="onSwiperInit"
      >
        <swiper-slide
          v-for="(item, i) in sliderData"
          :key="i"
          class="bg-lightGray p-3 pb-4 rounded-20"
        >
          <div class="relative" style="padding-top: 40.5%">
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

          <h4 class="mt-2">{{ item.title }}</h4>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

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
      },
      {
        image: image2,
        title:
          "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
      },
      {
        image: image3,
        title: "სხვა სათაური",
      },
      {
        image: image2,
        title:
          "განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD",
      },
      {
        image: image3,
        title: "სხვა სათაური",
      },
      {
        image: image1,
        title:
          "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება",
      },
    ];
    const modules = [Navigation, Mousewheel, Keyboard];
    let swiper;
    const onSwiperInit = (sw) => {
      swiper = sw;
    };
    return {
      sliderData,
      modules,
      onSwiperInit,
      swiper,
    };
  },
};
</script>

<style>
/* Custom styles for swiper button */
.swiper-slide {
  height: auto;
}
.swiper-button-prev {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  z-index: 10;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-next {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: 10;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

