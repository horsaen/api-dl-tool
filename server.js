const fs = require('fs')
const axios = require('axios')

const url = "https://api.horsaen.com/members"

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