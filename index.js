$(".container").mouseover((e) => {
  //   console.log(e);
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  $(".card").css({
    transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
  });
});

$(".container").mouseenter((e) => {
  $("h1").css({
    transform: `translateZ(150px)`,
  });
  $(".haikyu img").css({
    transform: `translateZ(200px)`,
  });
  $("h3").css({
    transform: `translateZ(125px)`,
  });
  $("button").css({
    transform: `translateZ(100px)`,
  });
  $(".circle").css({
    transform: `translateZ(10px)`,
  });
});

$(".container").mouseout((e) => {
  $(".card").css({
    transition: `all 0.5s ease`,
    transform: `rotateY(0deg) rotateX(0deg)`,
  });
});
