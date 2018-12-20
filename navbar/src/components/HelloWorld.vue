<template>
  <div>
    <HeroImage/>
    <div class="container"> <!--intro -->
      <div class="row flex-center py-5">
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
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center text-block">
            <h1>Doelstelling</h1>
            <p>“De Flexim Foundation stelt zich ten doel de levenscondities en toekomstmogelijkheden van kwetsbare groepen (in de Nederlandse samenleving en daarbuiten) te verbeteren. De Flexim Foundation tracht dit doel te bereiken door financiële ondersteuning van en actieve bijdrage aan de uitvoering van projecten conform het gestelde doel.”</p>
          </div> 
        </div>
      </div>
    </div>
    <div class="container"> <!--list -->
      <div class="row flex-center py-5">
        <div class="col-md-6 img-block">
          <img src="../assets/flexim-man.png" alt="">
        </div>
        <div class="col-md-6 text-block">
          <h1>Dit wordt bereikt door</h1>
          <div class="list-vertical">
            <ul>
              <li>financiële middelen te werven via sponsoring en giften</li>
              <li>continuïteit te waarborgen vanuit Flexim Netherlands</li>
              <li>werkgevers te motiveren om tijd/arbeid en kennis beschikbaar te stellen door vrijwilligerswerk van hun werknemers</li>
              <li>particulieren alsmede instanties in te zetten voor het verwerven van de middelen alsmede beschikbaar stellen van arbeid</li>
              <li>medewerkers en klanten van Flexim aan te sporen zich in te zetten bij de activiteiten van de foundation</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="row"></div>  
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
