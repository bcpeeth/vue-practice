<template>
    <div class="container">
        <div class="destinations">
            <div id="app">
                <h1>Your Upcoming Destinations</h1>
                <div class="location-contain">
                    <div class="locations" v-for="location in locations" v-bind:key="location">
                        <place :location="location">
                            <img v-bind:src="location.img" width="235" height="300"/>
                            <h2>{{ location.name }}</h2>
                            <p>{{ location.desc }}</p>
                        </place>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                locations: [
                    {
                    name: 'moscow',
                    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
                    desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
                    },
                    {
                    name: 'paris',
                    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
                    desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
                    },
                    {
                    name: 'rome',
                    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
                    desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
                    },
                    {
                    name: 'paris',
                    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
                    desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
                    },
                    {
                    name: 'lisbon',
                    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
                    desc: `Lisbon is the capital and most populous city of Portugal. By the 17th century, Lisbon was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
                    },
                ]
            }
        }
    }
</script>

<style>

</style>
