
export class ValidationUtils{

    /**
     * Check if an item is null or undefined.
     * @param object the object to be checked
     * @return {boolean} true if the object is null, false otherwise.
     */
    public static isNull(object: any){

        if(null==object){
            return true;
        }

        return undefined == object;
    }

    /**
     * Check if an item is not null or not undefined.
     * @param object the object to be checked
     * @return {boolean} true if the object is not null, false otherwise.
     */
    public static notNull(object: any){
        return !(ValidationUtils.isNull(object));
    }

    /**
     * Checks if a string is empty (e.g '' or null)
     * @param object the string to be checked.
     * @return {boolean} true if its empty, false otherwise.
     */
    public static isEmptyString(object: string){
        return ValidationUtils.isNull(object) || object=='';
    }

    /**
     * Checks if a string is not empty (e.g not '' or not null)
     * @param object the string to be checked.
     * @return {boolean} true if its not empty, false otherwise.
     */
    public static notEmptyString(object: string){
        return !ValidationUtils.isEmptyString(object);
    }

}