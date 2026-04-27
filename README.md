# Srujan Vooturi — Portfolio

Personal portfolio website. Plain HTML, CSS, and JavaScript — no build tools or frameworks.

## Project Structure

```
portfolio/
├── index.html   ← content and structure
├── style.css    ← all styling (variables, layout, responsive)
├── main.js      ← interactivity (typewriter, scroll animations, nav)
└── README.md    ← this file
```

## Run Locally

Open `index.html` in any browser. That's it — no server needed.

For a local dev server (optional, enables live reload):

```bash
# Python
python3 -m http.server 8000

# Node (if npx is available)
npx serve .
```

## How to Edit Content

### Add a new project

Copy one `.project-card` block inside the `#projects` section in `index.html` and change the text:

```html
<div class="project-card" data-animate>
  <h3 class="project-title">New Project Name</h3>
  <p class="project-subtitle">Short tagline</p>
  <p class="project-description">Description of the project.</p>
  <div class="project-tags">
    <span class="skill-tag">Tech1</span>
    <span class="skill-tag">Tech2</span>
  </div>
</div>
```

### Add a new skill

Add a `<span>` inside the appropriate `.skills-tags` group in the `#skills` section:

```html
<span class="skill-tag">New Skill</span>
```

### Add a new experience entry

Copy one `.timeline-item` block in the `#experience` section and update the content.

### Change colors or fonts

Edit **only** the `:root` block at the top of `style.css`. Every color and font is defined there — nothing is hardcoded elsewhere.

```css
:root {
  --bg:           #0A0A0F;
  --accent:       #00E5FF;
  /* ... change values here ... */
}
```

### Add a new section

1. Add a `<section id="new-section" class="section" data-animate>` in `index.html`
2. Add a `/* === NEW SECTION === */` comment block in `style.css` with your styles
3. Add a nav link in the `<ul class="nav-links">` list

## Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your files:
   ```bash
   git init
   git add index.html style.css main.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your repository
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

**Custom domain:** Add a file named `CNAME` (no extension) containing your domain name (e.g., `srujan.dev`), then configure your DNS to point to GitHub Pages.

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up / log in
2. Drag and drop the entire `portfolio` folder onto the deploy zone
3. Your site is instantly live with a random subdomain (rename it in Site Settings)
4. **For auto-deploy:** Connect your GitHub repo in Netlify — every push will trigger a new deploy automatically
# Portfolio
