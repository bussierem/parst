import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
  name='parst',
  version='1.1.5',
  author='Max Bussiere',
  author_email='max.bussiere@gmail.com',
  description=long_description,
  url='https://github.com/bussierem/parst/',
  packages=setuptools.find_packages(),
  classifiers=[
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent"
  ],
  scripts=['parst.py']
)
