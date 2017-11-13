# diff-images

We have the option to get screenshots from Saucelabs cross-browser tests. This tool helps if you want to highlight visual differences between two sets of screenshots.

## How to

- Copy all base set of images to old/
- Copy new set of images to new/
- `yarn install`
- `node index.js`
- You will get a list of all the files read in the command line and if there are differences in the image, you will see something like this:

```
    $ node index.js 
    ...
    ...
    Reading file: 0035screenshot.png
    Reading file: 0036screenshot.png
    Reading file: img.png
    img.png is not the same!
    Errors:  null
    Done
    $ 
```

- The visual difference will be saved as another image in diff/ folder. Note that if the old and new images are the same, no diff will be saved in the diff folder.