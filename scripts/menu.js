$(function() {
 $('#menu').hover(
  function () {
   $($(this)).stop().animate({'marginLeft':'-2px'},200);
  },
  function () {
   $($(this)).stop().animate({'marginLeft':'-87px'},200);
  }
 );
});