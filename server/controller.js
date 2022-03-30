const axios = require('axios')
class Controller {

  static getGempa = async (req, res ) => {
    axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
  .then((resp) => {
    res.status(200).json(resp.data)
  }).catch((err) => {
    res.status(500).json(err)
    
  });
  }

}

module.exports = Controller