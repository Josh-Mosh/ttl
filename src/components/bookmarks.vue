<script type="text/javascript" src="./bookmarks.js"></script>

<template>
  <ul class="toolbar bookmarks">
    <li v-for="bookmark in bookmarks" v-if="bookmark.url">
      <a v-bind:href="bookmark.url" v-bind:title="bookmark.title">
        <img class="top-favicon" v-bind:src="bookmark.fav">
        {{ bookmark.abbvTitle }}
      </a>
    </li>
    window width: {{windowWidth}}
  </ul>
</template>
