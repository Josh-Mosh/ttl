<script type="text/javascript" src="./editable-row.js"></script>

<template>
  <md-table-row v-bind:class="{ isSelected: selected }" v-on:click.native="selectingDays ? selectDay() : editing=true">
    <md-table-cell class="lessPad">
      <span v-if="!editing">
        {{ day.chapter }}
      </span>
      <md-field v-else style="padding-top: 0px;">
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
      </md-field>
    </md-table-cell>

    <md-table-cell class="nopadding" v-if="editing">
      <md-field class="inline">
        <label for="month">Mo: </label>
        <date-input id="month" length="2" v-model.number="day.month"></date-input>
      </md-field>
      <md-field class="inline">
        <label for="day">Dy: </label>
        <date-input id="day" length="2" v-model.number="day.day"></date-input>
      </md-field>
      <md-field class="inline">
        <label for="year">Yr: </label>
        <date-input id="year" length="4" v-model.number="day.year"></date-input>
      </md-field>
    </md-table-cell>

    <md-table-cell v-else>
      {{ day.month }}/{{ day.day }}/{{ day.year }}
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-field v-if="editing">
        <label for="lat">Lat: </label>
        <md-input id="lat" v-model.number="day.lat" type="number"></md-input>
      </md-field>
      <span v-else>{{ day.lat }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-field v-if="editing">
        <label for="long">Lon: </label>
        <md-input id="long" v-model.number="day.long" type="number"></md-input>
      </md-field>
      <span v-else>{{ day.long }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-field v-if="editing">
        <label for="leagues">Leag: </label>
        <md-input id="leagues" v-model.number="day.leagues" type="number"></md-input>
      </md-field>
      <span v-else>{{ day.leagues }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-field v-if="editing">
        <label>Location: </label>
        <md-textarea v-model="day.location"></md-textarea>
      </md-field>
      <span v-else>{{ day.location }}</span>
    </md-table-cell>

    <md-table-cell class="lessPad">
      <md-field v-if="editing">
        <label for="excerpt">Excerpt: </label>
        <md-textarea id="excerpt" v-model="day.excerpt"></md-textarea>
      </md-field>
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
