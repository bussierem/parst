# Parst
_Parsing Strings with common regexes (without needing to know them!)_

## Planned Functionality
**MATCH:**
* description: _given a string, returns whether the entire string matches the regex_
* returns -> `boolean`

**EXTRACT:**
* description: _given a string, return the named match groups of the regex for that string_
* returns -> `collection(string:string)`

**EXTRACT_ALL:**
* description: _as EXTRACT, but for all occurrences of the regex_
* returns -> `array(collection(string:string))`

**FIND:**
* description: _given a string, return the index of the first occurrence of the regex_
* returns -> `integer`

**FIND_MULTI:**
* description: _as FIND, but with the first X occurrences of the regex (defined by user input) with the index they start at_
* returns -> `array(array(integer,string))`

**FIND_ALL:**
* description: _as FIND, but with all occurrences of the regex_
* returns -> `array(integer)`

**REPLACE:**
* description: _given a string, replace the the first occurrence of the regex in the string with a new string_
* returns -> `integer` _[0 success, -1 failure]_

**REPLACE_ALL:**
* description: _as REPLACE, but with all occurrences of the regex_
* returns -> `string` _[new string with replacement applied]_

**REPLACE_COMPLEX:**
* description: _given a string and a regex with multiple NAMED capture groups, replace each occurrence of each capture group with a string found in a collection of {capture_group: replacement_string}_
* returns -> `string` _[new string with replacement applied]_

---

## Language Support for Named Groups
* NOTE: [Naming is not yet available for Javascript](https://github.com/tc39/proposal-regexp-named-groups) **(as of 8/25/2018)**

|  Language  |       Named Groups       | Backreference |
|------------|--------------------------|---------------|
| PERL       | `(?<name>)`              | `\k<name>`    |
| Python     | `(?P<name>)`             | `(?P=name)`   |
| Java       | `(?<name>)`              | `\k<name>`    |
| .NET       | `(?<name>)`, `(?'name')` | `\k<name>`    |
| PHP        | `(?P<name>)`             | N/A           |
| Ruby       | `(?<name>)`, `(?'name')` | `\k<name>`    |
| Javascript | `(?<name>)`              | `\k<name>`    |
| C++        | N/A                      | N/A           |
| Rust       | `(?P<name>)`             | N/A           |
| Golang     | `(?P<name>)`             | ???           |
| D          | `(?P<name>)`             | ???           |
| Haskell    | N/A                      | N/A           |
