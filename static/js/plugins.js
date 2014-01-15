
$(document).ready(function(){
  $('.tab-group').on('click', 'header', function(e){
    var $this = $(this);

    // Allow closing of modules
    $this.parents('section').siblings().children('header').removeClass('active');

    $this.toggleClass('active');
  });
});
