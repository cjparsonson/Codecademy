let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last string, check work
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

// Add strings
secretMessage.push('to', 'Program');

// Replace string
let target = secretMessage.indexOf('easily');
secretMessage[target] = 'right';

// Remove and add
secretMessage.shift();
secretMessage.unshift('Programming');

// Splice and replace
target = secretMessage.indexOf('get');
secretMessage.splice(target, 5, 'know');

// Print as sentence
console.log(secretMessage.join(' '));
