import axiosService from '../services/axiosService';

export default {

  name: 'top-sites',

  data () {
    return {
      topSites: null,
      placeholderTopSites: [
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
      ]
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
          this.topSites = sites;
        });
      } else {
        this.topSites = this.placeholderTopSites;
      }
    }

  }

};