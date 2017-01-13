/**
 * Created by Matan on 04-Dec-16.
 */

import {suite} from "mocha-typescript";
import {test} from "mocha-typescript";
import {expect, assert} from "chai";
import {LoopUtils} from "../../../main/commons/utils/LoopUtils";
import {ReflectionAPI} from "../../../main/core/reflection/ReflectionAPI";
import {ValidationUtils} from "../../../main/commons/utils/ValidationUtils";
import {List} from "../../../main/commons/structures/List";

@suite("ReflectionAPITest")
class ReflectionAPITest{

    @test("Should not contain metadata")
    public assert_metadata_empty() : void{

        //Act
        let keys: List<any> = ReflectionAPI.getMetadataKeys(DummyClass);

        //Assert
        assert.equal(0, keys.size());
    }

    @test("should contain metadata after one is defined")
    public assert_define_metadata() : void{

        //Arrange
        let metaKey: string = 'key';
        ReflectionAPI.defineMetadata(metaKey, '', DummyClass);

        //Act
        let keys: List<any> = ReflectionAPI.getMetadataKeys(DummyClass);

        //Assert
        assert.equal(1, keys.size());
        assert.equal(metaKey, keys.get(0));
    }

    @test("should get the metadata value")
    public assert_get_metadata() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let result = ReflectionAPI.getMetadata(metaKey, DummyClass);

        //Assert
        assert.equal(result, metaValue);
    }

    @test("should get the metadata value defined on super class")
    public assert_get_metadata_derived_class() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let result = ReflectionAPI.getMetadata(metaKey, DummyDerivedClass);

        //Assert
        assert.equal(result, metaValue);
    }

    @test("should not get metadata defined on super class (Using Own)")
    public assert_get_own_metadata_class() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let result = ReflectionAPI.getOwnMetadata(metaKey, DummyDerivedClass);

        //Assert
        assert.isTrue(ValidationUtils.isNull(result));
    }

    @test("should find metadata on class")
    public assert_has_metadata() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let result = ReflectionAPI.hasMetadata(metaKey, DummyDerivedClass);

        //Assert
        assert.isTrue(result);
    }

    @test("shouldn't find metadata on class (Using Own)")
    public assert_has_own_metadata() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let result = ReflectionAPI.hasOwnMetadata(metaKey, DummyDerivedClass);

        //Assert
        assert.isFalse(result);
    }

    @test("should'nt find metadata where key not found")
    public assert_that_key_does_not_exists() : void{

        //Arrange
        let key: string = 'not-exists';

        //Act
        let result: boolean = ReflectionAPI.hasMetadata(key, DummyClass);
        let resultOwn: boolean = ReflectionAPI.hasOwnMetadata(key, DummyClass);

        //Assert
        assert.isFalse(result);
        assert.isFalse(resultOwn);
    }

    @test("should delete metadata from class")
    public assert_delete_metadata() : void{

        //Arrange
        let metaKey: string = 'key';
        let metaValue: number = 1988;
        ReflectionAPI.defineMetadata(metaKey, metaValue, DummyClass);

        //Act
        let resultBefore: boolean = ReflectionAPI.hasMetadata(metaKey, DummyClass);
        ReflectionAPI.deleteMetadata(metaKey, DummyClass);
        let resultAfter: boolean = ReflectionAPI.hasMetadata(metaKey, DummyClass);

        //Assert
        assert.isTrue(resultBefore);
        assert.isFalse(resultAfter);
    }

}

class DummyClass {

    private privateProperty: string;
    protected protectedProperty: string;
    public  publicProperty: string;

    constructor(privateProperty: string, protectedProperty: string, publicProperty: string) {
        this.privateProperty = privateProperty;
        this.protectedProperty = protectedProperty;
        this.publicProperty = publicProperty;
    }

    private privateMethod(): void{

    }

    protected protectedMethod(): void{

    }

    public publicMethod(): void{

    }

    static staticMethod(): void{

    }
}

class DummyDerivedClass extends DummyClass{
    allNewProperty: string;

    constructor(privateProperty: string, protectedProperty: string, publicProperty: string, allNewProperty: string) {
        super(privateProperty, protectedProperty, publicProperty);
        this.allNewProperty = allNewProperty;
    }
}