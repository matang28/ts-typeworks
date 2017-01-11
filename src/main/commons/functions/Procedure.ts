/**
 * An interface of a function.
 */
export interface Procedure<IN, OUT>{
    (consume: IN): OUT;
}