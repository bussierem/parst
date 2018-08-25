# Parst

_Parsing Strings with common regexes (without needing to know them!)_

## Installation
`pip install parst`

## Usage

```
import parst

# Usage format:  parst.<method>.<regex>()

# Example:
parst.match.email('username@gmail.com');
parst.find.email('some text containing username@gmail.com');
```

### Methods
**match** (`match.<regex>(compare_str)`)
- Match entire string against \<regex\>

_compare_str_: `string` - String to match against \<regex\>

RETURNS: `boolean` - true if entire string matches the regex, false otherwise
Example:
```
import parst

print(parst.match.email('me.person@gmail.com')) # true
print(parst.match.email('contains a me.person@gmail.com')) # false
```
---
**extract** (`extract.<regex>(compare_str)`)
- Return named match groups of the first occurrence of \<regex\> inside the string

_compare_str_: `string` - String to search using \<regex\>

RETURNS: `dict(string:string)` - Mapping of {group_name : found_match}

Example:
```
import parst

print(parst.extract.email('other.email@gmail.com')) #  { 'user': 'other.email', 'host': 'gmail', 'tld': 'com' }
print(parst.extract.email('contains no email')); # {}
```
---
**extract_all** (`extract_all.<regex>(compare_str)`)
- Return named match groups of all occurrences of \<regex\> inside the string

_compare_str_: `string` - String to search using \<regex\>

RETURNS: `list(dict(string:string))` - List of mappings of {group_name : found_match} for each occurrence of \<regex\>

Example:
```
import parst

print(parst.extract_all.email('other.email@gmail.com, foo@bar.net')) #  [{ 'user': 'other.email', 'host': 'gmail', 'tld': 'com' }, { 'user': 'foo', 'host': 'bar', 'tld': 'net' }]
print(parst.extract_all.email('contains no email')); # []
```
---
**find** (`find.<regex>(compare_str)`)
- Find first occurrence of \<rege\> inside the string

_compare_str_: `string` - String to search using \<regex\>

RETURNS: `integer` - index of start of first occurrence, or -1 if none

Example:
```
import parst

print(parst.find.email('contains me.person@gmail.com')) # 9
print(parst.find.email('contains no email')) # -1
```
---
**findMulti** (`findMulti.<regex>(compare_str, count)`)
- Find up to specified number of occurrences of \<regex\> inside the string

_compare_str_: `string` - String to search using \<regex\>

_count_: `integer` - Maximum number of occurrences to find

RETURNS: `list[tuple(integer, string)]` - list of all [startIndex, foundMatch] in the string or empty list if no matches

Example:
```
import parst

print(parst.findMulti.email('first@gmail.com second@gmail.com third@gmail.com', 2)) # [ ( 0, 'first@gmail.com' ), ( 16, 'second@gmail.com' ) ]
print(parst.findMulti.email('contains no email', 4)) # []
```
---
**findAll** (`findAll.<regex>(compare_str)`)
- Find all occurrences of \<regex\> inside the string

_compare_str_: `string` - String to search using \<regex\>

RETURNS: `list[tuple(integer, string)]` - list of all [startIndex, foundMatch] in the string or empty list if no matches

Example:
```
import parst

print(parst.findMulti.email('first@gmail.com second@gmail.com third@gmail.com')) # [ [ 0, 'first@gmail.com' ], [ 16, 'second@gmail.com' ], [ 33, 'third@gmail.com' ] ]
print(parst.findMulti.email('contains no email', 4)) # []
```
---
**replace** (`replace.<regex>(compare_str, replaceString)`)
- Replace first occurrence of \<regex\> with a provided replacement string

_compare_str_: `string` - String to search using \<regex\>

_replaceString_: `string` - String to replace \<regex\> with

RETURNS: `string` - The resulting string after the replacement is applied

Example:
```
import parst

print(parst.replace.email('there is a wrong.email@gmail.com', 'correct.email@gmail.com')) #  "there is a correct.email@gmail.com"
print(parst.replace.email('contains no email', 'correct.email@gmail.com')) # "contains no email"
```
---
**replaceAll** (`replaceAll.<regex>(compare_str, replaceString)`)
- Replace all occurrences of \<regex\> with a provided replacement string

_compare_str_: `string` - String to search using \<regex\>

_replaceString_: `string` - String to replace \<regex\> with

RETURNS: `string` - The resulting string after the replacements are applied

Example:
```
import parst

print(parst.replaceAll.email('there are several wrong.email@gmail.com and other.email@gmail.com', 'correct.email@gmail.com')) #  "there are several correct.email@gmail.com and correct.email@gmail.com"
print(parst.replaceAll.email('contains no email', 'correct.email@gmail.com')); # "contains no email"
```
