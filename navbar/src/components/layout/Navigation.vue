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
          text: 'Calculator',
          page:'/Calculator'
        },
        {
          id: 1,
          text: 'Blog',
          page:'/Blog'
        },
        {
          id: 2,
          text: 'Filter',
          page:'/Filter'
        },
        {
          id: 3,
          text: 'Chall4',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>
