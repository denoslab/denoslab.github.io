$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    initNavToggle();
    buildSnippets();
  }

  // Mobile menu: the drawer is revealed by the button and closes on a link,
  // on Escape, and whenever the viewport grows back to the full menu.
  function initNavToggle() {
    var $nav = $('#site-nav'),
        $toggle = $nav.find('.navbar-toggle'),
        $drawer = $nav.find('.navbar-drawer')

    if (!$nav.length || !$toggle.length) return

    function setOpen(open) {
      $nav.toggleClass('nav-open', open)
      $toggle.attr('aria-expanded', String(open))
      $toggle.attr('aria-label', open ? 'Close menu' : 'Open menu')
      $drawer.attr('aria-hidden', String(!open))
    }

    $toggle.on('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      setOpen(!$nav.hasClass('nav-open'))
    })
    $drawer.on('click', 'a', function () { setOpen(false) })
    $document.on('keydown', function (e) { if (e.key === 'Escape') setOpen(false) })
    $window.on('resize', function () { if ($window.width() > 900) setOpen(false) })
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - navHeight()
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  // The sticky bar now carries the logo too, so its height varies by breakpoint.
  function navHeight() {
    return ($nav.outerHeight() || 0) + 8
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});