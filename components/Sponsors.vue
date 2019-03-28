<template>
  <div>
    <h1>Sponsors</h1>
    {{ ip }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: 'Heelp',
      ip: {}
    }
  },
  // async asyncData({ $axios }) {
  //   const { sponsors } = await $axios.$get(
  //     'https://api.airtable.com/v0/appkPbXYEVwuaCVhW/Sponsors?view=Grid%20view&api_key=keyEkWnax7TUb9Cr9'
  //   )
  //   return { test: sponsors.records }
  // }
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  }
}
</script>
