/**
 * A bi-consumer is a function that consume two parameters.
 */
export interface BiConsumer<A,B>{
    (a: A, b: B): void;
}