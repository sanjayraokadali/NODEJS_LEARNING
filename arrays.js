// Arrays

let ar = [1,2,3,4,5];

for (item of ar){
    console.log(item);
}

console.log(
    ar.map(
        hobby => {
            return hobby * 2;
        }
    )
);

// ar.fin
// const findArIndex = (ar) =>{

//     for (item of ar){
//         console.log(ar.findIdex(item));
//     }
// }

// findArIndex(ar);