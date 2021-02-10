const seconds = (total) => total % 60;
const perimetr = (side, count) => side * count;
const FBF = (n) => {
    for (let i = 1; i < n; i++) {
        let log = '';
        if (n%3===0) log+="fizz";
        if(n%5===0) log+="fizzbuzz";
        console.log(log);
    }
};

