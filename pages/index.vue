<template>
  <div>
    <header class="bg-light mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="logo p-3 text-center">
              <img width="400" src="@/assets/images/logo.svg" alt="Meet the Makers Logo">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="text-primary">
              <div class="h3">Saturday 10th August 2019, 7-11pm</div>
              <div>St Mary's College, Paul Keane Gymnasium, 11 New St, Ponsonb</div>
              <div>Gourmet Food and Entertainment</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="container mb-5">
      <div class="row">
        <div class="col">
          <p>
            The St Mary’s College PTFA is currently planning for its biennial ‘Meet the Makers’
            fundraising event, scheduled for Saturday 10 August 2019. This year’s event will be
            the fifth Meet the Makers, an event which has developed and grown over several
            years of successful partnerships with local businesses and support from the wider St
            Mary’s College community.
          </p>
          <p>
            Meet the Makers is a wonderful social evening for guests where they can sample the
            very best wine, beer, and beverages, complemented by delicious food,
            entertainment and a live auction.
          </p>
          <p>
            With a long history of successful fundraising to support the school’s goal to deliver
            quality education and resources for its students, Meet the Makers 2019 goal is to
            raise funds for the construction of a school playground for the benefit of all students
            at St Mary’s College.
          </p>
          <p>If you would like to be involved, we are currently seeking:</p>
          <p>
            <strong>Sponsors:</strong> a variety of options are available
          </p>
          <p>
            <strong>Exhibitors:</strong> (Food, Wine, Beer, Beverages) opportunities to showcase and sample your products.
          </p>
          <p>
            For more details please email
            <a
              href="mailto:jsheehan@stmaryak.school.nz"
            >jsheehan@stmaryak.school.nz</a>
          </p>
        </div>
        <div class="col"></div>
      </div>
    </section>
    <section class="mb-5 px-sm-4 border-top pt-5">
      <h2 class="h3 mb-3 text-center text-primary h2">Sponsors</h2>
      <div class="line ml-auto mr-auto mb2"></div>
      <div class="logo-grid">
        <div class="logo" v-for="sponsor in publishedSponsors" :key="sponsor.id">
          <a v-if="sponsor.fields.Website" target="_blank" :href="sponsor.fields.Website">
            <img :src="sponsor.fields.Logo[0].thumbnails.large.url">
          </a>
          <div v-else>
            <img :src="sponsor.fields.Logo[0].thumbnails.large.url">
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 px-sm-4 border-top pt-5">
      <h2 class="h3 mb-3 text-center text-primary h2">Exhibitors</h2>
      <div class="line ml-auto mr-auto mb2"></div>
      <div class="logo-grid">
        <div class="logo" v-for="exhibitor in publishedExhibitors" :key="exhibitor.id">
          <a v-if="exhibitor.fields.Website" target="_blank" :href="exhibitor.fields.Website">
            <img :src="exhibitor.fields.Logo[0].thumbnails.large.url">
          </a>
          <div v-else>
            <img :src="exhibitor.fields.Logo[0].thumbnails.large.url">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: null,
      exhibitors: null,
      email: 'jsheehan@stmaryak.school.nz'
    }
  },
  async asyncData({ $axios }) {
    const sponsors = await $axios.$get(
      'https://api.airtable.com/v0/appkPbXYEVwuaCVhW/Sponsors?view=Grid%20view&api_key=keyEkWnax7TUb9Cr9'
    )
    const exhibitors = await $axios.$get(
      'https://api.airtable.com/v0/appkPbXYEVwuaCVhW/Food%20and%20Wine?view=Grid%20view&api_key=keyEkWnax7TUb9Cr9'
    )
    return {
      sponsors: sponsors.records,
      exhibitors: exhibitors.records
    }
  },
  computed: {
    publishedSponsors() {
      if (!this.sponsors) return
      return this.sponsors.filter(sponsor => {
        return sponsor.fields.Published
      })
    },
    publishedExhibitors() {
      if (!this.exhibitors) return
      return this.exhibitors.filter(exhibitor => {
        return exhibitor.fields.Published
      })
    }
  }
}
</script>

<style></style>
