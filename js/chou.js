// JavaScript Document
var url = window.location.pathname;
console.log (url);
var filename = url.substring(url.lastIndexOf('/')+1);

$(".lang").click(function chgLang (e){
	e.preventDefault();
	//alert(filename); 
	
	$.ajax({
        url:'../index',
        error: function()
        {
          // alert('file does not exists');
        },
        success: function()
        {
           // alert('file exists');
        }
    });
	
	window.location = $(this).attr("href") +"/"+filename;
});




$(document).ready(function(e) {
	$("#nav > li").each(function(index, element) {
		$href = $(element).find("a").attr("href");
		//console.log ($href);
		if (filename === $href.substring($href.lastIndexOf('/')+1)) {
			$(element).addClass("active");
			return false;
		}
	});
});


$(document).keyup(function(e){
	if(e.keyCode === 47) location.reload ();
});

$(".toTop").click(function(){
	$("html, body").animate({ scrollTop: 0 });
	return false ;
});

$(".subNav > li > a").click(function (){
	var id = $(this).attr("href") ;
	var $ele =$(id);
	if ( $ele.length === 0){
		$ele = $ ("a").find("[name='"+ id +"']");
	}
	console.log ($ele);
	var p = $ele.offset().top - 30;
	$("html,body").animate({ scrollTop: p });
	return false;
});
		

$.fn.reverseChildren = function() {
  return this.each(function(){
    var $this = $(this);
    $this.children().each(function(){ $this.prepend(this) });
  });
};





/** GOOGLE ANALYSIS  **/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-50095834-1', 'nccu.edu.tw');
ga('send', 'pageview');
//* GOOGLE ANALYSIS  */