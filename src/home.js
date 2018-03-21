import topSites from './components/top-sites.vue';
import bookmarks from './components/bookmarks.vue';
import dateTime from './components/date-time.vue';
import axiosService from './services/axiosService';
import { allChapters } from './fixtures/chapters';

export default {

  name: 'home',

  data: function() {
    return {
      days: []
    };
  },

  components: { topSites, bookmarks, dateTime },

  mounted: function() {
    this.getToday();
  },

  methods: {
    getToday() {
      axiosService.get('/today').then(response => {
        console.log('/today res ', response);
        this.days = response.data.days;
      }).catch(err => {
        console.log('err ', err);
      });
    }
  },

  computed: {

    // can be multiple days in different years
    todays: function() {
      if (this.days.length) {
        return this.days[0].excerpt;
      }
    },

    formattedTodayDates: function() {
      return this.days.map(day => {
        return this.$moment('6/3/1866').format('M/D/YYYY');
      });
    },

    formattedTodayChapters: function() {
      return this.days.map(day => {
        return day.chapter + ". " + allChapters[day.chapter + 1];
      });
    },

    dayData: function() {
      if (!this.todays) {
        return;
      }

      return this.days.map((day, index) => {
        return {
          Date: this.formattedTodayDates[index],
          Chapter: this.formattedTodayChapters[index],
          Latitude: day.lat,
          Longitude: day.long,
          Leagues: day.leagues,
          Location: day.location
        }
      });
    }
  }

};