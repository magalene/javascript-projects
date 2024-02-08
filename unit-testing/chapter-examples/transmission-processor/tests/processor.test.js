const processor = require('../processor.js');

describe("transmission processor", function() {
  test("takes a string returns an object", () => {
      let result = processor('9701::<489584872710>');
      expect(typeof result).toBe("object");
  });
   //  TODO: put tests here
  test("returns -1 if '::' not found", function(){
    let result = processor('9701<489584872710>');
    expect(result).toBe(-1);
  });
  test("returns id in object", function(){
    let result = processor('9701::<489584872710>');
    expect(result.id).not.toBeUndefined();
  });
  test("converts id to a number", function(){
    let result = processor('9701::<489584872710>');
    expect(result.id).toBe(9701);
  });
  test("returned object should have rawData",function(){
    let result = processor('9701::<489584872710>');
    expect(result.rawData).not.toBeUndefined();
  });
  test("returns -1 if rawData does not start with < and end with >", function(){
    let result = processor('9701::489584872710>');
    expect(result.rawData).toBe(-1)
  });
  test("returns -1 if rawData does not start with < and end with >", function(){
    let result = processor('9701::<489584872710');
    expect(result.rawData).toBe(-1)
 });
 test("returns -1 if rawData does not start with < and end with >", function(){
  let result = processor('9701::489584872710');
  expect(result.rawData).toBe(-1)
 });
 test("returns -1 if rawData does not start with < and end with >", function(){
  let result = processor('9701::489<584872710');
  expect(result.rawData).toBe(-1)
 });
 test("returns -1 if rawData does not start with < and end with >", function(){
  let result = processor('9701::4895848727>10');
  expect(result.rawData).toBe(-1)
 });
 test("returns -1 if rawData does not start with < and end with >", function(){
  let result = processor('9701::<4895848<72710>');
  expect(result.rawData).toBe(-1)
 });
 test('return -1 if more that one "::" is found in transmission',function(){
  let result = processor('9701::::<489584872710>');
  expect(result).toBe(-1);
 });
 test(" return -1 if id is not a number", function(){
  let result = processor('a::<489584872710>');
  expect(reult.id).toBe(-1);
 });
})