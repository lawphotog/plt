import * as Task from "./task";

console.log('app starting')

const exampleSKU = "IQZ340003/37/30"
const stockcheckresult = Task.getstock(exampleSKU);

stockcheckresult.then(function (data) {
    console.log(`stock remaining is ${data.qty}`);

    console.log('app ending')
})
