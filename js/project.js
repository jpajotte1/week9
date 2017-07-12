$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});

$(".touchevents .thumbnail").hammer().bind("press", function() {
$(this).addClass("open");
});

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
$(this).find(".caption").animate({ left: "-100%" }, 500, function(){
    $(this).attr("style", "");
  });
  $(this).removeClass("open");
});
