<script type="text/javascript" src="./top-sites.js"></script>

<template>
  <div>
    <ul>
      <li v-for="site in topSites">
        <a v-bind:href="site.url">
          <img class="top-favicon" v-bind:src="site.fav">
          {{ site.url }}
        </a>
      </li>
    </ul>
  </div>
</template>
