/**
 * A consumer is a function that consume one parameter.
 */
export interface Consumer<T>{
    (consume: T): void;
}