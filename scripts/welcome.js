document.addEventListener("DOMContentLoaded", (event) => {
  new TypeIt("#msg", {
    strings: [
      "Hello digital nomad.",
      " ",
      "You seem to be an excellent fit for our organization.",
      " ",
      "Time for a test.",
      " ",
      "No worries, we'll lead the way.",
      " ",
      "But it's up to you to light the path.",
    ],
    speed: 10,
    lifeLike: true,
    waitUntilVisible: true,
    cursor: true,
    afterComplete: async (step, instance) => {
      instance.destroy();
      new TypeIt("#pre", {
        strings: "We are ",
        afterComplete: async (step, instance) => {
          instance.destroy();
          new TypeIt("#name", {
            strings: " D-CODE",
            afterComplete: async (step, instance) => {
              instance.destroy();
              new TypeIt("#post", {
                strings: ".",
              }).go();
            },
          }).go();
        },
      }).go();
    },
  }).go();
});

function getPassword() {
  return "Nice job!\nPASSWORD FOR PASSWORD MANAGER:\nh0p3_th1s_1s_fUn!"
}