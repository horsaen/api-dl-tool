const fs = require('fs')
const axios = require('axios')

// literally no point in adding a .env file, just use an array here ;-;
const links = [
    { name: 'xxxx', url: 'https://api.github.com/'},
    { name: 'xxxx2', url: 'https://api.github.com/'}
]

links.map(getData)

function getData(item){
    axios
    .get(item.url)
    .then((res) => {
        fs.writeFileSync('./data/' + item.name + '.json', JSON.stringify(res.data), err => {
            if(err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
}