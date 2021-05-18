const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"admin",
  //instead of login password use token from sonarqube
  //token: "dddsddsdsds"
  options: {
    "sonar.sources": "./src"
  },
},
() => process.exit()
);
