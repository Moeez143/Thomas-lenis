const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll(".selected").forEach((select) => {
  let image = select.querySelector("img");

  let tl = gsap.timeline();
  let transform = gsap.utils.random(-300, 300);

  tl.set(image, {
    transformOrigin: `${transform > 0 ? 0 : "100%"}`,
  })
    .to(image, {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    })
    .to(select, {
      x: transform,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
});
