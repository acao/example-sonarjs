function isGreaterThan(x, y) {
  if (x > y) {
    return true;
  }
  return false;
}

function untilIsGreater(x, y) {
  let n = x;
  do {
    n += 1;
  } while (!isGreaterThan(n, y));
  return isGreaterThan(n, y);
}

module.exports = { isGreaterThan, untilIsGreater };
