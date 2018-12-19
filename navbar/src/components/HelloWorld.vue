<template>
  <div>
    <HeroImage/>
    <div class="container py-md-5">
      <div class="row flex-center">
        <div class="col-md-6 text-block">
          <h1>Oprichting</h1>
          <p>De Flexim Foundation is opgericht op 3 juli 2018 in Dordrecht op initiatief van een aantal medewerkers van Flexim Netherlands.</p>

          <p>De Flexim Foundation zet zich in voor diverse kwetsbare groepen binnen en buiten de Nederlandse samenleving. Deze kwetsbare groepen worden geholpen om hun levenscondities te verbeteren en toekomstperspectief te vergroten.</p>
        </div>
        <div class="col-md-6 img-block">
          <img src="../assets/Tekengebied.png" alt="">
        </div>
      </div>
    </div>
    <div class=" bg-blue">
      <div class="container">
        <div class="row py-md-5">
          <div class="col-md-6 col-md-push-3">
            <h1>Doelstelling</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from './HeroImage'
export default {
  name: 'HelloWorld', //this is the name of the component
  components: {
    'HeroImage': HeroImage
  }
}
</script>
<style>

</style>
