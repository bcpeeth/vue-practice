<template>
  <div class="filter">
    <Header/>
    <div class="container py-5">
      <div class="row">
        <div class="col-6">
          <div class="search-box">
            <h3>Search a title:</h3>
            <input v-model="filterText" />
          </div>
          <div class="filter-buttons">
            <h3>Sort titles by:</h3> 
            <button @click="sortLowest">Lowest Rated</button>
            <button @click="sortHighest">Highest Rated</button>
          </div>
        </div>
        <div class="col-6">
          <table>
            <thead>
              <tr>
                <th v-for="key in columns" v-bind:key="key">
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in filteredFilms" v-bind:key="entry">
                <td v-for="key in columns" v-bind:key="key">
                  {{entry[key]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
module.exports = {

  data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: `White Chicks`, rating: 82 },
        { title: `Grey's Anatomy`, rating: 98 },
        { title: `Prison Break`, rating: 98 },
        { title: `How I Met Your Mother`, rating: 94 },
        { title: `Supernatural`, rating: 95 },
        { title: `Breaking Bad`, rating: 97 },
        { title: `The Vampire Diaries`, rating: 91 },
        { title: `The Walking Dead`, rating: 98 },
        { title: `Pretty Little Liars`, rating: 96 },
        { title: `Once Upon a Time`, rating: 98 },
        { title: `Sherlock`, rating: 95 },
        { title: `Death Note`, rating: 77 },
        { title: `Naruto`, rating: 88 },
        { title: `Arrow`, rating: 96 },
        { title: `Black Mirror`, rating: 80 },
        { title: `The Originals`, rating: 74 },
        { title: `The 100`, rating: 97 },
        { title: `Masha and the Bear`, rating: 81 },
        { title: `Hunter X Hunter`, rating: 57 },
        { title: `Marvel's Luke Cage`, rating: 95 },
        { title: `Marvel's Iron Fist`, rating: 98 }
      ],
      filterText: ''
    }
  },

  methods: {
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
    }
  },

  computed: {
    filteredFilms() {
      let filter = new RegExp(this.filterText, 'i')
      return this.ratingsInfo.filter(el => el.title.match(filter))
    }
  }
}
</script>
<style>

</style>
