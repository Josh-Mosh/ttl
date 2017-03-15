import axiosService from './services/axiosService';
import chapters from './fixtures/chapters';
import Day from './models/day';

export default {

  name: 'admin',

  data () {
    return {
      newDay: Day,
      chapterOptions: chapters
    };
  },

  methods: {

    createDay: function() {
      axiosService.post('/days', { day: this.newDay }).then(function(response) {
        console.log('response ', response);
      }).catch(function(err) {
        console.log('err ', err);
      });
    }

  }

};