/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * This test is actually testing the [[Delete]] internal method (8.12.8). Since the
 * language provides no way to directly exercise [[Delete]], the tests are placed here.
 *
 * @path ch11/11.4/11.4.1/11.4.1-4.a-12.js
 * @description delete operator returns false when deleting a property(length)
 */


function testcase() {

  var a = [1,2,3]
  a.x = 10;
  var d = delete a.length
  if(d === false && a.length === 3)
    return true;
 }
runTestCase(testcase);
