<template>
  <div id="app">
    <Navigation></Navigation>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/layout/Navigation'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Header': Header,
    'Footer': Footer,
  }
}
</script>

<style>

</style>
