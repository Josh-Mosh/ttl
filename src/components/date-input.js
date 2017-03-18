export default {

  props: ['value', 'length'],

  methods: {
    updateValue: function (value) {

      var formattedValue = value;
      var el = this.$el;

      var inputs = document.getElementsByTagName('input');
      var index = Array.from(inputs).indexOf(el);

      if (typeof index !== undefined && value.length.toString() === this.length) {
        window.setTimeout(function () {
          // We're assuming the inputs were found in order so the next index should be the one we want
          inputs[index + 1].focus();
        }, 0);
      }

      // Emit the number value through the input event
      this.$emit('input', formattedValue);
    }
  }
};