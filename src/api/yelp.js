import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zl98Qe4bxBGPZMcyXnYiFwmyRU_GiVlYzNKTgUMWwQuS1ZoOQTdpPjdB88jlkuTmyPZ3BHQ9grJKtKOwBS-34JXSf4rHtxSTRSfcIOvQBjFvcnr8EXXw5VFZ68xFYXYx'
    }
})