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

## Solution Architecture & Design ##
This section will outline the folder structure as it pertains to solution architecture and design. Furthermore, it will outline specific design patterns and software principles followed detailing the how and why.

* db - The files used to create the database and hold "migrations" of the database over time. A typical ORM will come with a migration solution or leverage a SQL based migration tool.
* infrastructure - This stores all the files required to host this application. The files can range from Terraform to Ansible to Helm charts to Chef/Puppet.
  * Storing the infrastructure files in the application source code can be a source of debate. Some believe that storing terraform in a separate repo for the application is more suitable as it allows for a smoother CI/CD pipeline. Essentially, infrastructure being built and destroyed based on a single repository's activity. If this is the case, feel free to lift and shift the folder to a new repo.
* src - All the source code that makes the application what it is. Following a Domain Driven Design layer architecture approach where the app with its presentation and handlers coordinate with the domain and the baseline infrastructure to obfuscate and create a single layers of responsibility.
* test - All the tests (unit, integration, and end-to-end) that validate the application's logic.

## References ##

* [TS Config Reference](https://www.typescriptlang.org/tsconfig)
* [TS Config With Description](https://gist.github.com/t18n/88cebd2b355887351e8080cbb6a6b4ba)
* [Sqitch - Sql based migration tool](https://sqitch.org/)
* [Domain Driven Design Folder Structure](https://enlabsoftware.com/development/domain-driven-design-in-asp-net-core-applications.html)
* [Domain Driven Design Shopping Card App](https://github.com/bazaglia/shopping-cart)
