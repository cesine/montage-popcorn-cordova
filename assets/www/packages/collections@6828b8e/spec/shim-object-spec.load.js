montageDefine("6828b8e","spec/shim-object-spec",{dependencies:["../shim","../dict"],factory:function(e,t,n){"use strict";e("../shim");var r=e("../dict");describe("Object",function(){it("should have no enumerable properties",function(){expect(Object.keys(Object.prototype)).toEqual([])}),describe("empty",function(){it("should own no properties",function(){expect(Object.getOwnPropertyNames(Object.empty)).toEqual([]),expect(Object.keys(Object.empty)).toEqual([])}),it("should have no prototype",function(){expect(Object.getPrototypeOf(Object.empty)).toBe(null)}),it("should be immutable",function(){"strict mode";expect(function(){Object.empty.a=10;if(Object.empty.a!==10)throw new Error("Unchanged")}).toThrow()})}),describe("isObject",function(){[["null is not an object",null,!1],["numbers are not objects",1,!1],["undefined is not an object",undefined,!1],["arrays are objects",[],!0],["object literals are objects",{},!0],["pure objects (null prototype) are",Object.create(null),!0]].forEach(function(e){it("should recognize that "+e[0],function(){expect(Object.isObject(e[1])).toEqual(e[2])})})}),describe("getValueOf",function(){var e=Object.create({valueOf:function(){return 10}}),t={valueOf:10},n=[[10,10,"number"],[t,t,"object (identical, with misleading owned property)"],[new Number(20),20,"boxed number"],[e,10,"fake number"]];n.forEach(function(e){it(e[2],function(){expect(Object.getValueOf(e[0])).toBe(e[1])})})}),describe("owns",function(){it("should recognized an owned property",function(){expect(Object.owns({a:0},"a")).toEqual(!0)}),it("should distinguish an inherited property",function(){expect(Object.owns(Object.prototype,"toString")).toEqual(!0)})}),describe("has",function(){it("should recognized an owned property",function(){expect(Object.has({toString:!0},"toString")).toEqual(!0)}),it("should recognize an inherited propertry",function(){var e={a:10},t=Object.create(e);expect(Object.has(t,"a")).toEqual(!0)}),it("should distinguish a property from the Object prototype",function(){expect(Object.has({},"toString")).toEqual(!1)}),it("should recognize a property on a null prototype chain",function(){var e=Object.create(null);e.a=10;var t=Object.create(e);expect(Object.has(t,"a")).toEqual(!0)}),it("should recognize a falsy property",function(){expect(Object.has({a:0},"a")).toEqual(!0)}),it("should throw an error if the first argument is not an object",function(){expect(function(){Object.has(10,10)}).toThrow()}),it("should delegate to a prototype method",function(){var e=Object.create(Object.prototype,{has:{value:function(e){return e==="a"}}}),t=Object.create(e);expect(Object.has(t,"a")).toEqual(!0),expect(Object.has(t,"toString")).toEqual(!1)}),it("should not delegate to an owned 'has' method",function(){expect(Object.has({has:function(){}},"has")).toEqual(!0)})}),describe("get",function(){it("should get an owned property from an object literal",function(){expect(Object.get({a:10},"a")).toEqual(10)}),it("should not get a property from the Object prototype on a literal",function(){expect(Object.get({},"toString")).toEqual(undefined)}),it("should delegate to a prototype method",function(){var e=Object.create(Object.prototype,{get:{value:function(e){if(e==="a")return 10}}}),t=Object.create(e);expect(Object.get(t,"a")).toEqual(10)}),it("should not delegate to an owned 'get' method",function(){expect(Object.get({get:10},"get")).toEqual(10)}),it("should fallback to a default argument if defined",function(){expect(Object.get({},"toString",10)).toEqual(10)})}),describe("set",function(){it("should set a property",function(){var e={};Object.set(e,"set",10),expect(Object.get(e,"set")).toEqual(10)}),it("should not confuse a property method and content",function(){var e={};Object.set(e,"set",function(){}),Object.set(e,"set",10),expect(Object.get(e,"set")).toEqual(10)}),it("should delegate to a 'set' method",function(){var e=jasmine.createSpy(),t=Object.create(Object.prototype,{set:{value:e}}),n=Object.create(t);Object.set(n,"a",10),expect(e.argsForCall).toEqual([["a",10]])})}),describe("forEach",function(){it("should iterate the owned properties of an object",function(){var e=jasmine.createSpy(),t={a:10,b:20,c:30};Object.forEach(t,e),expect(e.argsForCall).toEqual([[10,"a",t],[20,"b",t],[30,"c",t]])}),it("should pass a thisp into the callback",function(){var e={};Object.forEach([1],function(t,n,r){expect(this).toBe(e),expect(t).toEqual(1),expect(n).toEqual("0"),expect(r).toEqual([1]),e=null},e),expect(e).toEqual(null)})}),describe("map",function(){it("should iterate the owned properties of an object with a context thisp",function(){var e={a:10,b:20},t=Object.map(e,function(t,n,r){return expect(r).toBe(e),n+this+t},": ").join(", ");expect(t).toEqual("a: 10, b: 20")})}),describe("values",function(){it("should produce the values for owned properties",function(){expect(Object.values({b:10,a:20})).toEqual([10,20])})}),describe("concat",function(){it("should merge objects into a new object",function(){expect(Object.concat({a:10},{b:20})).toEqual({a:10,b:20})}),it("should prioritize latter objects",function(){expect(Object.concat({a:10},{a:20})).toEqual({a:20})}),it("should delegate to arrays",function(){expect(Object.concat({a:10,b:20},[["c",30]])).toEqual({a:10,b:20,c:30})}),it("should delegate to maps",function(){expect(Object.concat({a:10,b:20},r({c:30}))).toEqual({a:10,b:20,c:30})})}),describe("is",function(){var e={"positive zero":0,"negative zero":0,"positive infinity":1/0,"negative infinity":-1/0,one:1,two:2,NaN:NaN,objects:{},"other objects":{}};Object.forEach(e,function(t,n){Object.forEach(e,function(e,r){if(n<r)return;var i=n===r?"recognizes":"distinguishes";it(i+" "+n+" and "+r,function(){expect(Object.is(t,e)).toEqual(n===r)})})})}),describe("equals",function(){var e=Object.create({valueOf:function(){return 10}}),t=Object.create({value:10,clone:function(){return this},equals:function(e){return e===10||typeof e=="object"&&e.value===10}}),n=Object.create(Object.prototype,{}),r=Object.create(n),i=[{"unboxed number":10,"boxed number":new Number(10),"faked number":e,equatable:t},{array:[10],"other array":[10]},{"nested array":[[10,20],[30,40]]},{object:{a:10},"other object":{a:10}},{now:new Date}];i.forEach(function(e){Object.forEach(e,function(t,n){e["cloned "+n]=Object.clone(t)}),Object.forEach(e,function(t,n){Object.forEach(e,function(e,r){it(n+" equals "+r,function(){expect(Object.equals(t,e)).toBe(!0)})})})}),i.forEach(function(e,t){i.forEach(function(n,r){if(t>=r)return;Object.forEach(e,function(e,t){Object.forEach(n,function(n,r){it(t+" not equals "+r,function(){expect(Object.equals(e,n)).toBe(!1)})})})})})}),describe("compare",function(){var e=Object.create({valueOf:function(){return 1}}),t=Object.create({create:function(e){var t=Object.create(this);return t._compare=e,t},compare:function(e){return this._compare(e)}}),n=new Date,r=[[0,0,0],[0,1,-1],[1,0,1],[[10],[10],0],[[10],[20],-10],[[100,10],[100,0],10],["a","b",-1],[n,n,0,"now to itself"],[t.create(function(){return-1}),null,-1,"comparable"],[null,t.create(function(){return 1}),-1,"opposite comparable"],[{b:10},{a:0},0,"incomparable to another"],[new Number(-10),20,-30,"boxed number to real number"],[e,0,1,"fake number to real number"]];r.forEach(function(e){it(e[3]||JSON.stringify(e[0])+" to "+JSON.stringify(e[1]),function(){expect(Object.compare(e[0],e[1])).toEqual(e[2])})})}),describe("clone",function(){var e={object:{a:10},array:[1,2,3],string:"hello",number:10,nestedObject:{a:{a1:10,a2:20},b:{b1:"a",b2:"c"}},nestedArray:[[1,2,3],[4,5,6]],mixedObject:{array:[1,3,4],object:{a:10,b:20}},mixedArray:[[],{a:10,b:20}],arrayWithHoles:[],clonable:Object.create({clone:function(){return this}})};e.cycle=e,e.arrayWithHoles[10]=10,e.typedObject=Object.create(null),e.typedObject.a=10,e.typedObject.b=10,Object.forEach(e,function(e,t){it(t+" cloned equals self",function(){expect(Object.clone(e)).toEqual(e)})}),it("should clone zero levels of depth",function(){var t=Object.clone(e,0);expect(t).toBe(e)}),it("should clone object at one level of depth",function(){var t=Object.clone(e,1);expect(t).toEqual(e),expect(t).toNotBe(e)}),it("should clone object at two levels of depth",function(){var t=Object.clone(e,2);expect(t).toEqual(e),expect(t.object).toNotBe(e.object),expect(t.object).toEqual(e.object),expect(t.nestedObject.a).toBe(e.nestedObject.a)}),it("should clone array at two levels of depth",function(){var t=Object.clone(e,2);expect(t).toEqual(e),expect(t.array).toNotBe(e.array),expect(t.array).toEqual(e.array)}),it("should clone identical values at least once",function(){var t=Object.clone(e);expect(t.cycle).toNotBe(e.cycle)}),it("should clone identical values only once",function(){var t=Object.clone(e);expect(t.cycle).toBe(t)}),it("should clone clonable",function(){var t=Object.clone(e);expect(t.clonable).toBe(e.clonable)})}),describe("clone",function(){var e={a:{a1:10,a2:20},b:{b1:10,b2:20}};it("should clone zero levels",function(){expect(Object.clone(e,0)).toBe(e)}),it("should clone one level",function(){var t=Object.clone(e,1);expect(t).toEqual(e),expect(t).toNotBe(e),expect(t.a).toBe(e.a)}),it("should clone two levels",function(){var t=Object.clone(e,2);expect(t).toEqual(e),expect(t).toNotBe(e),expect(t.a).toNotBe(e.a)}),it("should clone with reference cycles",function(){var e={};e.cycle=e;var t=Object.clone(e);expect(t).toEqual(e),expect(t).toNotBe(e),expect(t.cycle).toBe(t)})}),describe("clear",function(){it("should clear all owned properties of the object",function(){expect(Object.keys(Object.clear({a:10}))).toEqual([])})})})}})