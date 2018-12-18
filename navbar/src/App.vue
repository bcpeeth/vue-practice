<template>
  <div id="app">
    <Navigation></Navigation>
    <!-- <HeroImage></HeroImage> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/layout/Navigation'
// import HeroImage from './components/HeroImage'
import Footer from './components/layout/Footer'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    // 'HeroImage': HeroImage,
    'Footer': Footer,
  }
}
</script>

<style>

</style>
