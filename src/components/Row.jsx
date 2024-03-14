
function Row({first,second,third}){

 return (
  <div className="row">
    <button id={'c' + first} className={`cell ${first}`}></button>
    <button id={'c' + second} className={`cell ${second}`}></button>
    <button id={'c' + third} className={`cell ${third}`}></button>
  </div>
 )
}

export default Row;