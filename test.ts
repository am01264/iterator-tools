import it from './index';

function getNumberFun() {
    return it([5,4,3,2,1])
    .filter((value) => (value % 2 !== 0))
    .take(2)
    .map(num => `${num}`);
}

getNumberFun().forEach((value) => {
    console.log(value);
})

getNumberFun()
    .toStream()
    .pipe(process.stdout)