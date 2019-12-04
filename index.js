$(".thumbnail").on("click", function(e) {
  // const prev = document.querySelector(".hero img");
  // prev.src = e.target.src;
  // prev.alt = e.target.alt;
  // prev.src = e.target.src;
  const imageSrc = $(this)
    .find("img")
    .attr("src");
  const imageAlt = $(this)
    .find("img")
    .attr("alt");
  $(".hero img")
    .attr("src", imageSrc)
    .attr("alt", imageAlt);
});
