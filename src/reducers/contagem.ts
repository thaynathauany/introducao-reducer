import { useReducer } from "react"

type reducerState = {
    count: number
  }
  type reducerAction = {
    type: string;
  }
  
  const initialState = { count: 0 }
  const reducer = (state: reducerState, action: reducerAction) => { //o reducer SEMPRE recebe dois parametros. O primeiro é o valor atual do meu reducer e o segundo é que ação eu quero executar. Essa função reducer é exexutada toda vez que eu quiser alterar algum valor no Reducer
    switch(action.type) {
      case 'ADD':
        return {...state, count: state.count + 1} //copua o state anterior e soma mais 1
        //state.count =+ 1 - Outra forma de fazer
      break;
      case 'DEL':
        if(state.count > 0) {
          return {...state, count: state.count - 1} 
        }
      break;
      case 'RESET':
        return initialState;
      break;
    }
    return state;
  } // função reducer funciona da seguinte forma: recebe o state, faço as alterações necessárias baseadas no meu action nersse state e depois recebo o novo state
  

export const useContagem = () => {
    return useReducer(reducer, initialState) //aqui temos uma função, chamada useContagem que gera o Reducer e já retorna ele pronto
}

//const [state, dispatch] = useReducer(reducer, initialState) //em state tem as informações, dispatch é uma função. Dentro de useReducer, é necessário ter dois parametros, a primeira é uma função, a segunda são com os valores iniciais que teremos dentro do nosso reducer. Precisamos sempre tirar os parâmetros que foram passados. O dispatch é a função adiciona dentro do Reducer