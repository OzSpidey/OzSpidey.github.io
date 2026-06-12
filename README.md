# Osborne Lopes — Portfolio

A single-page portfolio (Data Engineer / Business Intelligence Analyst), inspired
by the clint dmello layout. No build step, plain HTML/CSS/JS.

## Files
- `index.html` — markup & sections
- `styles.css` — dark navy + mint theme, responsive
- `script.js` — project/skill data, typed hero effect, nav, scroll reveals

## Preview locally
Just open `index.html` in a browser, or serve it:
```
python -m http.server 8000
```
then visit http://localhost:8000

## Deploy to Netlify (like the original)
1. Drag-and-drop this folder onto https://app.netlify.com/drop, **or**
2. Push to a GitHub repo and "Add new site → Import" in Netlify
   (no build command, publish directory = `.`).

## Edit your content
- **Projects / skills:** edit the `projects` and `skills` arrays at the top of `script.js`.
- **Hero phrases:** the `phrases` array in `script.js`.
- **LinkedIn:** the LinkedIn links use `#` placeholders in `index.html` — swap in your URL.
- **Avatar:** currently the initials "OL". Replace the `.about__avatar` div with an `<img>` if you want a photo.
