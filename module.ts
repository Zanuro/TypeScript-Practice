import { stringValidator } from "./modules";

export const regExp = /^[a-zA-Z]+$/;

export class validateString implements stringValidator{
    isAccepted(s: string){
        return regExp.test(s);
    }
}
export {validateString as validator};

