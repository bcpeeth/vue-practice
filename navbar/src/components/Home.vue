<template>
  <div>
    <HeroImage/>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-7 text-center text-block">
          <h1>Continu in ontwikkeling</h1>
          <p>Daarbij zijn de medewerkers, klanten en relaties van Flexim intensief betrokken om samen een bijdrage te leveren aan aan diverse maatschappelijke doelen in binnen en buitenland. Volg hieronder onze laatste ontwikkelingen.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from './HeroImage'
export default {
  name: 'Home', //this is the name of the component
  components: {
    'HeroImage': HeroImage
  }
}
</script>
<style>

</style>
