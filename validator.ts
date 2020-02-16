import { validator } from "./module";

let ex = new validator();
console.log(ex.isAccepted("Validate"));

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