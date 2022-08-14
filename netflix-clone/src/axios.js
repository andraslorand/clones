import axios from 'axios'

//the begining of a api call
const instances=axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instances