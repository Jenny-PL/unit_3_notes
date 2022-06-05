# Sorting algorithms

**in-place**: Sorting is done without making a new list/variable
- In-place sorting saves on space, but may take more time, and ends up modifying the initial list.
- If you don't want to modify original list, need to make a copy or use strategy that returns a new copy  
  
**stable**: A sorting algorithm is stable if it guarantees that the relative ordering of two values having the same sort key is the same after the sort as it was before the sort.
- allows for sorting by an arbitrary number of attributes
- example: you can sort by both age, and name. (sort by name first... then sort by age... this will result in a list ordered by age, however in case of tie, sorted by name)

--- 
## Some sorting types:
**O(n^2) algorithms**:  These do not scale well... work fine for small lists, but not well for large ones 
- include insertion sort, bubble sort, selection sort

**Insertion sort**  
-  Uses 2 lists: 
   -  (1st) The unsorted source list
   -  (2nd)  A new list into which sorted items are inserted
      -  Sorted list starts out empty.  Add to it, as iterate through original, unsorted list.    

The steps:
1. Treat the first item as a list of length one, which is sorted by definition.
2. Expand the portion of the sorted list by one, which may mean it is no longer sorted. **The final item, and only the final item, might be in the wrong position.**
3. Perform swaps towards the front of the list to move the final item to its proper location.
4. Continue by **expanding the items included in the sorted list by one**, swapping as necessary to move the final item to its proper location.
5. Continue with the remainder of the unsorted list, until the entire list has become sorted.

Notes: 
- For a fully sorted list (best case), this will be O(n) time complexity, as you only have to check the list item in the list each time through... the last items starts at index 0 and grows to have the index of the last item in the original list
- For a nearly sorted list, this can close to an O(n) time complexity.
- Worse case, in very unsorted list: O(n^2)
- **Insertion sort is a stable sorting algo**

Insertion sort examples: 
```
def sort_by_length(sentence):
    '''
    INPUT: sentence (string)
    OUTPUT: list of strings, with words sorted by length, ascending order
    '''
    wordList = sentence.split();
    i = 1
    while i < len(wordList):
        word_to_insert = wordList[i]
        j = i
        #  Search in the sorted portion of the array
       # for the correct position to insert wordList[i]
        while j > 0 and len(wordList[j-1]) > len(word_to_insert):
            wordList[j] = wordList[j-1]
            j-= 1
        wordList[j] = word_to_insert
        i += 1
    return wordList
```
More generic insertion sort example: 
```
def insertion_sort(array):
    i = 1
    while i < len(array):
        to_insert = array[i]
        j = i
        # Search in the sorted portion of the array
        # for the correct position to insert array[i]
        while j > 0 and array[j-1] > to_insert:
            array[j] = array[j-1]
            j -= 1
        array[j] = to_insert
        i += 1
    return array # I added this... correct?
```
**In my own words... insertion sort**:  
Insertion sort algorithm:
- Makes a list.
- sets index of i = 1
- as long as index is less than length(list), go into the loop: 
  - set item_to_insert equal to list[i].  This is the item that you'll be working to insert into the correct spot. 
  - set another index, j, equal to i:
  - j will be the index of the list item that will be compared to item_to_insert.  
  - j will be decremented  until (item[j-1]) < item_to_insert
  - this is the location where item_to_insert will be inserted: 
  - list[j] = item_to_insert
- now index i will be incremented (i+= 1), to move the index up one and begin to sort the next item in the list... comparing it against list[j] until we find the correct spot to insert.

---
**bubble sort**
1. selection sort
2. 
---
**O(n log(n)) algorithms**:
Some O(n log(n)) algorithms are: merge sort, quick sort, and heap sort.
**merge sort**  
Steps:
1. Divide the array into two sub-arrays repeatedly until each sub-array is of size one.
2. Sort each sub-array. (An array of size one is sorted by default.)
3. Merge the sub-arrays into one array by combining two sub-arrays into one at each step.  
   
**Merge sort: is it a stable algorithm?**
- Answer: Yes, it can be!  
- If we encounter two equivalent values during the merge phase, one from the left and one from the right, we need only prefer the value from the left. As long as we do this all the way up through the merging, we will preserve the relative ordering required for a stable sort.

**In my own words... merge sort**:  
Merge sort algorithm:
- Uses recursion
- splits the original array into a bunch of arrays until get down to the **recursive base case, which is all the items are in their own arrays of length 1.**
- Now rebuilds the arrays, comparing the first index of each array as it rebuilds, using an auxillary array to dictate the length. (ie- goes from arrays of len() of 1 each, to sorted arrays of len() of 2 each).
- keep re-building into larger arrays, always only having to look at the first index (then i+1, after list[i] is added to the auxillary list)of the build-block arrays.
- finally, have a fully sorted array of the original length. 