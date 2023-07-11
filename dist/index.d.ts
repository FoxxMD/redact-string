export interface RedactOptions {
    /**
     * Replace characters starting at the start or end of string (default start)
     * */
    replaceFrom?: 'start' | 'end';
    /**
     * The character/string that characters are replaced with (default '*')
     * */
    replaceWith?: string;
    /**
     * Which type of characters to replace in the string (default any)
     * */
    replace?: 'any' | 'alphanumeric' | 'alpha' | 'numeric';
}
/**
 * Redact part or all of a string
 *
 * @param {string} str The string to redact
 * @param {number} visibleCount The number of characters to leave visible
 * @param {RedactOptions} options Define how redaction behavior occurs
 * */
export declare const redactString: (str: string, visibleCount: number, options?: RedactOptions) => string;
export default redactString;
