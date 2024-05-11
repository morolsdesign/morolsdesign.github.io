// JavaScript Document

$(function () {
  $("#nav-placeholder").load("/fragments/nav.html");
});

$(function () {
  //$("#front-page-top-content-placeholder").load("/fragments/front-page-top-content.html");
  //$("#front-page-top-content-placeholder").load("/blog/articles/eme-march-20-2024.html");
  $("#front-page-top-content-placeholder").load("/blog/articles/mission-statement-march-20-2024.html");
});

$(function () {
  $("#footer-placeholder").load("/fragments/footer.html");
});

$(function () {
  $("#featured-post-left-placeholder").load("/fragments/featured-post-left.html");
});

$(function () {
  $("#featured-post-right-placeholder").load("/fragments/featured-post-right.html");
});

$(function () {
  $("#blog-main-container-placeholder").load("/blog/blog-main-container.html", function () {
    //$("#article-2").load("/blog/articles/leo-vhf-uhf-march-20-2024.html");
	$("#article-1").load("/blog/articles/eme-march-20-2024.html");
    $("#blog-main-container-right-placeholder").load("/blog/blog-main-container-right.html");
  });
});
