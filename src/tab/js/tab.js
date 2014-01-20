/* globals $ */

component.tab = function() {
  $('.tab-group').on('click', 'header', function(){
    var $this = $(this),
      $siblingHeaders = $this.parents('section').siblings().children('header'),
      $mainContainer = $this.parents('.tab-group'),
      $tabs = $mainContainer.children('.tab'),
      $headerGroup = $mainContainer.find('header'),
      headerIndex = $headerGroup.index(this),
      widths = 0, i;

    if (headerIndex > 0) {
      for (i=0; i < headerIndex; i++) {
        widths += $($tabs[i]).outerWidth(true);
      }

      widths += headerIndex * $headerGroup.length;

      // If the number of items is a divisor of 100 we don't need
      // to do any offsets.
      if (100 % $headerGroup.length !== 0) {
        widths += headerIndex;
      }

      // With groups of 2 we need to add another pixel.
      if ($headerGroup.length === 2) {
        widths += 2;
      }
    }

    // Allow closing of modules
    $siblingHeaders.removeClass('active');

    // Make active tab body show, and locate to the correct position
    $this.toggleClass('active');
    $this.siblings('article').css({
      width: $mainContainer.width(),
      left: widths * -1 + 'px'
    });
    $siblingHeaders.siblings('article').css('width', 100 + '%');
  });
};