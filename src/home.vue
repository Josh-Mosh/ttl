<script type="text/javascript">
  import topSites from './components/top-sites.vue';
  import bookmarks from './components/bookmarks.vue';

  export default {

    name: 'home',

    components: { topSites, bookmarks }

  };
</script>

<template>
  <div id="home">
    <bookmarks></bookmarks>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <img class="cover-image" src="./assets/images/cover1.jpg">
    <top-sites></top-sites>
  </div>
</template>
