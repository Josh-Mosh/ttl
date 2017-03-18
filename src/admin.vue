<script type="text/javascript" src="./admin.js"></script>

<template>
  <div>

    <md-whiteframe v-if="creatingDay" md-elevation="2">
      <form novalidate @submit.stop.prevent="createDay">
        <md-layout md-column-xsmall class="gutter-8">

          <md-layout md-row-small md-flex-small="100" md-flex-medium="30" md-flex-large="30">
            <md-input-container>
              <label for="chapter">Chapter: </label>
              <md-select id="chapter" v-model="newDay.chapter">
                <md-subheader>Part 1</md-subheader>
                <md-option v-for="(option, index) in partOneChapters" v-bind:value="index + 1">
                  {{ index + 1 }}. {{ option }}
                </md-option>
                <md-subheader>Part 2</md-subheader>
                <md-option v-for="(option, index) in partTwoChapters" v-bind:value="index + 25">
                  {{ index + 25 }}. {{ option }}
                </md-option>
              </md-select>
            </md-input-container>
          </md-layout>

          <md-layout md-row-xsmall class="gutter-8">
            <md-layout md-flex-xsmall="33" md-flex-small="30" md-flex-medium="8" md-flex-large="8">
              <md-input-container>
                <label for="month">Month: </label>
                <date-input id="month" length="2" v-model.number="newDay.date.month"></date-input>
              </md-input-container>
            </md-layout>

            <md-layout md-flex-xsmall="33" md-flex-small="30" md-flex-medium="8" md-flex-large="8">
              <md-input-container>
                <label for="day">Day: </label>
                <date-input id="day" length="2" v-model.number="newDay.date.day"></date-input>
              </md-input-container>
            </md-layout>

            <md-layout md-flex-xsmall="34" md-flex-small="30" md-flex-medium="8" md-flex-large="8">
              <md-input-container>
                <label for="year">Year: </label>
                <date-input id="year" length="4" v-model="newDay.date.year"></date-input>
              </md-input-container>
            </md-layout>
          </md-layout>

          <md-layout md-row-xsmall class="gutter-8">

            <md-layout md-flex-xsmall="50" md-flex-small="100" md-flex-medium="50" md-flex-large="50">
              <md-input-container>
                <label for="lat">Latitude: </label>
                <md-input id="lat" v-model.number="newDay.lat" type="number"></md-input>
              </md-input-container>
            </md-layout>

            <md-layout md-flex-xsmall="50" md-flex-small="100" md-flex-medium="50" md-flex-large="50">
              <md-input-container>
                <label for="long">Longitude: </label>
                <md-input id="long" v-model.number="newDay.long" type="number"></md-input>
              </md-input-container>
            </md-layout>
          </md-layout>

          <md-layout md-flex-small="100" md-flex-medium="20" md-flex-large="20">
            <md-input-container>
              <label for="leagues">Leagues: </label>
              <md-input id="leagues" v-model.number="newDay.leagues" type="number"></md-input>
            </md-input-container>
          </md-layout>

          <md-layout md-flex-small="100" md-flex-medium="100" md-flex-large="100">
            <md-input-container md-inline>
              <label for="location">Location: </label>
              <md-input id="location" v-model="newDay.location" type="text"></md-input>
            </md-input-container>
          </md-layout>

          <md-layout md-flex-small="100" md-flex-medium="100" md-flex-large="100">
            <md-input-container>
              <label for="excerpt">Excerpt: </label>
              <md-textarea id="excerpt" v-model="newDay.excerpt"></md-textarea>
            </md-input-container>
          </md-layout>

          <div class="text-center">
            <md-button type="submit" class="md-raised md-primary">Create Day</md-button>
            <md-button v-on:click.native="creatingDay = false" class="md-raised md-secondary">Cancel</md-button>
          </div>
        </md-layout>
      </form>
    </md-whiteframe>

    <md-layout v-else>
      <md-button v-on:click.native="creatingDay = true" class="md-raised md-accent">Create Day</md-button>
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
            <md-table-cell>{{ day.updated | moment("dddd, MM / Do / YYYY") }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>
  </div>
</template>
