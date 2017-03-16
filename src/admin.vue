<script type="text/javascript" src="./admin.js"></script>

<template>
  <div>
    <md-layout tag="form" novalidate @submit.stop.prevent="createDay">
      <md-input-container>
        <label for="chapter">Chapter: </label>
        <md-select id="chapter" v-model="newDay.chapter">
          <md-option v-for="(option, index) in chapterOptions" v-bind:value="index + 1">
            {{ index + 1 }}: {{ option }}
          </md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="lat">Latitude: </label>
        <md-input id="lat" v-model.number="newDay.lat" type="number"></md-input>
      </md-input-container>

      <md-input-container>
        <label for="long">Longitude: </label>
        <md-input id="long" v-model.number="newDay.long" type="number"></md-input>
      </md-input-container>

      <md-input-container>
        <label for="leagues">Leagues: </label>
        <md-input id="leagues" v-model.number="newDay.leagues" type="number"></md-input>
      </md-input-container>

      <md-input-container>
        <label for="excerpt">Excerpt: </label>
        <md-textarea id="excerpt" v-model="newDay.excerpt"></md-textarea>
      </md-input-container>

      <md-input-container>
        <label for="location">Location: </label>
        <md-input id="location" v-model="newDay.location" type="text"></md-input>
      </md-input-container>

      <md-button type="submit" class="md-raised md-primary">Create Day</md-button>
    </md-layout>

    <md-layout md-flex-small="100" md-flex-large="100" md-flex-xlarge="100">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Chapter</md-table-head>
            <md-table-head>Latitude</md-table-head>
            <md-table-head>Longitude</md-table-head>
            <md-table-head>Leagues</md-table-head>
            <md-table-head>Location</md-table-head>
            <md-table-head width="50%">Excerpt</md-table-head>
            <md-table-head>Updated</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="day in days">
            <md-table-cell>{{ day.chapter }}</md-table-cell>
            <md-table-cell>{{ day.lat }}</md-table-cell>
            <md-table-cell>{{ day.long }}</md-table-cell>
            <md-table-cell>{{ day.leagues }}</md-table-cell>
            <md-table-cell>{{ day.location }}</md-table-cell>
            <md-table-cell>{{ day.excerpt }}</md-table-cell>
            <md-table-cell>{{ day.updated }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>
  </div>
</template>
