import {BiProcedure} from "./BiProcedure";
/**
 * A bi-consumer is a function that consume two parameters.
 */
export interface BiConsumer<A,B> extends BiProcedure<A,B,void>{
}