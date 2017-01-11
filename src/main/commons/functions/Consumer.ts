import {Procedure} from "./Procedure";
/**
 * A consumer is a function that consume one parameter.
 */
export interface Consumer<T> extends Procedure<T, void>{

}