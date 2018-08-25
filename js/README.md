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
RETURNS: true if entire string matches the regex, false otherwise
Example:
```
const parst = require('parst');

console.log(parst.match.email('me.person@gmail.com')) // -> true
console.log(parst.match.email('contains a me.person@gmail.com')) // -> false
```
**find**
`find.<regex>(compareString)`
_compareString_ - `string`: String to search using <regex>
**findMulti**
`findMulti.regex(compareString, count)`
_compareString_ - `string`: String to search using <regex>
_count_ - `integer`: Number of occurrences to find
**findAll**
`findAll.regex(compareString)`
_compareString_ - `string`: String to search using <regex>
**replace**
`replace.regex(compareString, replaceString)`
_compareString_ - `string`: String to search using <regex>
_replaceString_ - `string`: String to replace <regex> with
**replaceAll**
`replaceAll.regex(compareString, replaceString)`
_compareString_ - `string`: String to search using <regex>
_replaceString_ - `string`: String to replace <regex> with

### To Do List
[ ] Fill out all 158 [country code regexes](http://cldr.unicode.org/index/downloads)
