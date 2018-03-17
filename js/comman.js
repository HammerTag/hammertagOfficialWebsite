
jQuery(document).ready(function ($) {

  $('#footer-wrap').load('footer.html', function(response, status, xhr){

  })

  // load header.
  $('#menu-wrap').load('header.html', function(response, status, xhr){
    // highlight the current user selected item.
    var userNavigatedURL = window.location.href;
    var userNavigatedURLBreakdown = userNavigatedURL.split('/');
    var userNavigatedMenuItem = userNavigatedURLBreakdown[userNavigatedURLBreakdown.length - 1];
    var allMenuItems = $('#menu-wrap').find('a');
    var foundUserNavigatedMenu = false;
    $.each(allMenuItems, function(index, menuItem){
      if($(menuItem).attr('href') === userNavigatedMenuItem){
        $(menuItem).addClass('curent-multi-page')
        foundUserNavigatedMenu = true;
      } else {
        $(menuItem).removeClass('curent-multi-page')
      }
    })
    if(!foundUserNavigatedMenu){
      $('#menu-wrap').find('a[href="index.html"]').addClass('curent-multi-page')
    }
});

//   // load footer.
//   // $('#footer-wrap').load('footer.html')
});