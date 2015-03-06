# find-first

Retrieve the first item in an array that matches a callback function.

Returns `null` if a matching element is not found.

File size: **414 bytes**.<br/>
Supported platforms: **server and browser**.<br/>
Supported language versions: **ES3 and above**.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install find-first```

## Example

```javascript
var findFirst = require('find-first');

var arr1 = ['1', '2', '3'];
var arr2 = [1, 2, 3];

function matcher(i) {
	return i === '1';
}

findFirst(arr1, matcher); // '1'
findFirst(arr2, matcher); // null
```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.