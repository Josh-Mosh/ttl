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

<style lang="scss">
  .today-wrapper {
    position: absolute;
    top: 50%;
    width: 100%
  }

  .today-text {
    color: #4a4942;
    font-family: 'Merienda';
    font-size: 13px;
    margin: 0 auto;
    text-align: center;
    width: 310px;
  }
</style>

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
      </md-layout>
      <md-layout md-row>
        <div class="today-wrapper">
          <div class="today-text">
            "Bah!" he replied. "Nothing's out there, Professor Aronnax, and if there is some animal, what chance would we have of spotting it? Can't you see we're just wandering around at random? People say they've sighted this slippery beast again in the Pacific high seas-- I'm truly willing to believe it, but two months have already gone by since then, and judging by your narwhale's personality, it hates growing moldy from hanging out too long in the same waterways! It's blessed with a terrific gift for getting around. Now, professor, you know even better than I that nature doesn't violate good sense, and she wouldn't give some naturally slow animal the ability to move swiftly if it hadn't a need to use that talent. So if the beast does exist, it's already long gone!"
          </div>
        </div>
      </md-layout>
    </div>
  </div>
</template>
