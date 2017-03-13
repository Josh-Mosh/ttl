<script type="text/javascript" src="./bookmarks.js"></script>

<template>
  <div>
    <ul class="bookmarks">
      <li v-for="bookmark in bookmarks" v-if="bookmark.url">
        <a v-bind:href="bookmark.url">
          <img class="top-favicon" v-bind:src="bookmark.fav">
          {{ bookmark.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
