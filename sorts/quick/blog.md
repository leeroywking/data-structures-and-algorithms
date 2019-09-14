
## Blog Notes: quick Sort

quick sort is the fast way of sorting

I would rank this as high difficulty and high speed.

## Learning Objectives
  * Implement quick sort
  * Write unit tests
  * Produce appropriate Documentation



[quick sort visual](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/)


This algorithm is a divide and conquor style sorting approach with a twist! (pivot/twist get it, do you get my joke?). 
first choose a pivot point
pivot the array
quick sort left
quick sort right

psuedocode 
```
 ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp


```
Readings and References

Watch

  * [Video](https://www.youtube.com/watch?v=SLauY6PpjW4)

Read
  * [Article 1](https://en.wikipedia.org/wiki/Quicksort)
  * [Article 2](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort)
