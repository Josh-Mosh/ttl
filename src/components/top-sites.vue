<script type="text/javascript" src="./top-sites.js"></script>

<style lang="scss">
  .top-link {
    display: block;
    overflow: hidden;
    position: relative;
    width: 200px;
    white-space: nowrap;

    img {
      display: inline-block;
    }

    .title {
      -webkit-mask-image: linear-gradient(to right, #000, #000, 157px, transparent);
      display: inline-block;
      left: 33px;
      overflow: hidden;
      position: absolute;
      width: 164px;
    }
  }
</style>

<template>
  <div class="md-layout-item md-size-20">
    <a v-for="site in topSites" class="top-link custom-whiteframe" v-bind:href="site.url">
      <img class="top-favicon" v-bind:src="site.fav">
      <div class="title">{{ site.title }}</div>
    </a>
  </div>
</template>
