<template>
  <div class="blog">
    <div id="app">
      <div class="contain">
        <h2>Blog Posts</h2>

        <div class="new">
          <h3>Add a New Post</h3>
          <form @submit.prevent="addPost">
            <input v-model="newTitle" placeholder="title" required/>
            <input v-model="newAuthor" placeholder="author name" required/>
            <select v-model="newLabel" required>
            <option disabled value="">Add a New label</option>
            <option>science</option>
            <option>math</option>
            <option>poetry</option>
            <option>history</option>
          </select>
            <button type="submit">Add New Blog Post</button>
          </form>
        </div>

        <select v-model="selected">
          <option disabled value="">Filter with a label</option>
          <option>Science</option>
          <option>Math</option>
          <option>Poetry</option>
          <option>History</option>
        </select>

        <div v-for="(post) in filteredByLabel" v-bind:key="post" class="post">
          <span class="label">{{ post.label }}</span>
          <p>{{ post.title }}</p>
          <small>{{ post.author }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
      data() {
        return {
          selected: '',
          posts: [
            {
              author: '@vFitzgerald',
              title: 'Quod Ducimus Omnis',
              label: 'science'
            },
            {
              author: '@mPalmer',
              title: 'Vero Eius Laboriosam Ex Repudiandae',
              label: 'math'
            },
            {
              author: '@mDean',
              title: 'Magnam Odit',
              label: 'science'
            },
            {
              author: '@tCole',
              title: 'Velit Mollitia Voluptates Assumenda',
              label: 'science'
            }
          ],
          newTitle: '',
          newAuthor: '',
          newLabel: '',
        }
      },

      methods: {
        addPost() {
          let addedPost = new Object({
            author: this.newAuthor,
            title: this.newTitle,
            label: this.newLabel
          });
          this.posts.push(addedPost)
          this.newTitle = '';
          this.newAuthor = '';
          this.newLabel = '';
        }
      },
  
      computed: {
        filteredByLabel() {
          let filter = new RegExp(this.selected, 'i')
          return this.posts.filter(el => el.label.match(filter))
        }
      }
  }
</script>
<style>

</style>
