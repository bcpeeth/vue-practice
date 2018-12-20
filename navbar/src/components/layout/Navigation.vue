<template>
  <nav class="navbar">
    <div class="container">
    <router-link class="navbar-btn" v-for="routes in links" 
    v-bind:key="routes.id"
    :to="`${routes.page}`">{{routes.text}}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'De Stichting',
          page:'/HelloWorld'
        },
        {
          id: 1,
          text: 'Nieuws',
          page:'/Home'
        },
        {
          id: 2,
          text: 'Projecten',
          page:'/About'
        },
        {
          id: 3,
          text: 'Informatie',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>
