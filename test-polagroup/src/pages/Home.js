import axios from 'axios'
import Card from '../components/CardGempa';
import { useEffect, useState } from "react"

export default function Home() {

  const [gempas, setGempas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(resp => {
        setGempas(resp.data.Infogempa.gempa)
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
      <h1>Info Gempa</h1>
        </div>
      <div className="row justify-content-center">
        {gempas.map((el, i) => (
          <Card data={el} key={i} />
        ))}
      </div>
    </div>
  )
}