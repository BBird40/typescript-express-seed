# The database folder #
Welcome to the database folder. This folder holds all things pertaining to the creation and ongoing changes to the application database.

This application is using [Sqitch](https://sqitch.org) for its database migration tool. Sqitch when initialized comes equipped with a standard layout and files.

* deploy - All the scripts to create and maintain the database's future changes.
* revert - Scripts to revert the deployments
* verify - Scripts to verify the deployments
* sqitch.conf - All the configurations for the database.
* sqitch.plan - Tracks the scripts to execute and maintains the order in which the scripts should run.