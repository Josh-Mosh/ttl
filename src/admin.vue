<script type="text/javascript">
  import chapters from './fixtures/chapters';

  export default {

    name: 'admin',

    data () {
      return {
        msg: "Admin View",
        newDay: {
          chapter: 1
        },
        chapterOptions: chapters
      };
    }

  };
</script>

<template>
  <div id="admin">

    <div>
      <label for="chapter">Chapter: </label>
      <select id="chapter" v-model="newDay.chapter">
        <option v-for="(option, index) in chapterOptions" v-bind:value="index + 1">
          {{ index + 1 }}: {{ option }}
        </option>
      </select>
    </div>

    <div>
      <label for="lat">Latitude: </label>
      <input id="lat" v-model.number="newDay.lat" type="number">
    </div>

    <div>
      <label for="long">Longitude: </label>
      <input id="long" v-model.number="newDay.long" type="number">
    </div>

    <div>
      <label for="leagues">Leagues: </label>
      <input id="leagues" v-model.number="newDay.leagues" type="number">
    </div>

    <div>
      <label for="excerpt">Excerpt: </label>
      <textarea id="excerpt" v-model="newDay.excerpt"></textarea>
    </div>

    <div>
      <label for="location">Location: </label>
      <input id="location" v-model="newDay.location" type="text">
    </div>

  </div>
</template>
