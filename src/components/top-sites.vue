<script type="text/javascript" src="./top-sites.js"></script>

<template>
  <div>
    <ul>
      <li v-for="site in topSites">
        <a v-bind:href="site.url">{{ site.title }}</a>
      </li>
    </ul>
  </div>
</template>
