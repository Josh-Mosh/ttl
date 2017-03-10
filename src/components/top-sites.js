import axios from 'axios';

export default {

  name: 'top-sites',

  data () {
    return {
      topSites: null
    };
  },

  mounted: function() {
    this.fetchSites();
  },

  watch: {
    topSites: function(sites) {
      sites.forEach(site => {
        site.fav = 'https://www.google.com/s2/favicons?domain=' + site.url;
      });
    }
  },

  methods: {

    fetchSites: function() {
      if (chrome.topSites) {
        chrome.topSites.get(sites => {
          console.log('sites ', sites);
          this.topSites = sites;
        });
      } else {
        this.topSites = [
          {title: "YouTube", url: "https://www.youtube.com/"},
          {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
        ];
      }
    }

  }

};