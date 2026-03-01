// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

// function fetchWithTimeout(url, ms, callback) {
//   let isfinished = false;

//   const timer = setTimeout(function () {
//     if (!isfinished) {
//       isfinished = true;
//       callback(new Error("Request Timed Out"));
//     }
//   }, ms);

//   fetch(url)
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (data) {
//       if (isfinished) {
//         isfinished = true;
//         clearTimeout(timer);
//         callback(null, data);
//       }
//     })
//     .catch(function (err) {
//       if (isfinished) {
//         isfinished = true;
//         clearTimeout(timer);
//         callback(err);
//       }
//     });
// }

// fetchWithTimeout(
//   fetch("https://jsonplaceholder.typicode.com/todos/1"),
//   5000,
//   function (err, data) {
//     if (err) {
//       console.log("Error: ", err.message);
//     } else {
//       console.log("success: ", data);
//     }
//   },
// );

function fetchData(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
console.log("hello");
fetchData(3000)
  .then((resolve) => console.log(resolve))
  .catch((err) => console.log(err));
fetchData("https://jsonplaceholder.typicode.com/todos/5")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// module.exports = fetchWithTimeout;
