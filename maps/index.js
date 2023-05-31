let sf=new Map();
sf.set('jina','Haron')
sf.set(23,'age of 23')
sf.set(true,'boolean')

let age=sf.get(23)
let hasName=sf.has('jina')
let deleteTrue=sf.delete(true)

// keys()
for(let key of sf.keys()){
    console.log(key);
}

// values()
for(let value of sf.values()){
    console.log(value);
}

// entries
for(let [k,v] of sf.entries()){
    console.log(`${k} has the value of ${v}`);
}


console.log(age);
console.log(sf);
console.log(hasName);
console.log(sf.size);


// Task
// 1. Create a Map and add the following values:
// 'Ryu','Japan'
// 'Ken','Usa'
// 'Guile','USA'
// 'Blanka','Brazil'

// 2. Iterate over the values and log them to the console

let mapData= new Map()
mapData.set('Ryu','Japan')
mapData.set('Ken','Usa')
mapData.set('Guile','USA')
mapData.set('Blanka','Brazil')

for(let [k,v] of mapData.entries()){
    console.log(`${k} is the key of ${v}`);
}

