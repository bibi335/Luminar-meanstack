var i = 1;
while (i <= 50) {
    if ((i % 3 == 0) & (i % 5 == 0))

    {
        console.log("fizzbuss",
            i);
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buss");
    } else {
        console.log(i);
    }

    i++;
}