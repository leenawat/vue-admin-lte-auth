<template>
  <div class="wrapper">
    <!-- <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap> -->
    <router-view/>
  </div>

</template>
<script>
// import VANaviBar from '../components/NaviBar.vue'
// import VASlider from '../components/Slider.vue'
// import VAContentWrap from '../components/ContentWrap.vue'
// import slideMenuItems from '../lib/slideMenuItems.js'
export default {
  data () {
    return {
      // slideMenuItems: slideMenuItems
    }
  },
  // components: {
  //   'va-navibar': VANaviBar,
  //   'va-slider': VASlider,
  //   'va-content-wrap': VAContentWrap
  // }
}
</script>
<style>
</style>