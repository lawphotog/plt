import { getstock } from "./stockchecker";

console.log('app starting')

const exampleSKU = "IQZ340003/37/30"
const stockcheckresult = getstock(exampleSKU);

stockcheckresult.then(function (data) {
    console.log(`stock remaining is ${data.qty}`);

    console.log('app ending')
})
