module.exports = {
    apps: [
      {
        name: 'strapi',
        script: 'npm',
        args: 'serve',
        env: {
          NODE_ENV: 'production',
        },
        exp_backoff_restart_delay: 100,
      },
    ],
  };