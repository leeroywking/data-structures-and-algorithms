
## Blog Notes: Insertion Sort

Merge sort is the first of the "good" sorts we will be using

This algo is conceptually simple but computationally expensive

## Learning Objectives
  * Implement Insertion sort
  * Write unit tests
  * Produce appropriate Documentation


[insertion sort visual](https://gfycat.com/largegenerousjuliabutterfly)


The algorithm checks each place in the array (j iterator) against the current reference value (i iterator), and swaps them if the J is > I 

psuedocode 
```
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
Readings and References

Watch

  * [Video](https://www.youtube.com/watch?v=JU767SDMDvA)

Read
  * [Article 1](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/analysis-of-insertion-sort)
  * [Article 2](https://stackoverflow.com/questions/28379397/simple-insertion-sort)
