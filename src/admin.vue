<script type="text/javascript">
  export default {

    name: 'admin',

    data () {
      return {
        msg: "Admin View",
        newDay: {
          chapter: ''
        },
      };
    }

  };
</script>

<template>
  <div id="admin">
    <p>Chapter: {{ newDay.chapter }}</p>
    <input v-model="newDay.chapter" placeholder="Chapter">
  </div>
</template>
