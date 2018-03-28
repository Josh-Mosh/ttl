<script type="text/javascript" src="./home.js"></script>

<style lang="scss">
  .today-wrapper {
    display: flex;
    padding-top: 15px;
  }

  .today-text {
    color: #4a4942;
    font-family: 'Merienda';
    margin: 0 auto;
    text-align: center;
    white-space: pre-wrap;
  }

  .day-data{
    li {
      padding-bottom: 10px;
    }
  }
</style>

<template>
  <div id="home">
    <div class="md-layout">
      <bookmarks></bookmarks>
    </div>

    <div class="md-layout">
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>

    <div class="md-layout" style="height: 100%">
      <top-sites></top-sites>

      <div class="md-layout-item md-size-60">
        <date-time></date-time>

        <div v-for="excerpt in todayExcerpts" class="today-wrapper">
          <div class="today-text custom-whiteframe">{{ excerpt }}</div>
        </div>
      </div>

      <div class="md-layout-item md-size-20">
        <div class="custom-whiteframe">
          <ul v-for="day in dayData" class="day-data">
            <li v-for="(value, key) in day" class="md-layout">
              <span class="md-layout-item lable"><b>{{ key }}:&nbsp;</b></span>
              <span class="md-layout-item data">{{ value }}</span>
            </li>
            <hr>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
