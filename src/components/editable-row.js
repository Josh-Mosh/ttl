import dateInput from './date-input.vue';

export default {
  name: 'editable-row',
  props: ['day', 'index', 'chapters', 'selectingDays'],

  data: function() {
    return {
      editing: false,
      selected: false
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

    selectDay: function() {
      console.log('component ', this.day.selected);
      this.selected = true;
      this.$emit('selectDay', this.day, this.index);
    }

  }
};
