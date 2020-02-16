// Modules

// Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.

export interface stringValidator{
    isAccepted(s:string): boolean;
}

export function printHello() { return "Hello";};
