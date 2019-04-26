<template>
  <div>
    <Header/>
    <div class="container">
        <h3>Sort titles by: 
            <button @click="sortLowest">Lowest Rated</button>
            <button @click="sortHighest">Highest Rated</button>
        </h3>
    </div>

    <div class=" bg-blue">
      <div class="container py-5">

      </div>
    </div>

  </div>
</template>


<script>
module.exports = {
  data() {
    return {
      num1: 0,
      num2: 0,
      name: ''
    }
  }
}
</script>
<style>

</style>
