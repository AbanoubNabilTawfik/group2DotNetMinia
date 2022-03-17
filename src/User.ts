import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class User
{
    constructor(
        public name:string,
        public email:string,
        public phone:string,
        public topic:string,
        public chkOffers:boolean
    ){

    }
}