# neatflix

This is my take on yet another recrutation task. This time, we will be creating something of a Netflix clone, with a special focus on its search functionality.

## Task Description

### User story
Through the web application the user has access to a list of TV shows in a “tile” view, where each “tile” consists of a poster/graphic of the given show, its title, release year and rating. After clicking on the “tile” additional details of the show appear. The user can also search for the shows by their title - limiting the number of displayed results (“tiles”) to those which contain the searched phrase.

### Definition of Done:
- The application uses API for TV shows: [http://www.tvmaze.com/api](http://www.tvmaze.com/api)
- The user interface is clean and aesthetic
- The web app documentation, describing how to run it (preferably as a single step) is prepared in read me form
- The code is simple, readable and prepared in a way which allows expanding it with additional features in the future
- The main page of the web app contains the search window and the “tiles”
- The search window allows searching for TV shows (search as a filter; searching by name - with the use of search engine from the API
- After searching for a given phrase, the search engine returns a shortened list of shows in the form of “tiles”; only the shows relevant to the search are listed and visible
- Search criteria can be deleted; after deleting, the page shows back the full list of TV shows. The “tiles” consist of a poster / graphic of the givens how, its title, release year and rating.
- After clicking on the “tile” additional details about the TV show appear.
- The details are grouped into the following fields: “Title”, “Year”, “Cast”, “Crew”, and show values from the API.
- There is a possibility to close the details / go back to the previous view.

### Bonus
- Made with a framework (Vue's our choice here and always [*])
- Is an SPA (as above, using `@vue/cli` with routing)
- Is benchmarked for accesibility (we will test using lighthouse and perhaps one more tool for contrasts)
- Make suggestions for improvement

## Takeaways
During this week's challange, as always we'll try to max out the expectations and learn along. Our side-quest this time is use the opportunity to use TS typing throughout (see if it is not too much of a burden for such a small project) and `@vue/composition-api` where possible.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
