# Parst
_Parsing Strings with common regexes (without needing to know them!)_

## What is this?
This library exists to provide cross-language ability to have access to the Regular Expressions that help
parse many commonly found string patterns.  Many people write complex functions or just copy/paste from the internet
instead of trying to learn a powerful language like RegEx, so this language will help give access to the powers
RegEx has, without requiring everyone to understand the language to use it.

1. **[Packages](#packages)**
2. **[Functionality](#functionality)**
3. **[Regex Support by Language](#feature-support)**
4. **[Contributing Regex Support](#add-regex)**
5. **[Contributing Language Support](#add-language)**

---

<a id="packages"></a>
## Currently published packages:
* [Javascript (npm)](https://www.npmjs.com/package/parst)
* [Python (PyPi)](https://pypi.org/project/parst)

---

<a id="functionality"></a>
## Currently Supported Functionality
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

<a id="feature-support"></a>
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

---

<a id="add-regex"></a>
## Contributing New Regexes

**If you wish to create a new regex to be added to the list:**
1. Make a branch off `master`, named however you wish
2. Validate the new regex by hand somewhere such as [Regex101](https://www.regex101.com)
    1. Please create capture groups for the important parts of the regex if you can, or if it will be needed - this will be required to support things like `extract`
        1. If you are unable to or don't understand capture groups well enough, please make a new Issue to add support in the future for that regex.
3. Add the new regex first to `parst/regexes/README.md` - follow format for new ones based on old.
    1. If the regex will have multiple options (such as the way `postalCodes` do) please make a table for future expansion
        1. For this table, keep the "key" for lookup all lowercase, resorting to `camelCase` if you must
4. Add the regex to any or all languages that are supported by Parst - this should be relatively easy (mostly copy/paste)
    1. **IMPORTANT:**  Different languages have different requirements for things like named groups or backreference.  Please refer to [Regex Feature Support](#feature-support) for more information.
    2. **IMPORTANT:**  Each language has some recommended naming scheme (`PascalCase`/`camelCase`/`snake_case`) - please use that naming scheme for the key of the new regex in each language.  If unsure, match the style of other regexes in the datastore for that language.
    3. If you do not want to or cannot for some reason add a regex to a language, either:
        1. Make a new Issue
        2. Add a note to the `parst/regexes/README.md` next to the new regex about which languages still need supporting for that regex.
5. Submit a Pull Request for your branch to be merged into `master`

---

<a id="add-language"></a>
## Contributing Language Support

### Distribution
- If you are distributing a new language to a package manager, or distributing an existing language to a new package manager, follow all recommended details for publishing that app.
- Provide all detail possible in the published package, including:
  - README detailing the API
  - A link to this (or your sister) repo.
  - Description of what Parst does and is for
  - Installation and Usage instructions
    - Do NOT forget to include how to import Parst for proper use
- If you wish to publish the new language support in a separate repo, you are welcome to, however I ask please that you submit a PR here that both links to your repo for that language's support AND links to the published package in the [Packages](#packages) section of this document.
  - If creating a "sister" repo like this, please still follow the standards outlined below for adding support.

### Rules:
- Any method calls for new methods, or the names of regexes in the datastore should follow the recommended naming methods for functions in the language you are implementing (e.g. `snake_case` in Python, or `camelCase` in JS)
- All languages should provide the same interface for the user:  `parst.<method>.<regexName>(<params>)` e.g. `parst.match.email('foo@bar.com')`.
  - I realize in some languages this could be more difficult than others (such as the use of `python-box` in python).
  - If necessary, importing a well-supported library is allowed, but be mindful of which you choose.
- All languages need a README file that gives the interface, along with description/params/returns/examples of each method supported by the language (if your language doesn't support named groups, no need to list `extract` or `extract all`)
- Please keep dependency lists empty if possible.  Dependencies should ideally only be added for:
  - Parsing a JSON file of regexes
  - Providing dot-notation access to methods (as outlined above)
  - Providing regex support
    - If, like in JS, the language has a stdlib that has support for regex, but not _full_ support, PLEASE use only the stdlib, and abstain from implementing whatever isn't supported yet
    - If you can find any links or research about planned support of functionality, link that in the [Regex Feature Support](#feature-support) table above
- If you must use dependencies for the above reasons, or for other very necessary reasons, please do your due diligence and make sure whatever library you import is well supported, well established, and has very few (if any) dependencies itself.
