# Transformation Dictionary

## Problem

Our customer needs to manage transformation dictionaries.
In this specific case dictionaries are used to normalise values in dataset columns.

Consider the following example of a small dataset of products:

### Original Dataset

| Simulation title  | keyword          | Duration |
| ----------------- | ---------------- | -------- |
| Acids & Bases     | pH               | 30 min   |
| Atomic Structure  | Atoms            | 20 min   |
| Basic Electricity | Circuit Building | 10 min   |

### Transformed Dataset

| Simulation title  | keyword   | Duration |
| ----------------- | --------- | -------- |
| Acids & Bases     | Biology   | 30 min   |
| Atomic Structure  | Chemistry | 20 min   |
| Basic Electricity | Physics   | 10 min   |

### In order to transform the dataset into the desired format we need to create a dictionary like this one below:

| From             | To        |
| ---------------- | --------- |
| pH               | Biology   |
| Atoms            | Chemistry |
| Circuit Building | Physics   |

### Validations

The created dictionary should not contain any:
Clones: N identical rows in the dictionary.
Forks: N rows in the dictionary with the same ‘From’ but with different ‘To’’ .

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
