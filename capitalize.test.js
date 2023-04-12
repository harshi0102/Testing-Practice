// Import the necessary dependencies and the module to be tested
const { capitalize } = require('./capitalize');

// Test suite for the capitalize(string) function
describe('capitalize', () => {
  // Test case 1: Test that capitalize(string) capitalizes the first character
  test('should capitalize the first character of a string', () => {
    // Arrange: Set up the input
    const input = 'hello';

    // Act: Call the function with the input
    const result = capitalize(input);

    // Assert: Check the output against the expected result
    expect(result).toBe('Hello');
  });

  // Test case 2: Test that capitalize(string) returns an empty string for an empty input
  test('should return an empty string for an empty input', () => {
    // Arrange: Set up the input
    const input = '';

    // Act: Call the function with the input
    const result = capitalize(input);

    // Assert: Check the output against the expected result
    expect(result).toBe('');
  });

  // Test case 3: Test that capitalize(string) handles already capitalized strings correctly
  test('should handle already capitalized strings correctly', () => {
    // Arrange: Set up the input
    const input = 'World';

    // Act: Call the function with the input
    const result = capitalize(input);

    // Assert: Check the output against the expected result
    expect(result).toBe('World');
  });

  // ... Add more test cases as needed
});
