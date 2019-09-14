function swap(items, leftIndex, rightIndex){
    [items[leftIndex], items[rightIndex]] = [items[rightIndex], items[leftIndex]]
}

function pivot(items) {
    let pivotpt = 0;
    let swapIdx = 0;
    for(let i = 1; i <= items.length -1; i++){
        //increment position the pivot will switch to 
        // move items less than the pivot to the left
        if(items[pivotpt] > items[i]){
            
        }
    }
    swap(items, swapIdx, pivotpt);
    return swapIdx;
}

function quickSort(items, left = 0, right = items.length -1) {
    if(left < right){
        let pivotIdx = pivot(items);
        quickSort(items, left, pivotIdx -1);
        quickSort(items, pivotIdx +1, right);
    }
    return {result: items}
}

module.exports = quickSort