<script type="text/javascript" src="./app.js"></script>
<style src="./app.scss" lang="scss"></style>

<template>
  <div class="container">
    <router-view class="outer-wrapper" :days="days"></router-view>
    <md-bottom-bar>
      <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>
