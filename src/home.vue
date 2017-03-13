<script type="text/javascript">
  import topSites from './components/top-sites.vue';

  export default {

    name: 'home',

    data () {
      return {
        msg: "Home View"
      };
    },

    components: { topSites }

  };
</script>

<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <img class="cover-image" src="./assets/images/cover1.jpg">
    <top-sites></top-sites>
  </div>
</template>
