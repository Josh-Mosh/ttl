<script type="text/javascript" src="./admin.js"></script>

<template>
  <div>

    <div v-show="selectingDays" class="whiteframe-container">
      <div class="custom-whiteframe snackbar">
        <h3>Click 2 days to fill in any missing days between:</h3>
        <p><b>Start: </b><formatted-date :day="selectedDays.start"></formatted-date></p>
        <p><b>End: </b><formatted-date :day="selectedDays.end"></formatted-date></p>
        <div class="actions">
          <md-button class="md-raised md-primary">Fill Missing Days</md-button>
          <md-button v-on:click="selectingDays=false">Cancel</md-button>
        </div>
      </div>
    </div>

    <div class="md-layout gutter-8">
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>

    <div class="md-layout" v-if="creatingDay">
      <div class="custom-whiteframe" style="width: 100%;">
        <form novalidate @submit.stop.prevent="createDay">
          <div class="md-layout gutter-8" md-column-xsmall md-row-large>

            <div class="md-layout-item md-small-size-100 md-medium-size-30 md-large-size-30" md-row-small>
              <md-field>
                <label for="chapter">Chapter: </label>
                <md-select id="chapter" v-model="newDay.chapter">
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
            </div>

            <div class="md-layout md-layout-item gutter-8" md-row-xsmall>

              <div class="md-layout-item md-xsmall-size-33 md-small-size-30 md-medium-size-8 md-large-size 8">
                <md-field>
                  <label for="month">Month: </label>
                  <date-input id="month" length="2" v-model.number="newDay.month"></date-input>
                </md-field>
              </div>

              <div class="md-layout-item md-xsmall-size-33 md-small-size-30 md-medium-size-8 md-large-size 8">
                <md-field>
                  <label>Day: </label>
                  <date-input length="2" v-model.number="newDay.day"></date-input>
                </md-field>
              </div>

              <div class="md-layout-item md-xsmall-size-34 md-small-size-30 md-medium-size-8 md-large-size 8">
                <md-field>
                  <label for="year">Year: </label>
                  <date-input id="year" length="4" v-model="newDay.year"></date-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout gutter-8" md-row-xsmall>

              <div class="md-layout-item md-xsmall-size-50 md-small-size-100 md-medium-size-50 md-large-size-50">
                <md-field>
                  <label for="lat">Latitude: </label>
                  <md-input id="lat" v-model.number="newDay.lat" type="number"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-xsmall-size-50 md-small-size-100 md-medium-size-50 md-large-size-50">
                <md-field>
                  <label for="long">Longitude: </label>
                  <md-input id="long" v-model.number="newDay.long" type="number"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout-item md-small-size-100 md-medium-size-20 md-large-size-20">
              <md-field>
                <label for="leagues">Leagues: </label>
                <md-input id="leagues" v-model.number="newDay.leagues" type="number"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100">
              <md-field md-inline>
                <label for="location">Location: </label>
                <md-input id="location" v-model="newDay.location" type="text"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100">
              <md-field>
                <label for="excerpt">Excerpt: </label>
                <md-textarea id="excerpt" v-model="newDay.excerpt"></md-textarea>
              </md-field>
            </div>

            <div class="text-center">
              <md-button type="submit" class="md-raised md-primary">Create Day</md-button>
              <md-button v-on:click.native="creatingDay=false" class="md-raised md-secondary">Cancel</md-button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="md-layout" v-show="!creatingDay">
      <md-button v-on:click.native="creatingDay=true" :disabled="selectingDays" class="md-raised md-primary">Create Day</md-button>
      <md-button v-on:click.native="selectingDays=true" :disabled="selectingDays" class="md-raised md-primary">Fill Missing Days</md-button>
    </div>

    <div class="md-layout" md-flex-small="100" md-flex-large="100" md-flex-xlarge="100">
      <div class="custom-whiteframe">
        <md-table>
          <md-table-row>
            <md-table-head>Chapter</md-table-head>
            <md-table-head width="12%">Date</md-table-head>
            <md-table-head>Latitude</md-table-head>
            <md-table-head>Longitude</md-table-head>
            <md-table-head>Leagues</md-table-head>
            <md-table-head width="10%">Location</md-table-head>
            <md-table-head width="45%">Excerpt</md-table-head>
          </md-table-row>
          <editable-row v-for="(day, index) in days"
            :key="day._id"
            :day="day"
            :index="index"
            :chapters="chapters"
            :selectingDays="selectingDays"
            v-on:update="updateDay"
            v-on:remove="removeDay"
            v-on:selectDay="selectDay"
          >
          </editable-row>
        </md-table>
      </div>
    </div>
  </div>
</template>
