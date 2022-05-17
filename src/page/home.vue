<template>
  <div class="common-top">
      <!-- 輪播 -->
       <indexSwiper />

       <indexExplore />

       <indexParticipate />

       <indexEnjoy />

       <indexSubscribe />


  </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
        'indexSwiper': () => import(`@/components/home/indexSwiper`),
        'indexExplore': () => import(`@/components/home/indexExplore`),
        'indexParticipate': () => import(`@/components/home/indexParticipate`),
        'indexEnjoy': () => import(`@/components/home/indexEnjoy`),
        'indexSubscribe': () => import(`@/components/home/indexSubscribe`),
    }

}
</script>

<style>

</style>