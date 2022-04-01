function addFactoral(num){
    let total = 0;
    for (let x=0; x <= num; x++){
        total+=x;
    };
    return total;
};

console.log(addFactoral(6));