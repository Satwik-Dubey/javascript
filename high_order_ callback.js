//  High order function

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(2, 4, function (val) {
  console.log(val);
});

// Dry Run

// add(2, 4, callback) is called → Added to the Call Stack
// add function starts executing:
// Computes result = 6
// Calls cb(result) (callback function) → Callback is added to the Call Stack
// console.log(6) executes → Logs 6 to the console
// Callback function completes → Removed from the Call Stack
// add function completes → Removed from the Call Stack

//  in arrow fn

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(2, 4, (val) => console.log(val));

//  jo fn ek fn ko argument ke tarah accept kar sake vo high order fn hota h
