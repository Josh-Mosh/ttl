import axiosService from './services/axiosService';
import { partOne, partTwo } from './fixtures/chapters';
import Day from './models/day';
import dateInput from './components/date-input.vue';
import editableRow from './components/editable-row.vue';

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

  components: { dateInput, editableRow },

  methods: {

    createDay: function() {
      axiosService.post('/days', { day: this.newDay }).then(response => {
        console.log('response ', response);
        this.days.push(response.data.day);
      }).catch(err => {
        console.log('createDay err ', err);
      });
    },

    removeDay: function(dayId, index) {
      axiosService.delete('/days/' + dayId).then(response => {
        console.log('response ', response);
        this.days.splice(index, 1);
      }).catch(err => {
        console.log('removeDay err ', err);
      });
    }

  }

};