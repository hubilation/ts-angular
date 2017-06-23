//class Person {
//    parents: Person[];
//    grandParents: Array<Person>;
//    constructor(public name?: string) {
//        this.grandParents = new Array<Person>();
//        this.parents = [];
//    }
//}

//var p = new Person();
//var mom = new Person();

//p.parents.push(mom);

//class Result<T> implements IResult<T>{
//    success: boolean;
//    result: T;

//    constructor() {
//        this.success = true;
//    }
//}

//interface IResult<T> {
//    success: boolean;
//    result: T;
//}

//var result = new Result<Person>();

//class StorageProcessor {
//    getPersonResult(name: string): Result<Person> {
//        var returnValue = new Result<Person>();
//        returnValue.result = new Person();
//        returnValue.result.name = name;
//        return returnValue;
//    }

//    getPersonBasedOnInput<T extends Person, V extends Person>(input: T): IResult<V> {
//        return null;
//    }
//}

//var s = new StorageProcessor();
//alert(JSON.stringify(s.getPersonResult("John")));
