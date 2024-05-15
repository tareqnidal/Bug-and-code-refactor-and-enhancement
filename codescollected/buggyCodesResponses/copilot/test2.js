```
Your function checkEquals is intended to check if two arrays are equal.
 However, in JavaScript, using === to compare arrays checks if they are the same instance,
  not if they have the same values. This means that even if arr1 and arr2 contain the same values,
   arr1 === arr2 will return false unless they reference the exact same array.
Here’s a modified version of your function that checks if the two arrays have the same values in the same order:

```
function checkEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

```
This function first checks if the arrays have the same length. If they don’t,
 it returns false. Then it checks each corresponding pair of values in the two arrays.
  If it finds a pair that doesn’t match, it returns false.
   If it gets through all the checks without finding any mismatches, it returns true. Keep coding! 😊
```



