<template>
  <div id="app">
    <Navigation></Navigation>
    <HeroImage></HeroImage>
    <router-view/>
    
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import HeroImage from './components/HeroImage'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'HeroImage': HeroImage
  }
}
</script>

<style>

</style>
