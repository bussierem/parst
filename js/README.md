# Common Regex

_Parsing Strings with common regexes (without needing to know them!)_

## Usage

```
const parst = require('parst');

// parst.<function>.<regex>()
// Example:
parst.match.email('username@gmail.com');
parst.find.email('some text containing username@gmail.com');
```

### Methods
**match**
- Match entire string against regex
`match.<regex>(compareString)`
_compareString_ - `string`: String to match against <regex>
RETURNS: `boolean` - true if entire string matches the regex, false otherwise
Example:
```
const parst = require('parst');

console.log(parst.match.email('me.person@gmail.com')) // true
console.log(parst.match.email('contains a me.person@gmail.com')) // false
```

**find**
- Find first occurrence of <regex> inside the string
`find.<regex>(compareString)`
_compareString_ - `string`: String to search using <regex>
RETURNS: `integer` - index of start of first occurrence, or -1 if none
Example:
```
const parst = require('parst');

console.log(parst.find.email('contains me.person@gmail.com')) // 9
console.log(parst.find.email('contains no email')) // -1
```

**findMulti**
- Find up to specified number of occurrences of <regex> inside the string
`findMulti.regex(compareString, count)`
_compareString_ - `string`: String to search using <regex>
_count_ - `integer`: Maximum number of occurrences to find
RETURNS: `array[array[integer, string]]` - list of all [startIndex, foundMatch] in the string or empty array if no matches
Example:
```
const parst = require('parst');

console.log(parst.findMulti.email('first@gmail.com second@gmail.com third@gmail.com', 2)) // [ [ 0, 'first@gmail.com' ], [ 16, 'second@gmail.com' ] ]
console.log(parst.findMulti.email('contains no email', 4)) // []
```

**findAll**
- Find all occurrences of <regex> inside the string
`findAll.regex(compareString)`
_compareString_ - `string`: String to search using <regex>
RETURNS: `array[array[integer, string]]` - list of all [startIndex, foundMatch] in the string or empty array if no matches
Example:
```
const parst = require('parst');

console.log(parst.findMulti.email('first@gmail.com second@gmail.com third@gmail.com')) // [ [ 0, 'first@gmail.com' ], [ 16, 'second@gmail.com' ], [ 33, 'third@gmail.com' ] ]
console.log(parst.findMulti.email('contains no email', 4)) // []
```

**replace**
- Replace first occurrence of <regex> with a provided replacement string
`replace.regex(compareString, replaceString)`
_compareString_ - `string`: String to search using <regex>
_replaceString_ - `string`: String to replace <regex> with
RETURNS: `string` - The resulting string after the replacement is applied
Example:
```
const parst = require('parst');

console.log(parst.replace.email('there is a wrong.email@gmail.com', 'correct.email@gmail.com')) //  "there is a correct.email@gmail.com"
console.log(parst.replace.email('contains no email', 'correct.email@gmail.com')); // "contains no email"
```

**replaceAll**
- Replace all occurrences of <regex> with a provided replacement string
`replaceAll.regex(compareString, replaceString)`
_compareString_ - `string`: String to search using <regex>
_replaceString_ - `string`: String to replace <regex> with
RETURNS: `string` - The resulting string after the replacement is applied
Example:
```
const parst = require('parst');

console.log(parst.replaceAll.email('there are several wrong.email@gmail.com and other.email@gmail.com', 'correct.email@gmail.com')) //  "there are several correct.email@gmail.com and correct.email@gmail.com"
console.log(parst.replaceAll.email('contains no email', 'correct.email@gmail.com')); // "contains no email"
```
