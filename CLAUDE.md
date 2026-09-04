# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Jekyll static site for the DENOS Lab (Distributed Learning and Orchestration Lab) at the University of Calgary. It deploys to **denoslab.com** via GitHub Pages: pushing to `main` triggers the "pages build and deployment" workflow, which builds and serves the site automatically.

## Build and preview (read this before building)

**The Gemfile lies and GitHub Pages uses a different Jekyll than you do.** The `Gemfile` pins `ruby "3.2.3"` and `jekyll ~> 4.3`, but:
- The working Ruby toolchain is Homebrew Ruby (`/opt/homebrew/opt/ruby/bin`, 4.x), so `bundle exec jekyll ...` (as the README/AGENTS.md suggest) fails with a `RubyVersionMismatch`.
- GitHub Pages' **dynamic** build ignores the Gemfile's Jekyll version and runs the `github-pages` gem = **Jekyll 3.10** (Liquid 4.0). So a local Jekyll 4 build can pass while the Pages deploy fails.

Always verify against **Jekyll 3.10**, the version Pages actually runs. One-time install: `gem install jekyll -v 3.10.0 --force --no-document` (with Homebrew Ruby on PATH). Then build with the Gemfile moved aside so bundler does not reject the Ruby pin:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
mv Gemfile Gemfile.bak && mv Gemfile.lock Gemfile.lock.bak
jekyll _3.10.0_ build            # output in _site/  (use `serve` to watch)
mv Gemfile.bak Gemfile && mv Gemfile.lock.bak Gemfile.lock
```

`_config.yml` declares no plugins, so plain jekyll builds the whole site without bundler. Preview with `python3 -m http.server` from `_site/`. There is no test or lint suite; "testing" means building, then checking rendered pages, links, and images.

**Keep Liquid to Jekyll-3.10-safe features.** A compound `where_exp` (`m.category == 1 or m.category == 2`) builds on Jekyll 4 but throws `Liquid syntax error: Expected end_of_string` on 3.10. Split into two single-condition `where_exp` calls joined with `concat`. Safe filters: single-condition `where_exp`, `sort`, `concat`, `default`, `relative_url`.

## Architecture

- **`_layouts/default.html` is the entire homepage.** Every section (About, Research, News, Team, Partnerships, Publications, Calendar), the sticky nav, and the footer are inlined there, each pulling its content from an `_includes/*` file. `index.html` is just front matter selecting this layout.
- **The homepage header is one row.** `nav.navbar` holds the logo on the left and the section menu on the right, sticky at the top of the page, in the style of the BitQubic site. At 900px and below the menu collapses behind a `.navbar-toggle` button that opens `.navbar-drawer`, a panel under the bar. The drawer closes on a link, on Escape, and when the viewport grows back past 900px. **The link list lives in `_data/nav.yml`**, looped over twice in the layout so the bar and the drawer never drift apart. There is no separate hero section.
- **`_layouts/page.html`** is the layout for standalone secondary pages: `news.html` (`/news/`), `team.html` (`/team/`), and `404.html`. `_layouts/event.html` wraps it for news stories and team-building posts, `_layouts/project.html` wraps it for research project pages, `_layouts/profile.html` renders `/team/:name/`.
- **Section content lives in `_includes/`**: `introduction.md` (About), `research.html` (generated from the `projects` collection), `news-recent.html` (the featured story cards, shared by `news.html` on the home page and `news-archive.html` on `/news/`), `team-list.html` (the grouped team listing, shared by the home page and `/team/`), `join.html`, `partnerships.html`, `publications.html`, `calendar.html`, `footer.html`. Publications is a hand-curated HTML list, not a collection.
- **Research projects are a Jekyll collection** (`_projects/*.md`, `output: true`, permalink `/projects/:name/`). `_includes/research.html` loops over `site.projects | sort: 'order'` and renders the home page cards from it, so the card and its detail page never drift. Each file carries `layout: project`, `title` (the card and page heading), `order`, `card_description` (the blurb on the home page card), `description` (meta description, also used in `llms.txt`), `lead` (the one-line summary under the page title) and optional `short_name`, `logo`, `logo_alt`, `logo_class`, `links`, `people`, `collaborators`, `publications`, `news`, plus a body used as the Overview.
  - `people` and `news` are lists of **site URLs** (`/team/yunkai-bao/`, `/news/starfish-fl-acm-health/`), resolved against `site.team` and `site.pages` with `where` so a name, role, headshot, or story title is never copied twice. A URL that matches nothing is silently skipped, so check the built page after adding one.
  - A `links` entry with `card: true` also appears on the home page card, which is how STARFISH keeps its GitHub and paper links there.
  - `capstone_teams` renders the "Sponsored capstone teams" section below Researchers, as a list of `{ year, students: [{ name, photo, role? }] }`. Years are sorted newest first, so adding an earlier year needs no reordering. Photos are square headshots under `images/capstone-teams/<project>/<year>/`, and these students are deliberately plain cards rather than links, since they have no profile pages and are not in the project's JSON-LD `member` list.
  - The `.section-lead` above the grid names the number of directions in words ("Six flagship directions"), so update that sentence when adding or removing a project.
  - `_includes/schema-project.html` emits `ResearchProject` plus `WebPage` and a `BreadcrumbList` for these pages, selected in `page.html` by `page.layout == 'project'`.

- **Team is a Jekyll collection** (`_team/*.md`, `output: true`, permalink `/team/:name/`). Each file carries `layout`, `name`, `last_name`, `title`, `picture`, `category`, and optional `summary`, `links`, `projects`, `publications`, `achievements` plus a body used as the biography. `team-list.html` selects members per `category` and sorts by `last_name` (surname).
  - **Category scheme:** `0` Director, `5` Postdoc, `1` PhD, `2` MSc, `4` Undergraduate & Interns, `3` Visitors, `8` Alumni, `9` Friends. Empty groups are hidden.
  - Categories `0` and `5` render as full-width "lead" cards (the lead branch of `team-card.html`). Everyone else renders the grid `member-card` from the same include. Each card links to the member's profile page.
- **Styling:** `css/custom.css` is the design system, loaded after `dist/css/normalize.css` and `dist/css/skeleton.css`. **Skeleton sets `html { font-size: 62.5% }`, so `1rem = 10px`** — size all CSS values with that in mind (e.g. `1.6rem` = 16px). `js/site.js` (jQuery) drives smooth-scroll, the sticky nav, and the mobile menu. Smooth-scroll measures the bar's height at click time rather than assuming a fixed offset, since the bar now carries the logo and changes height by breakpoint.
- **Typography follows the BitQubic site** (`github.com/bitqu/bitqu.github.io`, `assets/shared.css`). Body and UI text is **Inter Tight** with `-.005em` tracking at line-height 1.5, small uppercase labels are **JetBrains Mono** at 11px/500 with `.06em` tracking (their `.tag`). Sizes run about 17% above the reference, whose 15px body and 13.5px menu read too small here: body 17.5px, prose and leads 18px, menu links 16px in sentence case, card titles 19.5px/500, card and secondary copy 17px. **Headings stay Source Serif 4** and the navy/gold palette is untouched, both deliberate departures from the reference, which is all sans on a dark lime theme. Match those values when adding UI rather than inventing new sizes.
- **Assets:** research and partner logos in `images/`, member headshots in `images/profile/`. The site logo is `images/denos-lab-logo.png`, the mark plus a two-line "DENOS LAB" wordmark, used in the homepage navbar and the sub-page header and as the `logo` in every JSON-LD block. It replaced the wider one-line `images/denos-logo.png`, which is kept only as the source of the favicons (`favicon.ico`, `images/favicon-{16,32}*.png`, `images/apple-touch-icon.png`), generated from the node mark on its left, cropped and centered on a white square. The mark is identical in both, so the favicons still match.

## SEO plumbing

Search visibility is wired into the layouts, not a plugin. `_config.yml` declares no plugins on purpose, so everything below is plain Liquid that builds the same on Jekyll 3.10 and 4.

- **`sitemap.xml` and `robots.txt`** are hand-written Liquid templates at the repo root. The sitemap walks `site.pages`, `site.projects`, `site.team`, and `site.team_building`, skipping anything with `sitemap: false` in front matter. Any new page is picked up automatically. It only emits URLs ending in `/` or `.html`, because the Pages build injects a default theme whose `assets/css/style.scss` would otherwise show up as a page.
- **Every layout carries** a canonical link, a description, Open Graph and Twitter Card tags, `og:locale`, and a `robots` directive. Set `noindex: true` in front matter to flip a page to `noindex` (used by `404.html`); set `seo_title` to override the `<title>` without changing the visible `page.title`.
- **JSON-LD lives in `_includes/schema-*.html`**, one per page kind. `schema-organization.html` (homepage) describes the lab and lists every member and alumnus by URL. `schema-person.html` (profile layout) emits `ProfilePage` plus `Person` plus one `ScholarlyArticle` per entry in the member's `publications` front matter. `schema-article.html` (event layout) emits `NewsArticle` for `/news/` and `Article` for `/team-building/`, both with a `BreadcrumbList`. `schema-page.html` covers the remaining standalone pages, `schema-team-list.html` adds the `/team/` roster `ItemList`. All of them share `@id` anchors of `/#organization` and `/#website`, so the graph joins up across pages.
- **News pages need a machine-readable `date:`** in front matter alongside `display_date`. It feeds `datePublished` and the sitemap `lastmod`.
- **`_includes/team-list.html`** is the single source of the grouped team listing, included by both `_layouts/default.html` (as `h3` subheads) and `team.html` (as `h2`). `_includes/news-recent.html` is the single source of the featured news cards, included by both `_includes/news.html` (home) and `_includes/news-archive.html` (`/news/`), so recent stories are linked from both without duplicating markup.
- **Standalone hub pages:** `team.html` at `/team/` and `news.html` at `/news/`, both linked site-wide from the footer's Explore column. Profile pages link back to `/team/`, news articles back to `/news/`.
- The homepage `<h1>` is a `.visually-hidden` text heading at the top of `<main>`, since the logo now sits in the navbar as a plain brand link rather than as a heading. Sub-pages use `h1.section-title` for the page title.

- **`llms.txt`** at the repo root is the curated index for LLM agents, in the [llms.txt](https://llmstxt.org) format: an `h1`, a blockquote summary, then `h2` sections of markdown links. Research, News, Team, Alumni, and the team-building entries are all generated from `site.pages` and the collections, so they never go stale. `robots.txt` points at it in a comment. It is a community convention with weak adoption, not a standard, so treat it as low-cost upside rather than something load-bearing.

After adding a page, rebuild and check that it appears in `_site/sitemap.xml`, that its JSON-LD parses, and that `_site/llms.txt` still reads correctly.

## Writing style for site copy

Descriptive content (About, Research, News blurbs) follows a strict style: no em dashes; no parentheses that explain a term inline (keep acronym parentheses like `(FL)`, `(PADM)`); no colons or semicolons in prose; dense prose rather than bullet lists; and avoid the words *yet, canonical, cleanly, substrate, prose*. Verbatim external titles (paper or article names) keep their original colons. The lab focus phrase is "distributed learning, agentic simulation and reasoning".

## Conventions

- **Workflow:** branch off `main` → PR → squash-merge. After merging, confirm the "pages build and deployment / build (dynamic)" run is green, since that is the real (Jekyll 3.10) build of what ships.
- **Staging:** do not `git add -A`. New member headshots are often pre-dropped into `images/profile/` before being wired up, and the browse tooling recreates a `.gstack/` directory; both get swept into unrelated commits. Stage explicit paths.
- Adding a research project: create `_projects/<slug>.md` with the front matter above, give it the next `order`, drop any logo in `images/`, and update the count in the `.section-lead` sentence in `_includes/research.html`. The home page card, `/projects/<slug>/`, the sitemap, and `llms.txt` all follow from that one file.
- Adding a team member: create `_team/<name>.md` with the front matter above (no `email` — emails were intentionally removed from the whole site), drop the square headshot in `images/profile/`, and reference it from `picture`.
