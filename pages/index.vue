<template>
  <div>
    <header class="bg-light mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="logo p-3 text-center">
              <img
                class="img-fluid"
                width="400"
                src="@/assets/images/logo.svg"
                alt="Meet the Makers Logo"
              >
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-primary py-3">
              <div class="h3">Saturday 10th August 2019, 7-11pm</div>
              <div>St Mary's College, Paul Keane Gymnasium, 11 New St, Ponsonby</div>
              <div>Gourmet Food and Entertainment</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="container mb-5">
      <div class="row">
        <div class="col-md-6">
          <p>The St Mary’s College PTFA are planning for their biennial ‘Meet the Makers’ fundraising event, scheduled for Saturday 10 August 2019. This year’s event will be the fifth Meet the Makers, an event which has developed and grown over several years of successful partnerships with local businesses and support from the wider St Mary’s College community.</p>
          <p>Meet the Makers is a wonderful social evening where guests can sample the very best food, wine and beer all complemented by delicious food, a live auction, raffles, entertainment with a live DJ and a very special guest MC.</p>
          <p>The Meet the Makers goal for 2019 is to raise funds for the construction of a school playground to benefit all students at St Mary’s College.</p>
          <p>If you would like to be involved, we are currently seeking:</p>
          <p>
            <strong>Volunteers:</strong> for planning and also helpers on the day.
          </p>
          <p>
            For more details please email
            <a
              href="mailto:jsheehan@stmaryak.school.nz"
            >jsheehan@stmaryak.school.nz</a>
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="h5">Order Tickets</h3>
          <div class="mb-4">
            <button
              class="btn btn-primary"
              id="eventbrite-widget-modal-trigger-59670947410"
              type="button"
            >Buy Tickets Online</button>

            <script src="https://www.eventbrite.co.nz/static/widgets/eb_widgets.js"></script>

            <script type="text/javascript">
  var exampleCallback = function() {
    console.log('Order complete!');
  };

  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '59670947410',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-59670947410',
    onOrderComplete: exampleCallback
  });
            </script>
          </div>
          <hr class="mb-4">
          <h3 class="h5">Download Order Form</h3>
          <p>If you don't want to order online, you can download an order form and pay by direct deposit or cheque.</p>
          <p>
            <a
              href="https://s3-ap-southeast-2.amazonaws.com/meetthemakers/MTM-2019-offline-ticket-order-form.pdf"
              class="btn btn-primary"
            >Download Order Form</a>
          </p>
          <p>
            Order forms can be emailed to
            <a href="mailto:cathmmp@yahoo.com">cathmmp@yahoo.com</a>
          </p>
        </div>
      </div>
    </section>
    <section class="mb-5 px-sm-4 border-top pt-5">
      <h2 class="h3 mb-3 text-center text-primary h2">Sponsors</h2>
      <div class="line ml-auto mr-auto mb-3"></div>
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
      <div class="line ml-auto mr-auto mb-3"></div>
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
    };
  },
  async asyncData({ $axios }) {
    const sponsors = await $axios.$get(
      'https://api.airtable.com/v0/appkPbXYEVwuaCVhW/Sponsors?view=Grid%20view&api_key=keyEkWnax7TUb9Cr9'
    );
    const exhibitors = await $axios.$get(
      'https://api.airtable.com/v0/appkPbXYEVwuaCVhW/Food%20and%20Wine?view=Grid%20view&api_key=keyEkWnax7TUb9Cr9'
    );
    return {
      sponsors: sponsors.records,
      exhibitors: exhibitors.records
    };
  },
  computed: {
    publishedSponsors() {
      if (!this.sponsors) return;
      return this.sponsors.filter(sponsor => {
        return sponsor.fields.Published;
      });
    },
    publishedExhibitors() {
      if (!this.exhibitors) return;
      return this.exhibitors.filter(exhibitor => {
        return exhibitor.fields.Published;
      });
    }
  }
};
</script>


