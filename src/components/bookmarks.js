export default {

  name: 'bookmarks',

  data () {
    return {
      bookmarks: null,
      windowWidth: 0,
      windowHeight: 0,
      placholderBookmarks: [
        {title: "Dashboard - Pivotall Tracker", url: "https://www.pivotaltracker.com/"},
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
        {title: "Github", url: "https://www.github.com"},
        {title: "Heroku", url: "https://www.heroku.com"},
        {title: "Dashboard - Pivotall Tracker", url: "https://www.pivotaltracker.com/"},
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
        {title: "Github", url: "https://www.github.com"},
        {title: "Heroku", url: "https://www.heroku.com"},
        {title: "Dashboard - Pivotall Tracker", url: "https://www.pivotaltracker.com/"},
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
        {title: "Github", url: "https://www.github.com"},
        {title: "Heroku", url: "https://www.heroku.com"},
        {title: "Dashboard - Pivotall Tracker", url: "https://www.pivotaltracker.com/"},
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
        {title: "Github", url: "https://www.github.com"},
        {title: "Heroku", url: "https://www.heroku.com"},
      ]
    };
  },

  mounted: function() {
    this.fetchBookmarks();
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },

  watch: {
    bookmarks: function(marks) {
      this.afterBookmarksFetch(marks);
    }
  },

  methods: {

    fetchBookmarks: function() {
      if (chrome.bookmarks) {
        chrome.bookmarks.getChildren('1', bookmarks => {
          this.bookmarks = bookmarks;
        });
      } else {
        this.bookmarks = this.placholderBookmarks;
      }
    },

    // Assumes iterating through array of objects with url property
    afterBookmarksFetch: function(items) {
      items.forEach(item => {
        if (!item.url) {
          return;
        }
        item.abbvTitle = item.title.slice(0, 19);
        if (item.title.trim().length > 19) {
          item.abbvTitle += "...";
        }
        item.fav = 'https://www.google.com/s2/favicons?domain=' + item.url;
      });
    },

    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    }
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
};