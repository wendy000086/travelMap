<template>
    <swiper ref="swiper" :class="['common-swiper']" :options="options" @mouseenter.native="mouseEnter"
          @mouseleave.native="mouseLeave">
        <swiper-slide v-for="(item, idx) in items" :key="`swiper-slide-${idx}`">
            <slot v-bind="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-show="moreThanOne"></div>
    </swiper>
</template>

<script>
import { Swiper , SwiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components:{
        Swiper , 
        SwiperSlide
    },

    props: {
        items: {
            type: Array,
            default: () => [],
        },
        whenUpdateToFirst: {
          type: Boolean,
          default: false,
        },  
        options:{
          type: Object
          
        },
        // 滑鼠移至上方時停止
        swiperStop: {
          type: Boolean,
          default: false,
        },    
    },

    data() {
      return {
        swiperOption: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
      }
    },
    watch: {
      items(v) {
        if (this.whenUpdateToFirst && v.length) {
          this.initSwiper()
        }
      },
    },
    computed: {
        moreThanOne() {
          return this.items.length > 1
        },
        
    },
    methods: {
      initSwiper() {
        this.$nextTick(() => {
          const swiperRef = this.$refs.swiper
          if (swiperRef && swiperRef.$swiper) {
            swiperRef.$swiper.slideTo(0)
          }
        })
      },
      mouseEnter() {
        if (this.swiperStop) {
          this.$refs.swiper.$swiper.autoplay.stop()
        }
      },
      mouseLeave() {
        if (this.swiperStop) {
          this.$refs.swiper.$swiper.autoplay.start()
        }
      },
    },
}
</script>

<style lang="scss">
.common-swiper {
  &.swiper-container > .swiper-pagination.swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
    line-height: 0;
  }

  &__dot {
    width: 18px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease-in;

    &.swiper-pagination-bullet {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      background-color: $white;
    }
  }
}

</style>