const Migrations = artifacts.require("Greeter");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
