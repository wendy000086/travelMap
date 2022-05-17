<template>
  <div class="indexSwiper">
      <common-swiper :items="imgs" :options="swiperOption">
          <template v-slot="imgs" >
              <!-- {{imgs}} -->
                <img class="swiper-slide"   :src="require('../../assets/images/home/banner'+ imgs.key+'.jpg')" alt="">
          </template>
      </common-swiper>
  </div>
</template>

<script>
export default {

    components : {
        'commonSwiper': () => import('./../common/common-swiper'),
    },

    data() {
        return {
            imgs :[
                {
                    key: '01',
                },
                {
                    key: '02',
                }
            ],
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                speed: 2000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            }
        }
    },



}
</script>

<style lang="scss">
.indexSwiper{
    .common-swiper {
        overflow: hidden;
        width: 100%;
        height: 800px;
        &.swiper-container > .swiper-pagination.swiper-pagination-bullets{
            bottom: 30px;
            .swiper-pagination-bullet{
                background:$white;
            }
        }
    }
}
</style> 