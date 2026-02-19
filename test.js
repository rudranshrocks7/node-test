const { add } = require('./index');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error("❌", message);
    console.error(`Expected: ${expected}, Got: ${actual}`);
    process.exit(1);
  }
}

assertEqual(add(2, 2), 4, "2 + 2 should equal 4");
assertEqual(add(5, 3), 8, "5 + 3 should equal 8");

console.log("✅ All tests passed");
process.exit(0);
