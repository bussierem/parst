import re

class Match():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str):
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return regex.fullmatch(compare_str) != None
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class Extract():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str):
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return regex.search(compare_str).groupdict();
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class ExtractAll():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str):
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return [match.groupdict() for match in regex.finditer(compare_str)];
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class Find():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str):
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        result = regex.search(compare_str)
        return result.span()[0] if result else -1
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class FindMulti():
  def __init__(self, regex_dict):
    self.default_count = 1
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str, count=self.default_count):
      if not isinstance(count, int) or count <= 0:
        raise ValueError('Max Occurrence count must be a positive whole integer')
      if isinstance(compare_str, str):
        results = []
        regex = re.compile(regex_str)
        for match in regex.finditer(compare_str):
          results.append((match.start(), match.group(0)))
          if len(results) >= count:
            break
        return results
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class FindAll():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str):
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return [(match.start(), match.group(0)) for match in regex.finditer(compare_str)]
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class Replace():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str, replace_str):
      if not isinstance(replace_str, str):
        raise TypeError('Replacement parameter is not a string! Cannot perform action')
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return regex.sub(replace_str, compare_str, 1)
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data

# ---------------------------------------- #

class ReplaceAll():
  def __init__(self, regex_dict):
    self.regexes = self.buildRegexes(regex_dict)

  def buildRegexFunc(self, regex_str):
    def regexFunc(compare_str, replace_str):
      if not isinstance(replace_str, str):
        raise TypeError('Replacement parameter is not a string! Cannot perform action')
      if isinstance(compare_str, str):
        regex = re.compile(regex_str)
        return regex.sub(replace_str, compare_str)
      else:
        raise TypeError('Parameter is not a string!  Cannot perform action')
    return regexFunc

  def buildRegexes(self, regex_dict):
    data = {}
    for k,v in regex_dict.items():
      data[k] = self.buildRegexFunc(v)
    return data
