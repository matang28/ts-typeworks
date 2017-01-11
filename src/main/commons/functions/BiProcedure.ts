/**
 * An interface of a bi-function.
 */
export interface BiProcedure<A,B,OUT>{
    (a: A, b: B): OUT;
}