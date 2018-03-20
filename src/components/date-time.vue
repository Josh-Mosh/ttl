<script type="text/javascript" src="./date-time.js"></script>

<style lang="scss">
  .date-time {
    width: 100%;
    text-align: center;
  }
</style>

<template>
  <div class="date-time">
    <div class="md-layout">{{ new Date() | moment("dddd, MMMM Do YYYY") }}</div>
    <div class="md-layout">{{time}}</div>
  </div>
</template>