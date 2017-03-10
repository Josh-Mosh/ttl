import topSites from './components/top-sites.vue';

export default {

  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    };
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },

  components: { topSites }

};