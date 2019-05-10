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
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Calculator',
          page:'/Calculator'
        },
        {
          id: 2,
          text: 'Blog',
          page:'/Blog'
        },
        {
          id: 3,
          text: 'Filter',
          page:'/Filter'
        },
        {
          id: 4,
          text: 'Photo Log',
          page:'/PhotoLog'
        },
        {
          id: 5,
          text: 'Destinations',
          page: '/Destinations'
        }
      ]
    }
  }
}
</script>
