<template>
  <section class="photo-log">
    <div class="container my-5">
      <div class="log-block">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-post-photo.jpg" class="main-photo">

        <div class="first-user">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-main-profile.jpg" class="main-profile">
          <div class="main-info">
            <h3 class="name">Julianne Delfina</h3> 
            <h4>"It's lovely after it rains"</h4>
          </div>
        </div>
        <ul>
          <li v-for="comments in comments" v-bind:key="comments">
            {{ comments }}
          </li>
        </ul>
        <input
          v-model="newComment"
          v-on:keyup.enter="addComment"
          placeholder="Add a comment"
        >
        </div>
      </div>
  </section>

</template>

<script>
  module.exports = {
    data() {
      return {
        newComment: '',
        comments: [
          'Looks great Julianne!',
          'I love the sea',
          'Where are you at?'
        ]
      }
    },

    methods: {
      addComment: function () {
      this.comments.push(this.newComment)
      this.newComment = ''
    },
  }
}
</script>