<script type="text/javascript" src="./admin.js"></script>

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

    <div>
      <button v-on:click="createDay">Create Day</button>
    </div>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Chapter</md-table-head>
          <md-table-head>Latitude</md-table-head>
          <md-table-head>Longitude</md-table-head>
          <md-table-head>Leagues</md-table-head>
          <md-table-head>Location</md-table-head>
          <md-table-head>Excerpt</md-table-head>
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
  </div>
</template>
