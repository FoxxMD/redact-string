export interface RedactOptions {
    replaceFrom?: 'start' | 'end'
    replaceWith?: string
    replace?: 'any' | 'alphanumeric' | 'alpha' | 'numeric'
}

export const redactString = (str: string, visibleCount: number, options?: RedactOptions) => {
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
