import { useContagem } from "./reducers/contagem";
const App = () => {
  const [contagem, contagemDispatch] = useContagem() //em contagem tenho acesso as informações e em contagemDispatch está a função que vai executar a ação que quero executar

  return(
    <div className="p-5">
      Contagem: {contagem.count}
      <hr/>
      <button className="p-3" onClick={()=>contagemDispatch({type: 'ADD'})}>Adicionar</button> {/* dispatch da  a possibilidade de disparar uma action */}
      <button className="p-3" onClick={()=>contagemDispatch({type: 'DEL'})}>Excluir</button> 
      <button className="p-3" onClick={()=>contagemDispatch({type: 'RESET'})}>Resetar</button>
    </div>
  )
}

export default App;