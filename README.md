# Детска ясла Здравец — Static Website

Static детска ясла website for GitHub Pages. Bulgarian content, plain HTML/CSS/JS.

## Local preview

**Option A — open directly:** double-click `index.html` in File Explorer.

**Option B — local server (recommended for maps/gallery):**

```powershell
cd path/to/demoProj
python -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser. Press Ctrl+C to stop.

Edit any HTML/CSS/JS file and refresh the browser to see changes.

## Project structure

```
index.html          — Начало (home)
informacia.html     — Информация (schedules, admission rules)
dokumenti.html      — Документи
grupi.html          — Групи (8 groups, staff photos)
galeria.html        — Галерия (lightbox viewer)
kontakti.html       — Контакти (Google Maps)
css/style.css       — All styles
js/gallery.js       — Gallery lightbox
images/
  header/           — header-left.jpg, header-right.jpg
  home/             — home-photo-1.jpg, home-photo-2.jpg
  grupi/            — grupa-01-staff-01.jpg … grupa-08-staff-04.jpg
  galeria/          — gallery photos (listed in galeria.html)
```

## Customize content

Replace placeholder text marked with `<!-- TODO -->` comments in HTML files:

- Nursery name in header
- **История** text on `index.html`
- **Правила за прием** paragraph on `informacia.html` (MON link stays)
- **Режим** and **Занятия** table rows
- Staff names/roles on `grupi.html`
- Contact details on `kontakti.html`
- Add PDF links on `dokumenti.html` when ready

## GitHub Pages deployment

You handle git push/pull yourself. When ready to publish:

1. Commit your changes locally
2. Push to GitHub (repository name e.g. `kindergarden`)
3. **Settings → Pages → Source:** deploy from `master` or `main`, folder `/ (root)`
4. Site live at `https://<username>.github.io/kindergarden/`

No build step required.

## Image naming

| File pattern | Used on |
|---|---|
| `images/header/header-left.jpg`, `header-right.jpg` | Header on every page |
| `images/home/home-photo-*.jpg` | Home page image pair |
| `images/grupi/grupa-XX-staff-YY.jpg` | Groups page (XX = group 01–08, YY = staff 01–04) |
| `images/galeria/*` | Gallery page (add `<button>` entries in `galeria.html`) |
