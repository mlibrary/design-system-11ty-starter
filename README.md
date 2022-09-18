# Design System 11ty (Eleventy) Starter

> Maintained by the [U-M Library Design System Team](https://design-system.lib.umich.edu/)

This starter is built with some basic navigation and page structure. 

If you are using 11ty for a headless CMS, consider removing the structure or using the headless version of this template (coming soon?).

## Development Quick Start

- Clone the repo
- Run `npm install` to install 11ty and all of the dependencies.
- Go to `http://localhost:8080`

## Dev Scripts

- Run `npm run start` to start the eleventy server (serves the `/public` folder) and watch the SASS folder
- Run `npm build` to create a production build. Outputs into `/public`.

### Building and watching files

`npm-run-all` is a CLI tool to run multiple npm-scripts in parallel or sequential. This is used in the dev scripts to watch Sass files and hot reload 11ty files in parallel. 

## Building Your Site

### Create site meta data
Edit your site metadata (site name, author, contact, url, etc..)
```
src/_data/meta.json
```

### Create pages/ page content
```
src/pages
```

### Styles
Edit the styles in the `src/sass` folder. 11ty is watching that folder and building the Sass files into `src/css`. 11ty then passes through the CSS to the `public` folder.

### Images
Add images to the `src/img` folder. 11ty is watching that folder and passing through the files to the `public` folder.

---

## Resources

Please visit the official [11ty](https://www.11ty.dev/docs/) docs for documentation.

## Bug Reports
Please file an issue or submit a PR. You can also email the Design System team at [library-design-system-team@umich.edu](library-design-system-team@umich.edu) and we will be in touch!
