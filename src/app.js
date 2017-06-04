import axiosService from './services/axiosService';

export default {

  name: 'app',

  data() {
    return {
      days: null
    };
  },

  mounted: function() {
    this.fetchDays();
  },

  methods: {
    fetchDays() {
      axiosService.get('/days').then(response => {
        console.log('days ', response);
        this.days = response.data.days;
      }).catch(function(err) {
        console.log('err ', err);
      });
    }
  }
};