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

      selectingDays: false,
      selectedDays: {
        start: null,
        end: null
      },

      chapters: {
        partOne: partOne,
        partTwo: partTwo
      }
    };
  },

  components: { dateInput, editableRow },

  computed: {

    showDayActions: function() {
      return !this.creatingDay && !this.selectingDays;
    }

  },

  methods: {

    createDay: function() {
      axiosService.post('/days', { day: this.newDay }).then(response => {
        console.log('response ', response);
        this.days.push(response.data.day);
        this.newDay.reset();
      }).catch(err => {
        console.log('createDay err ', err);
      });
    },

    updateDay: function(day) {
      axiosService.put('/days/' + day._id, { day: day }).then(response => {
        console.log('response ', response);
      }).catch(err => {
        console.log('updateDay err ', err);
      });
    },

    removeDay: function(dayId, index) {
      axiosService.delete('/days/' + dayId).then(response => {
        console.log('response ', response);
        this.days.splice(index, 1);
      }).catch(err => {
        console.log('removeDay err ', err);
      });
    },

    selectDay: function(day, index) {
      console.log('selectDay in admin controller');
      console.log(day, index);
    }

  }

};