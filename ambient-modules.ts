// Ambient Modules

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?: any, slashesDenoteHost?: any): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}

declare module "*!text" {   //module that ends with !text
    const content: string;
    export default content;
}

declare module "json!*" {   //module that starts with json!
    const value: any;
    export default value;
}