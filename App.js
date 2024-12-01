// >> Promise: -
//     Three thing in promise.
// 1.Pending
// 2.Fulfilled / resloveSAC qwe
// 3.Reject

// Promise proper code
// let pro = new Promise((reslove, reject) => {
//     let Ielts = false
//     if (Ielts === true) {
//         reslove("Lets do Ielts!!!")
//     }
//     else {
//         reject("Leave it Bro...")
//     }
// })
// pro
//     .then and.catch
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })

//         >> { Promise Task Multiplication table }
// let tableinput = +prompt("Enter any integer")
// let tableRange = +prompt("Enter Range")
// let defaultnumber = 5

// let Pro = new Promise((reslove, reject) => {
//     if (tableinput) {
//         reslove(tableinput)
//     }
//     else {
//         reject(defaultnumber)
//     }
// })

// Pro
//     .then((data) => {
//         for (var i = 1; i <= tableRange; i++) {
//             document.write(`${data} x ${i} = ${data * i} <br>`)
//         }
//     })
//     .catch((err) => {
//         for (var i = 1; i <= tableRange; i++) {

//             document.write(`${err} x ${i}=${err * i} <br>`)
//         }
//     })


//     >> API
// API(Application programming interface)
// connection between backend and database


//     >> Fetch Method: -
//         let GetData = new Promise((resolve, reject) => {
//             fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//                 return response.json()
//             }).then((data) => {
//                 console.log(data);
//             }).catch((err) => {
//                 console.log(err)
//             })

//         }
//         )

//             >> async await: -
//                 let fetchdata1 = async () => {
//                     try {
//                         let getdata = await fetch("https://jsonplaceholder.typicode.com/posts")
//                         let response = await getdata.json()
//                         console.log(response);
//                     }
//                     catch (error) {
//                         console.log(error.message);
//                     }
//                 }
// fetchdata1()