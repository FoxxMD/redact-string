# redact-string

Redact (replace) part or all of a string with a character.

## Why another react package?

The other popular packages seem to be restricted to a certain behavior:

* Redaction of objects/json (instead of plain variables/values you control)
* Redaction **entirely** replaces value leaving no structure or hint of what it was

This didn't fit my needs. I wanted to be able to control how many characters were replaced as well as leave part of the structure intact for hinting in logging. A prime example being replacing _part_ of an IP address so users can view/post logs which confirm correct settings but don't give away full addresses IE `192.168.1.105` -> `**********105`

# Install/Usage

```
npm install @foxxmd/react-string
```

```js
import {reactString} from '@foxxmd/redact-string';

console.log(reactString('192.168.1.105', 3)); // 3 is the number of character to leave visible
// *********105
```

# Options

An optional, third argument can be passed that defines how the redact occurs:

```ts
export interface RedactOptions {
    /**
     * Replace characters starting at the start or end of string (default start)
     * */
    replaceFrom?: 'start' | 'end'
    /**
     * The character/string that characters are replaced with (default '*')
     * */
    replaceWith?: string
    /**
     * Which type of characters to replace in the string (default any)
     * */
    replace?: 'any' | 'alphanumeric' | 'alpha' | 'numeric'
}
```

# Examples

```js

// replace all but last 3 characters
console.log(reactString('192.168.1.105', 3));
// *********105

// replace all but first 3 characters
console.log(reactString('192.168.1.105', 3, {replaceFrom: 'end'}));
// 192**********

// replace all but last 3 characters, numeric only
console.log(reactString('192.168.1.105', 3, {replace: 'numeric'}));
// ***.***.*.105

// replace all but last 5 characters with 'X'
console.log(reactString('superSecretPassword', 5, {replaceWith: 'X'}));
// XXXXXXXXXXXXXXsword
```
