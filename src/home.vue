<script type="text/javascript">
  import topSites from './components/top-sites.vue';
  import bookmarks from './components/bookmarks.vue';
  import dateTime from './components/date-time.vue';
  import axiosService from './services/axiosService';

  export default {

    name: 'home',

    data: function() {
      return {
        days: []
      };
    },

    computed: {
      today: function() {
        if (this.days.length) {
          return this.days[0].excerpt;
        }
      }
    },

    components: { topSites, bookmarks, dateTime },

    mounted: function() {
      this.getToday();
    },

    methods: {
      getToday() {
        axiosService.get('/today').then(response => {
          console.log('/today res ', response);
          this.days = response.data.days;
        }).catch(err => {
          console.log('err ', err);
        });
      }
    }

  };
</script>

<style lang="scss">
  .today-wrapper {
    display: flex;
  }

  .today-text {
    color: #4a4942;
    font-family: 'Merienda';
    margin: 0 auto;
    text-align: center;
    white-space: pre-wrap;
  }
</style>

<template>
  <div id="home">
    <div class="md-layout">
      <bookmarks></bookmarks>
    </div>

    <div class="md-layout">
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>

    <div class="md-layout" style="height: 100%">
      <top-sites></top-sites>

      <div class="md-layout-item md-size-60">
        <date-time></date-time>

        <div class="today-wrapper">
          <div class="today-text custom-whiteframe">{{ today }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
