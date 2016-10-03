/**
 * Created by carlosmatheu on 3/10/16.
 */
function add (x, y) {
    if ((typeof x && typeof y) !== 'number') {
        throw new Error('params must be numbers');
    }
    var result = x + y;
    if(parseInt(result) !== result) {
        result = parseFloat(result.toFixed(2));
    }
    return result;
}