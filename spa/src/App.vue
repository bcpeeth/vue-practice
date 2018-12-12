<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <router-view/>
    <Navigation></Navigation> 
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>

</style>
