import setuptools

with open('README.md') as f:
    long_desc = f.read()

setuptools.setup(
  name='parst',
  version='1.1.7',
  author='Max Bussiere',
  author_email='max.bussiere@gmail.com',
  description='Parsing Strings with common regexes (without needing to know them!)',
  long_description=long_desc,
  long_description_content_type='text/markdown',
  url='https://github.com/bussierem/parst/',
  packages=setuptools.find_packages(),
  classifiers=[
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent"
  ],
  scripts=['parst.py']
)
