import Card from "../card/card"
import "./cards.styles.css"

function Cards({allUniformes}) {
  console.log('allUniformes:', allUniformes);

  const uniformList = allUniformes || [] //de esta forma nos aseguramos de que no sea null o undefined

  return (
    <div className="card-list">
      {uniformList?.map((uniforme)=>(
        <Card key = {uniforme.id} uniforme = {uniforme} />))}
    </div>
  );
}

export default Cards;
