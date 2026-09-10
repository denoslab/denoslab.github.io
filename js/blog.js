/* Category filter for /blog/. The chips are rendered by _includes/blog-list.html
   and stay hidden until this script runs, so the unfiltered list is what shows
   when scripting is off. The active category is mirrored into the `?category=`
   query string, which makes a filtered view shareable and survives a reload. */
(function () {
  var filters = document.getElementById('blog-filters');
  var list = document.getElementById('blog-posts');
  var empty = document.getElementById('blog-empty');
  if (!filters || !list) return;

  var chips = filters.querySelectorAll('.blog-chip');
  var cards = list.querySelectorAll('.post-card');

  function apply(category, updateUrl) {
    var shown = 0;
    for (var i = 0; i < cards.length; i++) {
      var categories = (cards[i].getAttribute('data-categories') || '').split(/\s+/);
      var match = category === 'all' || categories.indexOf(category) !== -1;
      cards[i].hidden = !match;
      if (match) shown++;
    }
    for (var j = 0; j < chips.length; j++) {
      var active = chips[j].getAttribute('data-category') === category;
      chips[j].classList.toggle('is-active', active);
      chips[j].setAttribute('aria-pressed', String(active));
    }
    if (empty) empty.hidden = shown !== 0;

    if (updateUrl && window.history && window.history.replaceState) {
      var url = window.location.pathname + (category === 'all' ? '' : '?category=' + encodeURIComponent(category));
      window.history.replaceState(null, '', url);
    }
  }

  function known(category) {
    for (var i = 0; i < chips.length; i++) {
      if (chips[i].getAttribute('data-category') === category) return true;
    }
    return false;
  }

  filters.hidden = false;
  filters.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.blog-chip') : null;
    if (!chip) return;
    apply(chip.getAttribute('data-category'), true);
  });

  var requested = (window.location.search.match(/[?&]category=([^&]*)/) || [])[1];
  requested = requested ? decodeURIComponent(requested) : 'all';
  apply(known(requested) ? requested : 'all', false);
})();
