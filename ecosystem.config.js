module.exports = {
  apps: [
    {
      name: "uni_web",
      script: ".output/server/index.mjs",
      env: {
        PORT: 3001,
        HOST: "0.0.0.0"
      }
    }
  ]
};
