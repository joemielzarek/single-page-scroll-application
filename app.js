$( document ).ready(function() {
    console.log( "ready!" );

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#myMenu',
      navigation: true,
      navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']
    });

});
