import {BiProcedure} from "./BiProcedure";
import {ComparisonResult} from "../enums/ComparisonResult";

/**
 * An interface to a function that compares to generic items of the same type.
 */
export interface Comparator <IN> extends BiProcedure<IN,IN,ComparisonResult>{
}

