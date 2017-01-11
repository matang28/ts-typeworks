import {Comparator} from "../functions/Comparator";
import {BiConsumer} from "../functions/BiConsumer";
import {Consumer} from "../functions/Consumer";

/**
 * An ADT of a list.
 * Sorry to create this but I really miss the Java List class it is
 * so much intuitive then JavaScript/Typescript arrays. (You know splice and stuff).
 */
export interface List<T> {

    /**
     * Adds new item to the end of the list.
     * @param item the item to be added.
     */
    add(item: T): void;

    /**
     * Add an array of items to the end of the list.
     * @param items the items to be added.
     */
    addAll(items: T[]): void;

    /**
     * @param index the index.
     * @return the item at the provided index.
     */
    get(index: number): T;

    /**
     * Removes the provided item
     * @param item
     */
    removeItem(item: T): void;

    /**
     * Remove all items in the provided array.
     * @param items
     */
    removeAll(items: T[]): void;

    /**
     * Removes the item in the provided index.
     * @param index
     */
    remove(index: number): void;

    /**
     * Checks if the list contains the provided item.
     * @param item
     */
    contains(item: T): boolean;

    /**
     * Checks if the list contains an item with a custom equality checker.
     * @param item the item to search for
     * @param comparator the function that compares the items.
     */
    containsSpecial(item: T, comparator: Comparator<T>): boolean;

    /**
     * Clears the list.
     */
    clear(): void;

    /**
     * Gets the size of the list.
     */
    size(): number;

    /**
     * Converts the list to array.
     */
    toArray() : T[];

    /**
     * An lambda to run on each item in the list.
     * @param consumer a function consumes each item.
     */
    forEach(consumer: BiConsumer<T,number>) : void;

    /**
     * An lambda to run on each item in the list.
     * @param biConsumer a function consumes each item and its index in the list.
     */
    forEachWithIndex(consumer: Consumer<T>) : void;
}