<script type="text/javascript" src="./app.js"></script>
<style src="./app.scss" lang="scss"></style>

<template>
  <div class="container">
    <md-toolbar>
      <h1 class="md-title">Material Test</h1>
    </md-toolbar>
    <div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
      <router-view class="inner-wrapper" :days="days"></router-view>
    </div>
    <md-bottom-bar>
      <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>
