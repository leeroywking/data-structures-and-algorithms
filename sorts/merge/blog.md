
## Blog Notes: Merge Sort

Merge sort is the first of the "good" algos we get for sorting.

I would rank this as medium difficulty and medium speed.

## Learning Objectives
  * Implement merge sort
  * Write unit tests
  * Produce appropriate Documentation



[insertion sort visual](https://www.toptal.com/developers/sorting-algorithms/merge-sort)


This algorithm is a divide and conquor style sorting approach. 
First the algo checks if the array.length is > 1
Second the algo splits the array in two halves
goto 10
left = merge(left)
right = merge(right)
and then as they come off the call stack they will be re-merged


psuedocode 
```
 
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left


```
Readings and References

Watch

  * [Video](https://www.youtube.com/watch?v=JSceec-wEyw)

Read
  * [Article 1](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2)
  * [Article 2](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/)
