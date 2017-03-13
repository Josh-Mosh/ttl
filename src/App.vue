<script type="text/javascript" src="./app.js"></script>
<style src="./app.css"></style>

<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
