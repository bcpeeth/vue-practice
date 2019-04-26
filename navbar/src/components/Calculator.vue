<template>
  <div>
    <Header/>
    <div class="container">
      <div class="row calc-input py-5">
          <input v-model.number="num1" type="number" />
          <span>+</span>
          <input v-model.number="num2" type="number" />
          <span>=</span>
          <span>{{ num1 + num2 }}</span>
      </div>
    </div>

    <div class=" bg-blue">
      <div class="container py-5">
        <div class="row justify-content-center">
           <select v-model="name">
            <option>Carne Asada</option>
            <option>Pollo</option>
            <option>Beans</option>
            <option>Al Pastor</option>
          </select>
          <p v-if="name">My favorite kind of taco is {{ name }}</p>
        </div>
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
