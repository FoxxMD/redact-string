"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactString = void 0;
/**
 * Redact part or all of a string
 *
 * @param {string} str The string to redact
 * @param {number} visibleCount The number of characters to leave visible
 * @param {RedactOptions} options Define how redaction behavior occurs
 * */
const redactString = (str, visibleCount, options) => {
    const { replaceFrom = 'start', replaceWith = '*', replace = 'any' } = options || {};
    let replaceChar = `\\S`;
    if (replace === 'alphanumeric') {
        replaceChar = `\\w`;
    }
    else if (replace === 'alpha') {
        replaceChar = `[a-zA-Z]`;
    }
    else if (replace === 'numeric') {
        replaceChar = '\\d';
    }
    const reg = replaceFrom === 'start' ? new RegExp(`${replaceChar}(?=\\S{${visibleCount}})`, 'gi') : new RegExp(`(?<=\\S{${visibleCount}})${replaceChar}`, 'gi');
    return str.replace(reg, replaceWith);
};
exports.redactString = redactString;
exports.default = exports.redactString;
