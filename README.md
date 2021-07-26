to run the app, simply

    docker compose up

that will run the test and application.

if no docker,

    npm start

Note:

to change different SKU, change `exampleSKU` in app.ts for different SKU.
This is hardcoded but if an api is built on the top of this, it can be something like a request param.

Assumption:

Transactions include type with order or refund. The reason the field is included in the test is because it's important. so I am adding back refunded item to total stock. In real world, of course this kind of things will be confirmed with BA.