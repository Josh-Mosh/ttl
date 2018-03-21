<script type="text/javascript">
  export default {
    name: 'date-time',

    data: function() {
      return {
        dateTime: new Date()
      }
    },

    mounted: function() {
      this.getNow();
    },

    methods: {
      getNow() {
        const self = this;
        this.dateTime = this.$moment();
        setTimeout(self.getNow, 1000);
      }
    }
  };
</script>

<style lang="scss">
  .date-time {
    width: 100%;
    text-align: center;

    .date, .time {
      color: white;
      text-shadow: 2px 2px 2px #273135;
    }

    .time {
      font-size: 120px;
      margin-bottom: 0;
      margin-top: 35px;
      line-height: 100px;
    }

    .date {
      font-size: 40px;
      margin-top: 0;
    }
  }
</style>

<template>
  <div class="date-time">
    <h3 class="time">{{ dateTime | moment("h:mm") }}</h3>
    <h1 class="date">{{ dateTime | moment("MMMM Do YYYY") }}</h1>
  </div>
</template>