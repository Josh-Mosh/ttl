import topSites from './components/top-sites.vue';

export default {

  name: 'app',

  data () {
    return {
    };
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },

  components: { topSites }

};