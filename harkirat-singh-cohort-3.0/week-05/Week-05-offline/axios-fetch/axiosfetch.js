// function main(){
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(async (response) => {
        // const json = await response.json();
        // console.log(json[0].title.length);
    // });
// }
// 
// main();


// Fetch :
// 1) Example - josn :
// async function mainFetch(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        // method: "PUT"
    // });
    // const data = await response.json();
    // console.log(data[0].title.length);
// }
// mainFetch();
// 2) Example - Text :
// async function mainFetch(){
//     const response = await fetch("https://www.postb.in/1782131037149-6753125453833", {
//         method: "POST",
//         body: {
//             username: "rushikesh",
//             password: "123456789"
//         },
//         headers: {
//             Authorization: "Bearer 123"
//         }
//     });
//     const textualData = await response.text();
//     console.log(textualData);
// }
// mainFetch();
 

const axios = require('axios')
// // Axios :
// 1) Example - JSON :
// async function mainAxios(){
//     const response = await axios.put("https://jsonplaceholder.typicode.com/posts");
//     console.log(response.data[0].title.length);
// }
// mainAxios();
// 2) Example - Text :
async function mainAxios(){
    const response = await axios.get("https://httpdump.app/dumps/3807d8cc-4b97-4e87-bc58-a09b4b600200?a=3&b=2", {
        username: 'RUSHIKESH',
        password: "987654f321"
    },
    {
        headers: {
            Authorization: "Cearer 321"
        }
    });
    console.log(response.data);
}
mainAxios();