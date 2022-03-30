

export default function Card(data) {
  console.log(data);
  return(
    <div className="card w-50 m-2">
      <div className="card-body">
        <h6 className="card-title">Wilayah : {data.data.Wilayah}</h6>
        <p className="card-text">Kekuatan : {data.data.Magnitude} Magnitude</p>
        <p className="card-text">Tanggal : {data.data.Tanggal}</p>
        <p className="card-text">Kedalaman : {data.data.Kedalaman} Km</p>
      </div>
    </div>
  )
}