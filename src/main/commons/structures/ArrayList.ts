import {ValidationUtils} from "../utils/ValidationUtils";
import {Comparator} from "../functions/Comparator";
import {List} from "./List";
import {ComparisonResult} from "../enums/ComparisonResult";
import {BiConsumer} from "../functions/BiConsumer";
import {Consumer} from "../functions/Consumer";

export class ArrayList<T> implements List<T>{

    private array: T[];

    constructor(){
        this.array = [];
    }

    add(item:T):void {
        this.array.push(item);
    }

    addAll(items:T[]):void {
        items.forEach((t)=>this.add(t));
    }

    get(index:number):T {

        if(index>=0){
            if(index<this.size()){
                return this.array[index];
            }
        }

        throw "Index outside of array bounds";
    }

    removeItem(item:T):void {
        for(let i: number = 0;
            i<this.size();
            i++){

            if(this.array[i]===item) {
                this.remove(i);
                break;
            }
        }

    }

    removeAll(items:T[]) : void {
        if(ValidationUtils.notNull(items)){
            items.forEach((item)=>this.removeItem(item));
        }
    }

    remove(index:number): void {
        this.array.splice(index, 1);
    }

    contains(item:T):boolean {
        for(let i: number = 0;
            i<this.size();
            i++){

            if(this.array[i]===item) {
                return true;
            }
        }

        return false;
    }

    containsSpecial(item:T, comparator:Comparator<T>):boolean {
        for(let i: number =0;
        i<this.size();
        i++){
            if(ComparisonResult.EQUALS==comparator(item, this.array[i]))
                return true;
        }

        return false;
    }

    clear():void {
        this.array = [];
    }

    size():number {
        return this.array.length;
    }

    toArray(): T[] {
        return this.array;
    }

    forEachWithIndex(consumer: BiConsumer<T, number>): void {
        //Get the size of the list:
        let size:number = this.size();

        //Go through each item in the list:
        for (let i=0;i<size;i++){
            //And apply the consumer on it:
            consumer(this.get(i), i);
        }
    }

    forEach(consumer: Consumer<T>): void {
        //Get the size of the list:
        let size:number = this.size();

        //Go through each item in the list:
        for (let i=0;i<size;i++){
            //And apply the consumer on it:
            consumer(this.get(i));
        }
    }
}