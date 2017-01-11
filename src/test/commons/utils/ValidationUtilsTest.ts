/**
 * Created by Matan on 04-Dec-16.
 */

import {suite} from "mocha-typescript";
import {test} from "mocha-typescript";
import {expect, assert} from "chai";
import {LoopUtils} from "../../../main/commons/utils/LoopUtils";
import {ValidationUtils} from "../../../main/commons/utils/ValidationUtils";

@suite("ValidationUtilsTest")
class ValidationUtilsTest{

    @test("Should check isNull() on null object")
    public assert_isNull_null() : void{

        //Arrange:
        let subject = null;

        //Act:
        let result: boolean = ValidationUtils.isNull(subject);
        let resultNot: boolean = ValidationUtils.notNull(subject);

        //Assert:
        assert.isTrue(result);
        assert.isTrue(result!=resultNot);

    }

    @test("Should check isNull() on undefined object")
    public assert_isNull_undefined() : void{

        //Arrange:
        let subject = undefined;

        //Act:
        let result: boolean = ValidationUtils.isNull(subject);
        let resultNot: boolean = ValidationUtils.notNull(subject);

        //Assert:
        assert.isTrue(result);
        assert.isTrue(result!=resultNot);

    }

    @test("Should check isNull() on defined object")
    public assert_isNull_defined() : void{

        //Arrange:
        let subject = 1;

        //Act:
        let result: boolean = ValidationUtils.isNull(subject);
        let resultNot: boolean = ValidationUtils.notNull(subject);

        //Assert:
        assert.isFalse(result);
        assert.isTrue(result!=resultNot);

    }

    @test("Should validate empty string on null")
    public assert_validate_empty_string_null() : void{

        //Arrange
        let subject: string = null;

        //Act
        let result: boolean = ValidationUtils.isEmptyString(subject);
        let resultNot: boolean = ValidationUtils.notEmptyString(subject);

        //Assert
        assert.isTrue(result);
        assert.isTrue(result!=resultNot);
    }

    @test("Should validate empty string on undefined")
    public assert_validate_empty_string_undefined() : void{

        //Arrange
        let subject: string = undefined;

        //Act
        let result: boolean = ValidationUtils.isEmptyString(subject);
        let resultNot: boolean = ValidationUtils.notEmptyString(subject);

        //Assert
        assert.isTrue(result);
        assert.isTrue(result!=resultNot);
    }

    @test("Should validate empty string on defined")
    public assert_validate_empty_string_defined() : void{

        //Arrange
        let subject: string = '1';

        //Act
        let result: boolean = ValidationUtils.isEmptyString(subject);
        let resultNot: boolean = ValidationUtils.notEmptyString(subject);

        //Assert
        assert.isFalse(result);
        assert.isTrue(result!=resultNot);
    }
}