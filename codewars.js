//task 1 https://www.codewars.com/kata/57356c55867b9b7a60000bd7
function basicOp(operation, value1, value2)
{
    return operation === '+' ? value1 + value2 :  operation === '-' ? value1 - value2 :
        operation === '*' ? value1 * value2 : value1 / value2;
}

//task 2 https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
    return number * -1;
}

//task 3 https://www.codewars.com/kata/56e2f59fb2ed128081001328
function printArray(array){
    return array.join(',');
}

//task 4 https://www.codewars.com/kata/568d0dd208ee69389d000016
function rentalCarCost(d) {
    const costPerDay = 40;
    let totalCost = costPerDay * d;

    if (d >= 3) {
        totalCost -= 20;
    }

    if (d >= 7) {
        totalCost -= 30;
    }

    return totalCost;
}

//task 5 https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s)
{
    return s.length % 2 === 0 ? s[(s.length / 2 - 1)] + s[(s.length / 2)] : s.charAt(s.length / 2);
}

//task 6 https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
function zero() {
    return arguments.length ? arguments[0](0) : 0;
}
function one() {
    return arguments.length ? arguments[0](1) : 1;
}
function two() {
    return arguments.length ? arguments[0](2) : 2;
}
function three() {
    return arguments.length === 1 ? arguments[0](3) : 3;
}
function four() {
    return arguments.length === 1 ? arguments[0](4) : 4;
}
function five() {
    return arguments.length === 1 ? arguments[0](5) : 5;
}
function six() {
    return arguments.length === 1 ? arguments[0](6) : 6;
}
function seven() {
    return arguments.length === 1 ? arguments[0](7) : 7;
}
function eight() {
    return arguments.length === 1 ? arguments[0](8) : 8;
}
function nine() {
    return arguments.length === 1 ? arguments[0](9) : 9;
}

function plus(k) {
    return function(n) { return Math.floor(n + k) };
}
function minus(k) {
    return function(n) { return Math.floor(n - k) };
}
function times(k) {
    return function(n) { return Math.floor(n * k) };
}
function dividedBy(k) {
    return function(n) { return Math.floor(n / k) };
}

//task 7 https://www.codewars.com/kata/525a037c82bf42b9f800029b
function partitionOn(pred, items) {
    const ts = items.filter(pred);
    const fs = items.filter(function (a) {
        return !pred(a)
    });
    items.length = 0;
    items.push.apply(items, fs.concat(ts));
    return fs.length;
}

//task 8 https://www.codewars.com/kata/570cc83df616a85944001315
function countWords(str) {
    return str == 0 ? 0 : str.trim().split(/\s+/).length;
}

//task 9 https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 != 0 ) {
            return A[i];
        }
    }
}

//task 10 https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
    const even = integers.filter(number => number % 2 === 0);
    const odd = integers.filter(number => number % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}

//task 11 https://www.codewars.com/kata/5825792ada030e9601000782
function zipWith(fn,a0,a1) {
    const arr = [];
    const length = a0.length > a1.length ? a1.length : a0.length;

    for(let i = 0; i < length; i++) {
        arr[i] = i + 1;
        arr.splice([i], 1, fn(a0[i], a1[i]));
    }

    return arr;
}

//task 12 https://www.codewars.com/kata/55b051fac50a3292a9000025
var FilterString = function(value) {
    return +value.match(/\d+/g).join('');
}

//task 13 https://www.codewars.com/kata/522551eee9abb932420004a0
function nthFibo(n) {
    return n == 1 ? 0 :  n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}

//task 14 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    return url.replace('www.', '').split('.')[0];
}

//task 15 https://www.codewars.com/kata/57f8842367c96a89dc00018e
function catMouse(map,moves) {
    let cat = 0
    let mouse = 0;
    map = map.split('\n');

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 'C') cat = [i, j]
            if (map[i][j] == 'm') mouse = [i, j]
        }
    }
    if (cat == 0 || mouse == 0) {
        return 'boring without two animals';
    }
    const myMoves = Math.abs(cat[0] - mouse[0]) + Math.abs(cat[1] - mouse[1])
    return myMoves <= moves ? 'Caught!' : 'Escaped!';
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(n) {
    const myStr = str => {
        while (str.join('').length < n.length) {
            str.push(str[str.length - 1] + str[str.length - 2]);
        }
        return str.join('') == n ? str : false;
    }
    for (let i = 1; i <= n.length / 2 + 1; i++) {
        let n1 = +n.substr(0, i), n2 = 0;
        for (let j = 1; ((n1 + n2) + '').length < n.length - i - j + 1; j++) {
            n2 = +n.substr(i, j);
            if (myStr([n1, n2])) return myStr([n1,n2]).map(x => x + '');
        }
    }
    return [];
}

//task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    const array = [];

    for (let i = nFloors; i >= 1; i--) {
        let space = (" ").repeat(nFloors - i);
        let stars = ("*").repeat(2 * i - 1);
        array.push(space + stars + space);
    }
    return array.reverse();
}

//task 18 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
    const arrStrBreak = [];
    let str = string.replace(/\s+/g, '');

    while (str) {
        if (str.length < n) {
            arrStrBreak.push(str);
            break;
        } else {
            arrStrBreak.push(str.substr(0, n));
            str = str.substring(n);
        }
    }
    return arrStrBreak.join('\n');
}

//task 19 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
    const arrWave = [];

    for (let i = 0; i < str.length; i++) {
        let arrStr = str.split('');

        if(arrStr[i] !== ' ') {
            arrStr[i] = arrStr[i].toUpperCase();
            arrWave.push(arrStr.join(''));
        }
    }
    return arrWave;
}

//task 20 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
    let count = 0;

    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] == ar[i + 1] + 1 || ar[i] == ar[i + 1] - 1) {
            count++;
        }
    }
    return count;
}

//task 21 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    let res = 0;

    if (remainder === 0) {
        return bound;
    } else {
        res = bound - remainder;
        return res;
    }
}

//task 22 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(number => number % 2 === 0);
}

//task 23 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
    let min = 0;
    let max = 0;
    const res = [];

    while (arr.length > 1) {
        max = Math.max(...arr);
        res.push(max);
        arr.splice(arr.indexOf(max) , 1);
        min = Math.min(...arr);
        res.push(min);
        arr.splice(arr.indexOf(min) , 1);
    }
    if (arr.length == 0) {
        return res;
    }
    res.push(arr[0]);
    return res;
}

//task 24 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    const res = [];
    const arr = string.split('');

    if (arr.length < 2 || arr.length > 100) {
        return "invalid string";
    }
    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

//task 25 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
var gimme = function (inputArray) {
    let min = 0;
    let max = 0;
    const arr = inputArray.slice();

    while (arr.length > 1) {
        max = Math.max(...arr);
        arr.splice(arr.indexOf(max) , 1);
        min = Math.min(...arr);
        arr.splice(arr.indexOf(min) , 1);
    }
    return inputArray.indexOf(arr[0]);
}

//task 26 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] != arr[i + 1]) {
            if ( arr[i + 1] == arr[i + 2]) {
                return arr[i];
            }
            return arr[i + 1];
        }
    }
}

//task 27 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
    const arr = str.split(' ');
    const res = arr.map(w => w.replace(/^\d+/, c => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2'));

    return res.join(' ');
}

//task 28 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    const oddArray = array.filter(number => number % 2).sort((a,b) => a - b);
    const res = array.map(number => number % 2 ? oddArray.shift() : number);
    return res;
}

//task 29 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
}

//task 30 https://www.codewars.com/kata/596cf5b0e1665a2d02000007
function objConcat(o) {
    return Object.assign(...o);
}

//task 31 https://www.codewars.com/kata/547c71fdc5b2b38db1000098
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}

//task 32 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
    this.firstName = first,
        this.lastName = last;

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },
        set: function(fullName) {
            const arrFullName = fullName.split(' ');
            if(arrFullName.length === 2) {
                this.firstName = arrFullName[0];
                this.lastName = arrFullName[1];
            }
        },
    });
}

//task 33 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
    const newArr = arr.map(x => Array.from(new Set(Array.from(x.toLowerCase().replace(/\s/g, '')).sort().join(''))).join(''))

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== newArr[i + 1] && newArr[i + 1] === newArr[i + 2]) {
            return arr[i];
        } else if (newArr[i] !== newArr[i + 1] && newArr[i + 1] !== newArr[i + 2]) {
            return arr[i + 1];
        } else if (newArr[i] === newArr[i + 1] && newArr[i + 1] !== newArr[i + 2]) {
            return arr[i + 2];
        }
    }
}

//task 34 https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function (arr) {
    const zeros = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(0)
            arr.splice(i, 1)
            i--
        }
    }
    return arr.concat(zeros);
}

//task 35 https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
    const min = seconds / 60;
    const hours = min / 60;
    const lessTen = (value) => value < 10 ? "0"+value : value;
    const result = lessTen(parseInt(hours, 10)) + ":" + lessTen(parseInt(min % 60), 10) + ":" + lessTen(parseInt(seconds % 60, 10));

    return result;
}

//task 36 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
    Object.freeze(this)
}

//task 37 https://www.codewars.com/kata/5e602796017122002e5bc2ed
function partialKeys (obj) {
    return new Proxy(obj, {
        get: (obj, keys) => {
            const key = Object.keys(obj).sort().find((x) => x.startsWith(keys));
            return key ? obj[key] : undefined;
        }
    });
}

//task 38 https://www.codewars.com/kata/55e7650c8d894146be000095
function validateMessage(msg) {
    if (msg === null)
        throw new ReferenceError('Message is null!');

    if (typeof msg !== 'string')
        throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);

    if (msg.length < 1 || msg.length > 255)
        throw new RangeError(`Message contains ${msg.length} characters!`);

    if (msg.includes('<') && msg.includes('>')) return false;

    return true;
}

//task 39 https://www.codewars.com/kata/5a353a478f27f244a1000076
function sayJoke(apiUrl, jokeId) {
    return fetch(apiUrl)
        .then((response) =>
            response.json())
        .then((data) => {
            if (!data.hasOwnProperty('jokes'))
                throw new Error(`No jokes at url: ${apiUrl}`);

            const joke = data.jokes.find(jokee => jokee.id === jokeId);

            if (!joke)
                throw new Error(`No jokes found id: ${jokeId}`);
            return {
                saySetup: () => joke.setup,
                sayPunchLine: () => joke.punchLine,
            }
        });
}

//task 40 https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    const str = word.toLowerCase();
    let dup = '';

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            dup += '(';
        } else {
            dup += ')';
        }
    }
    return dup;
}
