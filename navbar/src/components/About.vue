<template>
  <div>
    <HeroImage/>
    <div class="container">
      <div class="text-block py-md-5">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <carousel>
        <img class="carousel-img" src="https://placeimg.com/200/200/any?1">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?2">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?3">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?4">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?2">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?3">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?4">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?2">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?3">
        <img class="carousel-img" src="https://placeimg.com/200/200/any?4">
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import HeroImage from './HeroImage'
export default {
  name: 'About', //this is the name of the component
  components: {
    'HeroImage': HeroImage,
    carousel },
}
</script>
<style>

</style>
