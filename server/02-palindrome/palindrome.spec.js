const { it, expect } = require("@jest/globals");
const { isPalindrome } = require('./palindrome');

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

it('true for mom', () => {
  expect(isPalindrome('mom')).toBe(true);
});
it('false for dude', () => {
  expect(isPalindrome('dude')).toBe(false);
});
it('true for mom mom', () => {
  expect(isPalindrome('mom mom')).toBe(true);
});
it('false for dad mom', () => {
  expect(isPalindrome('dad mom')).toBe(false);
});
it('false for whitespace', () => {
  expect(isPalindrome('   ')).toBe(false);
});
it.todo('error for empty string');
it.todo('error for not a string');