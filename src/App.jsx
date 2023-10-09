import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/AppStyles.module.css";
import "./styles/CardStyles.module.css";

function App() {
  const [ON, setON] = useState(false);
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    if (ON) {
      console.log("ingreso al useEffect");
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((respuesta) => {
          setDatos(respuesta.data.results);
        })
        .catch((error) => {
          console.error("Error en la solicitud HTTP: ", error);
        });
    }
  }, [ON]);

  return (
    <div className={styles.appStyles}>
      <h1>USO DE APIs</h1>
      <h2>The Rick and Morty API</h2>
      <Button variant="success" onClick={() => setON(true)}>
        OBTENER DATOS
      </Button>
      <Button variant="danger" onClick={() => setON(false)}>
        CANCELAR
      </Button>
      <br />
      <a href="https://rickandmortyapi.com/">Link en este enlace</a>
      <br />
      {ON ? (
        <div className={styles.cardContainer}>
          {datos.map((dato) => (
            <Card key={dato.id} className="card">
              <Card.Img variant="top" src={dato.image} />
              <Card.Body>
                <Card.Title>{dato.name}</Card.Title>
                <Card.Text>
                  Estado: {dato.status} - Especie: {dato.species}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>
                  localización:{" "}
                  <a href={dato.location.url}>{dato.location.url}</a>
                </small>
              </Card.Footer>
            </Card>
          ))}
        </div>
      ) : (
        <div key="empty"></div>
      )}
    </div>
  );
}

export default App;

//estado 200 ====> todo OK
//estado 500 ====> todo MAL
//estado 404 ====> no encontro lo que buscaba o no funciona
//estado 202 ====> no hubo cambio entre la informacion almacenada y la actual

//const juanito=17
//axios.get('https://rickandmortyapi.com/api/character/')

// const [contador,setContador] = useState(0)

// const [nombre,setNombre]=useState("")
// const [like,setLike]=useState(false)
/* <h1>operadores ternario-estado</h1>
      <button onClick={()=>setJuanito(true)} >mayor</button>
      <button onClick={()=>setJuanito(false)} >menor</button>
      { juanito ? <h1>es mayor</h1> : <h1>no es mayor</h1>  }

      <h2>conteo de numeros</h2>
      
      <p>contador de visitas: {contador} </p>
      <button onClick={()=>setContador(contador-1)} >reducir</button>
      <button onClick={()=>setContador(contador+1)} >incrementar</button>
     <hr />
     <label htmlFor="">nombre:</label>
      <input onChange={(e)=>setNombre(e.target.value)} type="text" />
    <br />
      <label htmlFor="">tu nombre es :</label>{nombre.length > 0 ? <h1>{nombre}</h1>:<div></div>}
      <hr />
      <br />
      <h1>te gusto la pagina?</h1>
      
      <button onClick={()=>setLike(true)} >me gusto</button>
      <button onClick={()=>setLike(false)} >no me gusto</button>
      { like ? <h1>😊</h1> : <h1>🤔</h1>  } */
