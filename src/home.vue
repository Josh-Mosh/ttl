<script type="text/javascript">
  import topSites from './components/top-sites.vue';
  import bookmarks from './components/bookmarks.vue';

  export default {

    name: 'home',

    components: { topSites, bookmarks }

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
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>
