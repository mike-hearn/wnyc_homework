# NYPR Tech Screen Homework

**Full site available at <https://mike-hearn.github.io/wnyc_homework/>**

This is the 'take home' portion of the NYPR tech screen. It is a JPEG → Website
exercise designed to test attention to detail and ability to translate design
elements into real-world web components.

This will only remain a public repo for as long as the NYPR tech lead needs to
check my work.

<img src="https://i.imgur.com/NZWB6Qk.gif" width="100%" border="1" />

## Local Install / Build

Clone the repo, then run:

```
$ npm package install
$ npm run dev
```

This runs a local server at http://localhost:8080.

To build for production, run:

```
$ npm run build
```

Note that you may need to change `output.public_path` for production, depending
on what directory your bundle.js ends up in (the config is currently set for
GitHub pages in this repository).

## Browser Compaitbility

I tested this on the latest versions of Chrome, Firefox and Safari and
functionality seems essentially the same across all three. I don't have a
Windows machine at my disposal, so the IE versions are still a mystery. I'm
guessing it won't be 100% compatible.

## Known Issues / Incomplete Things

Short timeline, so a couple things are still TODOs:

* The gradient/fade-out on the mobile scrolling navigation.
* The subtle underlines on the subtitle of "Recommended stations" (under 'News'
  and 'Comedy').
* Some of the elements don't behave totally sensibly in between breakpoints:
  the task called for only one breakpoint at 480px, so as a result some
  elements do not handle middling resolutions (between 500px-750px) well. They
  scroll off-screen, wrap strangely, etc. On a production-grade project I'd
  implement more breakpoints and add finer-grained control.
* Also related to the above problem, the sidebar displays some strange behavior
  at resolutions where the main content frame is horizontally scrollable.

## Technical Minutiae

* The data for the `Card` content blocks is located in
  `src/stores/UIStore.jsx`. The store is initialized with the default content,
  but it could just as easily make an ajax call to an API to retrieve data. You
  can see something similar in action inside the `fetchWeatherData` function
  (also in `UIStore.jsx`), which makes a call to the Forecast.io API and
  updates the global state on its progress (`'NOT_LOADED' → 'LOADING' →
  'LOADED'`), and then places the payload also into the global store.

* I used a two-level system for styling the application. Global styles are
  handled in `src/shared/styles/index.scss` and its imports, while local styles
  are handled in the `styles.scss` files for each component. Any time a
  variable is re-used often, or a pattern repeats itself, I tried to add it
  into the `_mixins.scss` or the `_variables.scss` file. Examples include
  things like `$wnyc-red`, various link colors, and the global font stack.

* There is a fancy y-axis flip on the 'Follow/Unfollow' links. It also updates
  the number of followers in the store.

* I did 1/2 of the extra credit. Forecast.io is integrated (with a limited
  number of weather icons), but the MTA API seemed too arcane to implmenent
  on a short timeline.
