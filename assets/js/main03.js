

// function declaration
function test(a) {
    console.log(a);
    console.log('test');

}

//function expression

let test2 = function(a) {
    console.log(a);
}


let test3 = (a) => {
    console.log(a);
}

let test3b = (a, b) => console.log(a, b);

let test3c = a => console.log(a);

let test3d = () => console.log('teszt');




let testarray0 = [0,1,2,3,4, 'test','Jani', true, false, undefined,[1,2,3,4,5]];


// ------------------------- Modosítják a tömböt ------------------------------------------


let testarray = [01213323, 6237236127, 772826, 0, 3];
// array.lenght   tömb hosszával tér vissza
console.log( testarray.length ); 

console.log( testarray[0] );
console.log( testarray [testarray.length-1] );


for (let i = 0; i < testarray.length; i++) {
    //console.log(testarray[i] );
}



// forEach() bejárja a tömb elemeit, hasonló a for-hoz

let tomb = [356156, 7272562, 32, 772, 8877, 3];

tomb.forEach(  (item, index) => { console.log(item,index) }   )


// array.join (',') tömb elemeink összefűzése stringbe, 
console.log(tomb.join(' | '));


// array.push('tömbelemek') elemek beszúrása tömb végére

tomb.push(12);
console.log(tomb);


// array.pop() a tömb utolsó elem kiemelése 
console.log(tomb.pop());


// array.shift() a tömb első elemének kiemelése 
console.log(tomb.shift());



// array.unshift(tömbelemek) beszúrása a legelejére 
tomb.unshift(13);
console.log(tomb);


// array.slice(1,3) - visszatér a tömb azon elemeivel amelyek atadó induló és záró indexeihez esnek a zár nem érvényes
console.log(tomb.slice(1,3));
console.table(tomb);

// array splice(1,0, 'tömbelem'); ujként adott elem beszúrása egy adott helyre msáodik számnál ha 0 nem változtat de ha 1 irsz akkor egyet kicserél arra de ha 2 akkor azt a kettőt 
tomb.splice(1,0, 'uj elem');
console.table(tomb)


//---------------- Nem modosítják az Eredeti tömböt ------------------------------------

// array.find(item => item > 12) visszatér az első olyan elemhez ami igaz arra amit kiírtunk

let tomb1 = [ 31112, 444322, 45, 5666, 3, 5];

let newArray = tomb1.find(item => item > 12);
console.log(newArray);

// array.filter(item => item > 12) viszatér az összes nagyobb elemellel és ki irja 

let newArray2 = tomb1.filter(item => item > 12);
console.table(newArray2);


// array.includes5) megvizsgálja hogy az adott elemből van e már a tömbbe 
console.log(tomb1.includes(45));


// array.some(item => item > 12 ) megvizsgálja hogy van e nagyobb elem (true, false)
console.log(tomb1.some(item => item > 12));

// array.map(item => item * 10) 

let mapped = tomb1.map(item => item * 10);
console.table(tomb1);


// array.flat() kilapít egy tömbdimenzios tömmbot 
let minta = [1,2,4,45[2376,57573,5889],47783, 555]
console.table(minta);
console.table(minta.flat());
