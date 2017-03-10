
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