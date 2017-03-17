import axiosService from './services/axiosService';
import { partOne, partTwo } from './fixtures/chapters';
import Day from './models/day';

export default {

  name: 'admin',

  props: ['days'],

  data () {
    return {
      newDay: Day,
      creatingDay: false,
      partOneChapters: partOne,
      partTwoChapters: partTwo
    };
  },

  methods: {

    createDay: function() {
      axiosService.post('/days', { day: this.newDay }).then(response => {
        console.log('response ', response);
        this.days.push(response.data.day);
      }).catch(err => {
        console.log('err ', err);
      });
    }

  }

};