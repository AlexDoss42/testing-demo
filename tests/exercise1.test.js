const exercise = require('../exercise1');

describe('fizzBuzz', () => {
//Test for throwing Error
  it('should throw an exception if the type of the input is not a number', () => {
    const notNums = ['a', null, undefined, NaN, false, true, 1.1]
    notNums.forEach(nN => {
      expect(() => { exercise.fizzBuzz(nN) }).toThrow();
    });
  });
//Test for Fizzbuzz
  it('should return FizzBuzz if the number is divisible by 3 AND 5', () => {
    const fifteens = [15, 30, 45, 90, 150];
    fifteens.forEach(ft => {
      expect(exercise.fizzBuzz(ft).toBe('FizzBuzz'));
    });
  });
//Test for Fizz
  it('should return Fizz if the number is divisible by 3', () => {
    const threes = [3, 6, 9, 12, 297];
    threes.forEach(t => {
      expect(exercise.fizzBuzz(t).toBe('Fizz'));
    });
  });
//Test for Buzz
  it('should return Buzz if the number is divisible by 5', () => {
    const fives = [5, 10, 20, 25, 500];
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