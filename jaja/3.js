
function Chislo(a) {
    return function(b) {
        return a + b
    }
};

const sumChislo= Chislo(2);

const sum = sumChislo(3)

console.log(sum);
