import test from 'ava';
import * as Task from "./src/task";

const fn = () => 'foo';

test('getstock', async t => {
    const exampleSKU = "YON323215/74/41"
    const stockcheckresult = await Promise.resolve(Task.getstock(exampleSKU));

    t.is(stockcheckresult.qty, 7912)
});