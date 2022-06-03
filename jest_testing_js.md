# Jest: one JS testing framework option
- [Jest documentation](https://jestjs.io/)
- 
## Some common matchers:   
[matchers](https://jestjs.io/docs/expect)  
[more notes about using matchers](https://jestjs.io/docs/using-matchers)  
```
expect(x).toEqual(y);	Compares objects x and y and passes if they are equivalent
expect(x).toBeNull();	Passes if x is null
expect(x).toBeTruthy();	Passes if x evaluates to true
expect(x).toBeFalsy();	Passes if x evaluates to false
expect(x).toContain(y);	Passes if the array or string x contains y
expect(x).toBeDefined();	Passes if x is not undefined
expect(x).toBeLessThan(y);	Passes if x is less than y
expect(x).toBeGreaterThan(y);	Passes if x is greater than y
expect(x).toBe(y);	Compares objects x and y and passes if they are the same object, do not use this to test two objects or arrays for equality.
expect(x).toMatch(pattern);	Compares x to the string or regular expression in pattern and passes if they match
expect(fn).toThrow(e);	Passes if a function, fn, throws exception e when executed
```