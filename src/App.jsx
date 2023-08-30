import React from 'react';
import Root from './routes/Root'

function App() {
  return (
    <>  
      <Root/>
    </>
  )
}

export default App

// import Fruta from './components'
// import React, { useState, useEffect } from 'react';
// // import { getFruits } from './../api/FruitsService';
// import api from './services/api'; // aqui está importando os dados da api fake

// function App(){
//   const[fruits, setFruits] = useState([]);

//   // usando a função do FruitsService:

//   // useEffect( () => {
//   //   setFruits(getFruits)
//   // },[])  

// // ---------------------------------------------------------------------------

//   // usando a api fake:

//   useEffect( () => {
//     const url = '/fruits'; // criei uma const para acessar os dados da api
//         api.get(url) // indicando o que a get vai acessar, no caso a variavel criada acima
//       .then( (response) => {
//           setFruits(response.data) // adicionando informações através do setFruits 
//         })

//   },[]) 

//   return (
//     <>
//       <header>
//         <h1 className='title'>Benefícios de incluir frutas na sua alimentação</h1>
//       </header>
//       <section className='sectionFruits'>
//         <div className='listFruits'>


//         {
//             fruits.map(fruit => {
//               return ( <Fruta 
//                 key={fruit.id}
//                 fruits={fruit}
//                   /> )
//             })
//           }

//         </div>
//       </section>
//     </>
//   )
// }

// export default App

/* em branco:

<Fruta name="" image="" description="" url=""/>
*/


// abaixo está como essa aba se inicia por padrão:

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
