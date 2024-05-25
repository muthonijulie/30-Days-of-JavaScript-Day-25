const joinedArray=function(arr1,arr2){
    const obj = {};
    for(const i of arr1) {
        obj[i.id] = i;
    }
    for(const i of arr2) {
        obj[i.id] = obj[i.id] ? {...obj[i.id], ...i} : i;
    }
    return Object.values(obj);
};

// const arr1 = [   {"id": 1, "x": 1},   {"id": 2, "x": 9} ];
// const arr2 = [ {"id": 3, "x": 5} ];
// const arr1 = [ {"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 3, "y": 6} ];
// const arr2 = [ {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0} ];
const arr1 = [ {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48} ];
const  arr2 = [ {"id": 1, "b": {"c": 84}, "v": [1, 3]} ]
console.log(joinedArray(arr1,arr2));