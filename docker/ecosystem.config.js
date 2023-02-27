module.exports = {
  apps: [
    {
      name: "dummyNode-docker",
      script: "src/app.js",
      autorestart: true,
    },
  ],
};
