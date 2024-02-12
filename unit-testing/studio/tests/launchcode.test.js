// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Return 'nonprofit' as key value of organization",function(){
   let keyVal = launchcode.organization;
    expect(keyVal).toBe('nonprofit');
  });
  test("returns 'Launch!' when divisible by 2", function(){
    // let equation = n%2 === 0
    expect(launchcode.launchOutput(2)).toBe('Launch!')
  });

});