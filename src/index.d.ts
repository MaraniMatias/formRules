interface Validation {
    (input : string |number) : string[]|true
}
 interface Rule {
    (config?:any): Validation
}
export const  Rule: Rule
