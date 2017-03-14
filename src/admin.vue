<script type="text/javascript">
  import chapters from './fixtures/chapters';

  export default {

    name: 'admin',

    data () {
      return {
        msg: "Admin View",
        newDay: {
          chapter: ''
        },
        chapterOptions: chapters
      };
    }

  };
</script>

<template>
  <div id="admin">
    <select v-model="newDay.chapter">
      <option v-for="(option, index) in chapterOptions" v-bind:value="option">
        {{ index + 1 }}: {{ option }}
      </option>
    </select>
    <span>Chapter: {{ newDay.chapter }}</span>
  </div>
</template>
