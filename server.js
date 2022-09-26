const fs = require('fs')
const axios = require('axios')

require('dotenv').config()
const url = process.env.url
const path = process.env.path

function fetchData(){
    axios
    .get(url)
    .then((res) => {
        fs.writeFile('./import/members.json', JSON.stringify(res.data), err => {
            if (err){
                console.log(err)
            } else {console.log("succ")}
        })
    })
}
fetchData()