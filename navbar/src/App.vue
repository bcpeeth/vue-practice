<template>
  <div id="app">
    <Navigation></Navigation>
    <HeroImage></HeroImage>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import HeroImage from './components/HeroImage'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'HeroImage': HeroImage,
    'Footer': Footer,
  }
}
</script>

<style>

</style>
