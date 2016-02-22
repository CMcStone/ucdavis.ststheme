from setuptools import setup, find_packages
import os

version = '0.1.0'

setup(name='ucdavis.ststheme',
      version=version,
      description="An installable Diazo theme for Plone 4.1 or higher",
      long_description=open("README.md").read()
      
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Development Status :: 3 - Alpha",
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 4.1",
        "Framework :: Plone :: 4.2",
        "Framework :: Plone :: 4.3",
        "Framework :: Zope2",
        "Framework :: Zope3",
        "Intended Audience :: Developers",
        "Intended Audience :: End Users/Desktop",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.6",
        "Programming Language :: Python :: 2.7",
        "Topic :: Internet",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='web zope plone theme diazo',
      author='Carol McMasters-Stone',
      author_email='cbeck@ucdavis.edu',
      url='',
      license='Creative Commons Attribution-ShareAlike 3.0 Unported License.',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['ucdavis'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'plone.app.theming',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      )