module.exports = {
  apps: [
    {
      name: "badgusan",
      script: "serve -s dist -p 80",

      args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "root",
      host: "185.208.172.48",
      ref: "origin/master",
      repo: "https://gitlab.com/aliafsah1988/musicbandwebsite.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
