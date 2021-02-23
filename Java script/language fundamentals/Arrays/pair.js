var arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] == num)
            console.log(arr[i], arr[j]);
        break;
    }
}