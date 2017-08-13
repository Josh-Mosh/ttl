<script type="text/javascript">

  export default {
    name: 'editable-row',
    props: ['day', 'index'],

    data: function() {
      return {
        editing: false
      }
    },

    methods: {
      editRow: function() {
        console.log('editing row');
      }
    }
  };
</script>

<style lang="scss">
</style>

<template>
  <md-table-row v-on:click.native="editing=true">
    <md-table-cell>day: {{ day.chapter }}</md-table-cell>
    <md-table-cell>{{ day.date }}/{{ day.year }}</md-table-cell>
    <md-table-cell>{{ day.lat }}</md-table-cell>
    <md-table-cell>{{ day.long }}</md-table-cell>
    <md-table-cell>{{ day.leagues }}</md-table-cell>
    <md-table-cell>{{ day.location }}</md-table-cell>
    <md-table-cell>{{ day.excerpt }}</md-table-cell>
    <md-table-cell>{{ day.updated | moment("dddd, MM / Do / YYYY") }}</md-table-cell>
    <md-table-cell>
      <md-button v-on:click.native="removeDay(day._id, index)" class="md-icon-button md-mini">
        <md-icon>clear</md-icon>
      </md-button>
    </md-table-cell>
  </md-table-row>
</template>
