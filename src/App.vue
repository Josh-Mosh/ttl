<script type="text/javascript" src="./app.js"></script>
<style src="./app.css"></style>

<template>
  <div>
    <md-toolbar>
      <h1 class="md-title">Material Test</h1>
    </md-toolbar>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
