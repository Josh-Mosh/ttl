export default {

  name: 'bookmarks',

  data () {
    return {
      bookmarks: null,
      placholderBookmarks: [
        {title: "YouTube", url: "https://www.youtube.com/"},
        {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
      ]
    };
  },

  mounted: function() {
    this.fetchBookmarksBar();
  },

  watch: {
    bookmarks: function(marks) {
      this.getFavicons(marks);
    }
  },

  methods: {

    fetchBookmarksBar: function() {
      if (chrome.bookmarks) {
        chrome.bookmarks.getChildren('1', bookmarks => {
          this.bookmarks = bookmarks;
        });
      } else {
        this.bookmarks = this.placholderBookmarks;
      }
    },

    // Assumes iterating through array of objects with url property
    getFavicons: function(items) {
      items.forEach(item => {
        if (!item.url) {
          return;
        }
        console.log('bookmark ', item);
        item.fav = 'https://www.google.com/s2/favicons?domain=' + item.url;
      });
    }

  }

};