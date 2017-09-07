import dateInput from './date-input.vue';

export default {
  name: 'editable-row',
  props: ['day', 'index', 'chapters', 'selectingDays'],

  data: function() {
    return {
      editing: false
    }
  },

  components: { dateInput },

  methods: {

    update: function(day) {
      this.editing = false;
      // handle update request in parent
      this.$emit('update', day);
    },

    remove: function(id, index) {
      // handle remove request in parent
      this.$emit('remove', id, index);
    },

    selectDay: function(day, index) {
      console.log(day, index);
      this.$emit('selectDay', day, index);
    }

  }
};
