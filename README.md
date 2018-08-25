# Parst
_Parsing Strings with common regexes (without needing to know them!)_

## What is this?
This library exists to provide cross-language ability to have access to the Regular Expressions that help
parse many commonly found string patterns.  Many people write complex functions or just copy/paste from the internet
instead of trying to learn a powerful language like RegEx, so this language will help give access to the powers
RegEx has, without requiring everyone to understand the language to use it.

---

## Currently published packages:
* [Javascript (npm)](https://www.npmjs.com/package/parst)
* [Python (PyPi)](https://pypi.org/project/parst) **Note:  As of 8/25/2018 this link is not active yet, but** `pip3 install parst` **works**

---

## Planned Functionality
**NOTE:** _Each language will use their own suggested naming scheme for these (`camelCase`/`PascalCase`/`snake_case`)_

### MATCH:
* **Desc:** Given a string, returns whether the entire string matches the regex
* **Returns:** `boolean` - true if entire string matches the regex, false otherwise

### EXTRACT:
* **Desc:** Given a string, return the named match groups of the regex for that string
* **Returns:** `collection(string:string)` - a  key-value pair collection of ('groupName': 'foundString')

### EXTRACT_ALL:
* **Desc:** As **EXTRACT**, but for all occurrences of the regex
* **Returns:** `array(collection(string:string))` - an array of key-value pair collections of ('groupName': 'foundString')

### FIND:
* **Desc:** Given a string, return the index of the first occurrence of the regex
* **Returns:** `integer` - index of start of first occurrence, or -1 if none

### FIND_MULTI:
* **Desc:** As **FIND**, but with the first X occurrences of the regex (defined by user input) with the index they start at
* **Returns:** `array(array(integer,string))` - list of all [startIndex, foundMatch] in the string or empty array if no matches

### FIND_ALL:
* **Desc:** As **FIND**, but with all occurrences of the regex
* **Returns:** `array(array(integer,string))` - list of all [startIndex, foundMatch] in the string or empty array if no matches

### REPLACE:
* **Desc:** Given a string, replace the the first occurrence of the regex in the string with a new string
* **Returns:** `string` - The resulting string after the replacement is applied

### REPLACE_ALL:
* **Desc:** As **REPLACE**, but with all occurrences of the regex
* **Returns:** `string` - The resulting string after the replacements are applied

---

## Language Support for Named Groups

|  Language  |       Named Groups       | Backreference |
|------------|--------------------------|---------------|
| PERL       | `(?<name>)`              | `\k<name>`    |
| Python     | `(?P<name>)`             | `(?P=name)`   |
| Java       | `(?<name>)`              | `\k<name>`    |
| .NET       | `(?<name>)`, `(?'name')` | `\k<name>`    |
| PHP        | `(?P<name>)`             | N/A           |
| Ruby       | `(?<name>)`, `(?'name')` | `\k<name>`    |
| Javascript | `(?<name>)`              | `\k<name>`    |
| C++        | [N/A](https://github.com/tc39/proposal-regexp-named-groups)                     | [N/A](https://github.com/tc39/proposal-regexp-named-groups)           |
| Rust       | `(?P<name>)`             | N/A           |
| Golang     | `(?P<name>)`             | ???           |
| D          | `(?P<name>)`             | ???           |
| Haskell    | N/A                      | N/A           |
