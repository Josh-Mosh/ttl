import axiosService from '../services/axiosService';
import sitesStub from '../fixtures/sitesStub';

export default {

  name: 'top-sites',

  data () {
    return {
      topSites: null,
      placeholderTopSites: sitesStub
    };
  },

  mounted: function() {
    this.fetchTopSites();
  },

  watch: {
    topSites: function(sites) {
      sites.forEach(site => {
        site.fav = 'https://www.google.com/s2/favicons?domain=' + site.url;
      });
    }
  },

  methods: {

    fetchTopSites: function() {
      if (chrome.topSites) {
        chrome.topSites.get(sites => {
          if (!sites) {
            return;
          }
          this.topSites = sites.splice(0, 8);
        });
      } else {
        this.topSites = this.placeholderTopSites;
      }
    }

  }

};