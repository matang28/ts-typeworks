import {Consumer} from "../functions/Consumer";
import {BiConsumer} from "../functions/BiConsumer";

/**
 * A collection of static method to simplify looping.
 */
export class LoopUtils{

    /**
     * This method will count from zero until a given limit.
     * The index will be provided by the consumer function.
     * @param limit the number to count to.
     * @param consumer a consumer that provides the current iteration index.
     */
    public static until (limit: number, consumer: Consumer<number>) : void{
        for(let i:number = 0;
            i<limit;
            i++){
            consumer(i);
        }
    }

    /**
     * An improved for each method that iterate through array and provide the index of the iteration
     * besides the current item.
     * @param array the array to iterate on.
     * @param biConsumer a bi-consumer function that provide the current item and the current iteration index.
     */
    public static forEach <A> (array: A[], biConsumer: BiConsumer<A,number>): void{
        let i:number = 0;
        array.forEach((item)=>{
            biConsumer(item,i);
            i++;
        });
    }
}