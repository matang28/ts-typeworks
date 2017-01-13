import "reflect-metadata";
import {List} from "../../commons/structures/List";
import {ArrayList} from "../../commons/structures/ArrayList";

export class ReflectionAPI{

    public static getMetadataKeys(object: any = {}): List<any>{

        let list: ArrayList<any> = new ArrayList<any>();

        list.addAll(Reflect.getMetadataKeys(object));

        return list;
    }

    public static defineMetadata(key: string, value: any, object: any = {}) : void{
        Reflect.defineMetadata(key, value, object);
    }

    public static getOwnMetadata(key: string, object: any = {}): any{
        return Reflect.getOwnMetadata(key, object);
    }

    public static getMetadata(key: string, object: any = {}): any{
        return Reflect.getMetadata(key, object);
    }

    public static hasOwnMetadata(key: string, object: any = {}): boolean{
        return Reflect.hasOwnMetadata(key, object);
    }

    public static hasMetadata(key: string, object: any = {}) : boolean{
        return Reflect.hasMetadata(key, object);
    }

    public static deleteMetadata(key: string, object: any = {}): void{
        Reflect.deleteMetadata(key, object);
    }

}