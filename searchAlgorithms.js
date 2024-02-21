// Linear search exemplo para achar
// um elemnto em uma array o algoritimo passa por todos os
// elementos um de cada vez

// Best Case O(1)
// Avg Case O(n)
// Worst Case O(n)

function linearSearch(array,target){
    for(let i=0; i< array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1
}

// Binary Search Só funciona em arrays ordenadas com um detertmiando parametro
// como ordem alfabetica, ordem crescente, decrescente, etc...

// Best Case O(1)
// Avg Case O(log n)
// Worst Case O(log n)

function binarySearch(array,target){
    let start = 0
    let end = array.length -1
    let middle = Math.floor((start - end)/ 2)

    while(array[middle]!== target && start < end){
        if(array[middle] > target) end = middle -1
        else start = middle + 1
        middle = Math.floor((start - end)/ 2)
    }
    return array[middle] === target ? middle : -1
    
}


