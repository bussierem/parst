# List of Regexes

**Note:** This is merely the suggested "base" regex for each category; these get modified with capture groups and `^`/`$` as needed for various functions.

---

### Personal Info
* **Email Address:** `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}`
* **Phone Number:** `(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}`
* **Postal Codes:**
  | Country |        Regex         |
  |---------|----------------------|
  | US      | `\d{5}([ \-]\d{4})?` |

### Technical
* **Hexcodes:** `#(?:[a-f0-9]{6}|[a-f0-9]{3})`
* **URLs:** `(?:https?:\/\/)?(?:[\da-z\.-]+)\.(?:[a-z\.]{2,63})(:?[\/\w \.-]*)*\/?`
* **IP Addresses:** `(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`
