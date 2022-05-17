<template>
    <div>
        <Header />
        <router-view />
        <vfooter />
    </div>
</template>

<script>
import Header from '../components/common/header'
import vfooter from '../components/common/footer'

export default {
  name: 'root',
  components: {
      Header,
      vfooter,
  }
}
</script>