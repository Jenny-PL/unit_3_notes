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
More generic example: 
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
```

---
**bubble sort**
1. selection sort

**O(n log(n)) algorithms**:
- merge sort