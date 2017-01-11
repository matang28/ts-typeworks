import {suite} from "mocha-typescript";
import {test} from "mocha-typescript";
import {expect, assert} from "chai";
import {ArrayList} from "../../../main/commons/structures/ArrayList";
import {List} from "../../../main/commons/structures/List";
import {LoopUtils} from "../../../main/commons/utils/LoopUtils";
import {ComparisonResult} from "../../../main/commons/enums/ComparisonResult";

@suite("Array Lists Tests")
class ArrayListTest{

    @test("should create empty list")
    public assert_that_list_is_empty() : void{

        //Arrange
        var list: List<number> = new ArrayList<number>();

        //Act
        var size: number = list.size();

        //Assert
        assert.equal(0, size);
    }

    @test("should add and get items to the list")
    public assert_list_add_get() : void{

        //Arrange
        let expected: number = 10;
        let list: List<number> = new ArrayList<number>();

        //Act
        list.add(expected);
        let result: number = list.get(0);

        //Assert
        assert.equal(expected, result);
    }

    @test("should throw exception when index is out of bounds")
    public assert_index_out_of_bound() : void{

        let isThrown: boolean = false;

        //Arrange
        let expected: number = 10;
        let list: List<number> = new ArrayList<number>();

        //Act
        list.add(expected);
        try{
            let result: number = list.get(1);
        }
        catch (ex){
            isThrown = true;
        }

        //Assert
        assert.isTrue(isThrown);
    }

    @test("should add an array of items")
    public assert_add_all() : void{

        //Arrange
        let input: number[] = [0,1,2];
        let list: List<number> = new ArrayList<number>();

        //Act
        list.addAll(input);

        //Assert
        LoopUtils.forEachListItem(list,(item, index)=>{
            assert.equal(item, list.get(index));
        })
    }

    @test("should remove primitive item from the list")
    public assert_primitive_item_remove() : void{

        //Arrange
        let input: number[] = [1,2,3];
        let list: List<number> = new ArrayList<number>();

        let itemIndexToRemove = 1;

        list.addAll(input);

        //Act
        list.removeItem(input[itemIndexToRemove]);

        //Assert
        LoopUtils.forEachListItem(list,(item, index)=>{
            assert.notEqual(item, input[itemIndexToRemove]);
        })
    }

    @test("should remove custom item from the list")
    public assert_custom_item_remove_match() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let itemIndexToRemove = 1;
        let itemToRemove: DummyItem = list.get(itemIndexToRemove);

        //Act
        list.removeItem(itemToRemove);

        //Assert

        LoopUtils.forEachListItem(list,(item, index)=>{

            assert.notEqual(item.id, itemToRemove.id);
            assert.notEqual(item.name, itemToRemove.name);
        })
    }

    @test("shouldn't remove custom item from the list with different class values")
    public assert_custom_item_remove_no_match1() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let itemToRemove: DummyItem = new DummyItem(-823, 'Matan');
        let sizeBefore = list.size();

        //Act
        list.removeItem(itemToRemove);

        //Assert
        assert.equal(sizeBefore, list.size());
    }

    @test("shouldn't remove custom item from the list, with same values but different instance")
    public assert_custom_item_remove_no_match2() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let itemToRemove: DummyItem = new DummyItem(list.get(0).id, list.get(0).name);
        let sizeBefore = list.size();

        //Act
        list.removeItem(itemToRemove);

        //Assert
        assert.equal(sizeBefore, list.size());
    }

    @test("Should contain an item")
    public assert_contains_should_pass() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let item: DummyItem = list.get(0);

        //Act
        let result: boolean = list.contains(item);

        //Assert
        assert.isTrue(result);
    }

    @test("Shouldn't contain an item with different instance")
    public assert_contains_should_fail() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let item: DummyItem = new DummyItem(list.get(0).id, list.get(0).name);

        //Act
        let result: boolean = list.contains(item);

        //Assert
        assert.isFalse(result);
    }

    @test("should contain in list (primitive)")
    public assert_contains_primitive() : void{

        //Arrange
        let input: number[] = [1,2,3];
        let list: List<number> = new ArrayList<number>();

        let item = 1;

        list.addAll(input);

        //Act
        let result: boolean = list.contains(input[item]);

        //Assert
        assert.isTrue(result);
    }

    @test("Should contain an item with comparator")
    public assert_contains_comparator_should_pass() : void{

        //Arrange
        let list: List<DummyItem> = DummyItem.generate(10);

        let item: DummyItem = list.get(0);

        //Act
        let result: boolean = list.containsSpecial(item, (l,r): ComparisonResult=>{
            if(l.id===r.id)
                return ComparisonResult.EQUALS;

            return ComparisonResult.NOT_EQUALS;
        });

        //Assert
        assert.isTrue(result);
    }

    @test("Shouldn't contain an item with comparator")
    public assert_contains_comparator_should_fail() : void{

        //Arrange
        let count: number = 10;
        let list: List<DummyItem> = DummyItem.generate(count);

        //Act
        let result: boolean = list.containsSpecial(
            new DummyItem(list.get(count-1).id+1, "Matan"),
            (l,r): ComparisonResult=>{
                if(l.id===r.id)
                    return ComparisonResult.EQUALS;

                return ComparisonResult.NOT_EQUALS;
        });

        //Assert
        assert.isFalse(result);
    }
}

/**
 Helper classes
 **/

class DummyItem {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public static generate(count: number): List<DummyItem>{

        let out: ArrayList<DummyItem> =  new ArrayList<DummyItem>();

        for (let i=0;i<count;i++){
            out.add(new DummyItem(i, `User num ${i}`));
        }

        return out;
    }
}