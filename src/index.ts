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

/**
 * Redact part or all of a string
 *
 * @param {string} str The string to redact
 * @param {number} visibleCount The number of characters to leave visible
 * @param {RedactOptions} options Define how redaction behavior occurs
 * */
export const redactString = (str: string, visibleCount: number, options?: RedactOptions): string => {
    const {
        replaceFrom = 'start',
        replaceWith = '*',
        replace = 'any'
    } = options || {};

    let replaceChar = `\\S`;
    if(replace === 'alphanumeric') {
        replaceChar = `\\w`;
    } else if(replace === 'alpha') {
        replaceChar = `[a-zA-Z]`
    } else if(replace === 'numeric') {
        replaceChar = '\\d';
    }

    const reg: RegExp = replaceFrom === 'start' ? new RegExp(`${replaceChar}(?=\\S{${visibleCount}})`, 'gi') : new RegExp(`(?<=\\S{${visibleCount}})${replaceChar}`, 'gi')
    return str.replace(reg, replaceWith);
}

export default redactString;
