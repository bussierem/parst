# Parst
_Parsing Strings with common regexes (without needing to know them!)_

## Planned Functionality
_NOTE:  Each language will use the suggested naming scheme for these (camelCase/PascalCase/snake_case)_

#### MATCH:
* **Desc:** Given a string, returns whether the entire string matches the regex
* **Returns:** `boolean`

#### EXTRACT:
* **Desc:** Given a string, return the named match groups of the regex for that string
* **Returns:** `collection(string:string)`

#### EXTRACT_ALL:
* **Desc:** As **EXTRACT**, but for all occurrences of the regex
* **Returns:** `array(collection(string:string))`

#### FIND:
* **Desc:** Given a string, return the index of the first occurrence of the regex
* **Returns:** `integer`

#### FIND_MULTI:
* **Desc:** As **FIND**, but with the first X occurrences of the regex (defined by user input) with the index they start at
* **Returns:** `array(array(integer,string))`

#### FIND_ALL:
* **Desc:** As **FIND**, but with all occurrences of the regex
* **Returns:** `array(integer)`

#### REPLACE:
* **Desc:** Given a string, replace the the first occurrence of the regex in the string with a new string
* **Returns:** `integer` _[0 success, -1 failure]_

#### REPLACE_ALL:
* **Desc:** As **REPLACE**, but with all occurrences of the regex
* **Returns:** `string` _[new string with replacement applied]_

#### REPLACE_COMPLEX:
* **Desc:** Given a string and a regex with multiple _named_ capture groups, replace each occurrence of each capture group with a string found in a collection of {capture_group: replacement_string}
* **Returns:** `string` _[new string with replacement applied]_

---

## Language Support for Named Groups
* **NOTE:** [Naming is not yet available for Javascript](https://github.com/tc39/proposal-regexp-named-groups) **(as of 8/25/2018)**

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
