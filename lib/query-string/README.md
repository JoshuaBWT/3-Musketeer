# query-string

## Introduction

> Parse and stringify modules for URLs

## Installation

npm install query-string --save

## Use

### functions
1. parse(string)
Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly.

2. stringify(object)
Stringify an object into a query string, sorting the keys.

3. extract(string)
Extract a query string from a URL that can be passed into .parse().
