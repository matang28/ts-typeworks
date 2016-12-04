/**
 * Created by Matan on 04-Dec-16.
 */

import {suite} from "mocha-typescript";
import {test} from "mocha-typescript";
import {expect, assert} from "chai";
import {LoopUtils} from "../../main/commons/utils/LoopUtils";

@suite("LoopUtilsTest")
class LoopUtilsTest{

    @test("should fill an array with ten items")
    public assert_that_until_works() : void{

        //Arrange:
        var limit: number = 10;
        var arr: number[] = [];

        //Act:
        LoopUtils.until(limit, (i)=>{
            arr.push(i);
        });

        //Assert:
        for(let i=0; i<limit; i++){
            assert.equal(arr[i],i);
        }

    }

    @test("should loop trough every item and provide the index")
    public assert_that_for_each_works() : void{

        //Arrange
        var arr: number[] = [1,2,3,4,5];

        //Act & Assert
        LoopUtils.forEach(arr, (item, index)=>{
            assert.equal(arr[index], item);
        });

    }

}