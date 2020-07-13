const exercise = require('../exercise1');

describe('fizzBuzz', () => {
//Test for throwing Error
  it('should throw an exception if the type of the input is not a number', () => {

  });
//Test for Fizzbuzz
  it('should return FizzBuzz if the number is divisible by 3 AND 5', () => {

  });
//Test for Fizz
  it('should return Fizz if the number is divisible by 3', () => {

  });
//Test for Buzz
  it('should return Buzz if the number is divisible by 5', () => {
    const fives = [5, 10, 20, 25, 35];
    fives.forEach(f => {
      expect(exercise.fizzBuzz(f).toBe('Buzz'));
    });
  });
//Test for number
  it('should return the number if it is not divisible by 3 or 5', () => {
    const nums = [1, 2, 4, 7, 8];
    nums.forEach(n => {
      expect(exercise.fizzBuzz(n).toBe(n));
    });
  });
});