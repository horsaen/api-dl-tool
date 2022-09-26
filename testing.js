const axios = require('axios')

require('dotenv').config()
const baals = JSON.parse(process.env.BAAL)

// const baals = [
//     { title : "members", link : "https://api.horsaen.com/members" },
//     { title : "businesses", link : "https://api.horsaen.com/businesses" }
// ]

baals.map(test)

function test(item){
    console.log(item.title + " aaaaa " + item.link)
}