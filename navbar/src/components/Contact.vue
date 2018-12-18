<template>
  <div>
    <HeroImage/>
    <h1>Contact Me</h1>
    <p>
      <ul>
        <li>Email: {{email}}</li>
        <li>Website: <a href="http://webolution.nl/">{{web}}</a></li>
      </ul>
    </p>
  </div>
</template>

<script>
import HeroImage from './HeroImage'
export default {
  name: 'Contact',
  data(){
    return {
      email: 'pedro@pedro.com',
      web: 'webolution.nl'
    }
  },
  components: {
    'HeroImage': HeroImage
  },
  methods: {

  }
}
</script>
