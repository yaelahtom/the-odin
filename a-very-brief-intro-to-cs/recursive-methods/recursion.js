// iterative thinking
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}

console.log("Iterative: ", pow(2, 3)) // 2 x 2 x 2 = 8

// recursive thinking
function bow(x, n) {
  if (n == 1) {
    return x
  } else {
    return x * bow(x, n - 1)
  }
}

console.log("Recursive: ",bow(2, 3)) // 2 x 2 x 2 = 8