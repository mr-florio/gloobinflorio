const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter.typeString("La Capital del E-Commerce").pauseFor(200).start();
