to run the app, simply

    docker compose up

that will run the test and application.

Note:

to change different SKU, change `exampleSKU` in app.ts for different SKU.
This is hardcoded but if an api is built on the top of this, it can be something like a request param.

the main logic is in one file called task.ts, which breaks SRP. it can be split into multiple files for different purposes like reading json files, checking stocks, doing calculation, etc.

For test, usually side effect like reading JSON files from the disk will be mocked for unit testing. once the task.ts is broken down into multiple files more focus tests can be written too.

Sorry very limited time!!!!

Assumption:

Transactions include type with order or refund. The reason the field is included in the test is because it's important. so I am adding back refunded item to total stock. In real world, of course this kind of things will be confirmed with BA.