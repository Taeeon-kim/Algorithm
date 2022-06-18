var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string'); // TypeError: Cannot assign to read only property 'length' of object '[object String]'

Array.prototype.concat.call(str, 'string')
// console.log(str)