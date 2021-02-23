var arr = [1, 2, 3, 4];
var low = 0;
var num = 6;
var upp = array.length - 1;
while (low < upp) {
    let total = arr[low] + arr[upp];
    if (total == num) {
        console.log(arr[low], array[upp]);
    } else if (total < num) {
        low += 1;
    } else {
        upp -= ;
    }
}