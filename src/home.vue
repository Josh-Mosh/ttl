<script type="text/javascript">
  import topSites from './components/top-sites.vue';
  import bookmarks from './components/bookmarks.vue';
  import axiosService from './services/axiosService';

  export default {

    name: 'home',

    components: { topSites, bookmarks },

    mounted: function() {
      this.getToday();
    },

    methods: {
      getToday() {
        axiosService.get('/today').then(response => {
          console.log('/today res ', response);
          // this.days = response.data.days;
        }).catch(err => {
          console.log('err ', err);
        });
      }
    }

  };
</script>

<template>
  <div id="home" class="outer-wrapper">
    <div class="inner-wrapper">
      <bookmarks></bookmarks>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
      <md-layout md-row>
        <top-sites></top-sites>
        <md-layout md-flex-large="80">
          <!-- <img class="cover-image" src="./assets/images/cover1.jpg"> -->
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>
