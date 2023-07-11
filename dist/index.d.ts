export interface RedactOptions {
    replaceFrom?: 'start' | 'end';
    replaceWith?: string;
    replace?: 'any' | 'alphanumeric' | 'alpha' | 'numeric';
}
export declare const redactString: (str: string, visibleCount: number, options?: RedactOptions) => string;
export default redactString;
