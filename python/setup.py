import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
  name='parst',
  version='1.1.4',
  author='Max Bussiere',
  author_email='max.bussiere@gmail.com',
  description='String parsing with common regexes without needing to know Regex',
  url='https://github.com/bussierem/parst/',
  packages=setuptools.find_packages(),
  classifiers=[
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent"
  ],
  scripts=['parst.py']
)
