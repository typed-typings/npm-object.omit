declare function objectOmit (obj: any, fn: (value: any, key: string, object: any) => boolean): any;
declare function objectOmit (obj: any, keys: string | string[], fn?: (value: any, key: string, object: any) => boolean): any;

export = objectOmit;
