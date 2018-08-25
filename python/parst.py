import methods
import json
from box import Box

REGEX_JSON = 'data/regexes.json'

def buildRegexDict():
  with open(REGEX_JSON, 'r') as rjf:
    reg_data = rjf.read()
  return json.loads(reg_data)

REGEX_DICT = buildRegexDict()

def buildMethod(method):
  return Box(method(REGEX_DICT).regexes)

# Public Methods
match       = buildMethod(methods.Match)
extract     = buildMethod(methods.Extract)
extract_all = buildMethod(methods.ExtractAll)
find        = buildMethod(methods.Find)
find_multi  = buildMethod(methods.FindMulti)
find_all    = buildMethod(methods.FindAll)
replace     = buildMethod(methods.Replace)
replace_all = buildMethod(methods.ReplaceAll)
