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

- **`_layouts/default.html` is the entire homepage.** Every section (About, Research, News, Team, Partnerships, Publications, Calendar), the hero, the sticky nav, and the footer are inlined there, each pulling its content from an `_includes/*` file. `index.html` is just front matter selecting this layout.
- **`_layouts/page.html`** is the layout for standalone secondary pages. `news.html` (permalink `/news/`) uses it for the older-news archive.
- **Section content lives in `_includes/`**: `introduction.md` (About), `research.html`, `news.html` (home featured cards) + `news-archive.html` (the `/news/` list), `join.html`, `partnerships.html`, `publications.html`, `calendar.html`, `footer.html`. Publications is a hand-curated HTML list, not a collection.
- **Team is a Jekyll collection** (`_team/*.md`, `output: false`). Each file is front-matter only (`layout`, `name`, `last_name`, `title`, `picture`, `category`) plus an optional body that becomes a study-area tag. `default.html` selects members per `category`, sorts by `last_name` (surname), and renders each with `{{ member.output }}`.
  - **Category scheme:** `0` Director, `5` Postdoc, `1` PhD, `2` MSc, `4` Undergraduate & Interns, `3` Visitors, `8` Alumni, `9` Friends. Empty groups are hidden.
  - Categories `0` and `5` render as full-width "lead" cards (`team-member.html` lead branch). Everyone else renders the same grid `member-card` — `team-member.html` (non-lead) and `team-nonmember.html` produce identical markup.
- **Styling:** `css/custom.css` is the design system, loaded after `dist/css/normalize.css` and `dist/css/skeleton.css`. **Skeleton sets `html { font-size: 62.5% }`, so `1rem = 10px`** — size all CSS values with that in mind (e.g. `1.6rem` = 16px). `js/site.js` (jQuery) drives smooth-scroll and the sticky nav.
- **Assets:** research and partner logos in `images/`, member headshots in `images/profile/`. The favicons (`favicon.ico`, `images/favicon-{16,32}*.png`, `images/apple-touch-icon.png`) were generated from `images/DenosLabLabel.png`.

## Writing style for site copy

Descriptive content (About, Research, News blurbs) follows a strict style: no em dashes; no parentheses that explain a term inline (keep acronym parentheses like `(FL)`, `(PADM)`); no colons or semicolons in prose; dense prose rather than bullet lists; and avoid the words *yet, canonical, cleanly, substrate, prose*. Verbatim external titles (paper or article names) keep their original colons. The lab focus phrase is "distributed learning, agentic simulation and reasoning".

## Conventions

- **Workflow:** branch off `main` → PR → squash-merge. After merging, confirm the "pages build and deployment / build (dynamic)" run is green, since that is the real (Jekyll 3.10) build of what ships.
- **Staging:** do not `git add -A`. New member headshots are often pre-dropped into `images/profile/` before being wired up, and the browse tooling recreates a `.gstack/` directory; both get swept into unrelated commits. Stage explicit paths.
- Adding a team member: create `_team/<name>.md` with the front matter above (no `email` — emails were intentionally removed from the whole site), drop the square headshot in `images/profile/`, and reference it from `picture`.
