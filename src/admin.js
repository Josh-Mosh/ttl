  import chapters from './fixtures/chapters';
  import Day from './models/day';

  export default {

    name: 'admin',

    data () {
      return {
        newDay: Day,
        chapterOptions: chapters
      };
    },

    methods: {

      createDay: function() {
        console.log('newDay ', this.newDay);
      }

    }

  };