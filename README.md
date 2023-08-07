# TypeScript Express Seed #
This project is meant to serve as a template, boilerplate, or a seed for others. It is meant to outline a typical structure of a nodejs express application along with essential dependencies and common features that get built in this API framework.

## Initial Development Environment Setup ##
This is a nodejs, docker application. This section will outline the installs that must exist on an engineer's machine to run the application. Noted below are the required downloads to run any application with nodejs & docker.

* [Docker](https://www.docker.com/products/docker-desktop/)
* [nvm](https://github.com/nvm-sh/nvm)
  * Run via terminal `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`
  * NOTE: The version in the above command, as newer versions of nvm are released, this command must update
  * Why nvm? nvm will allow many nodejs applications of many different nodejs versions to be developed against with the simple execution of a command.

## Initial Application Setup ##
After the development environment, aka the computer where the code will be written and tested, has been completed, the initial setup of the application must be done. Without the actions performed below, a person will not be able to run, debug, or execute tests of the application.

* Setup the `.env` file (that powers Docker) - `cp .env.example .env`
* * Run via terminal `nvm use`
  * If the version from the `.nvmrc` is not installed, run via terminal `nvm install` and then `nvm use`.

## References ##

* 