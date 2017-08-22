<script type="text/javascript">
  import dateInput from './date-input.vue';

  export default {
    name: 'editable-row',
    props: ['day', 'index', 'chapters'],

    data: function() {
      return {
        editing: false
      }
    },

    components: { dateInput },

    methods: {
      editRow: function() {
        console.log('editing row');
      },

      update: function(day) {
        this.editing = false;
        // handle update request in parent
        this.$emit('update', day);
      },

      remove: function(id, index) {
        // handle remove request in parent
        this.$emit('remove', id, index);
      }
    }
  };
</script>

<style lang="scss">
</style>

<template>
  <md-table-row v-on:click.native="editing=true">
    <md-table-cell class="lessPad">
      <!-- {{ editing }} -->
      <span v-if="!editing">
        {{ day.chapter }}
      </span>
      <md-input-container v-else>
        <label for="chapter">Chapter: </label>
        <md-select id="chapter" v-model="day.chapter">
          <md-subheader>Part 1</md-subheader>
          <md-option v-for="(option, index) in chapters.partOne" v-bind:value="index + 1">
            {{ index + 1 }}. {{ option }}
          </md-option>
          <md-subheader>Part 2</md-subheader>
          <md-option v-for="(option, index) in chapters.partTwo" v-bind:value="index + 25">
            {{ index + 25 }}. {{ option }}
          </md-option>
        </md-select>
      </md-input-container>
    </md-table-cell>

    <md-table-cell class="nopadding" v-if="editing">
      <md-input-container class="inline">
        <label for="month">Mo: </label>
        <date-input id="month" length="2" v-model.number="day.month"></date-input>
      </md-input-container>
      <md-input-container class="inline">
        <label for="day">Dy: </label>
        <date-input id="day" length="2" v-model.number="day.day"></date-input>
      </md-input-container>
      <md-input-container class="inline">
        <label for="year">Yr: </label>
        <date-input id="year" length="4" v-model.number="day.year"></date-input>
      </md-input-container>
    </md-table-cell>

    <md-table-cell v-else>
      {{ day.month }}/{{ day.day }}/{{ day.year }}
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-input-container v-if="editing">
        <label for="lat">Lat: </label>
        <md-input id="lat" v-model.number="day.lat" type="number"></md-input>
      </md-input-container>
      <span v-else>{{ day.lat }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-input-container v-if="editing">
        <label for="long">Lon: </label>
        <md-input id="long" v-model.number="day.long" type="number"></md-input>
      </md-input-container>
      <span v-else>{{ day.long }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-input-container v-if="editing">
        <label for="leagues">Leag: </label>
        <md-input id="leagues" v-model.number="day.leagues" type="number"></md-input>
      </md-input-container>
      <span v-else>{{ day.leagues }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-input-container v-if="editing">
        <label for="location">Location: </label>
        <md-textarea id="location" v-model="day.location"></md-textarea>
      </md-input-container>
      <span v-else>{{ day.location }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-input-container v-if="editing">
        <label for="excerpt">Excerpt: </label>
        <md-textarea id="excerpt" v-model="day.excerpt"></md-textarea>
      </md-input-container>
      <span v-else>{{ day.excerpt }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-button v-if="editing" v-on:click.stop="update(day)" class="md-icon-button md-primary md-mini">
        <md-icon>check</md-icon>
      </md-button>
      <md-button v-else v-on:click.stop="remove(day._id, index)" class="md-icon-button md-mini">
        <md-icon>clear</md-icon>
      </md-button>
    </md-table-cell>
  </md-table-row>
</template>
