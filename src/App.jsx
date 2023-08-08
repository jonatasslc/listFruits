import Fruta from './components'
import axios from 'axios'

function App(){
  return (
    <>
      <header>
        <h1 className='title'>Benefícios de incluir frutas na sua alimentação</h1>
      </header>
      <section className='sectionFruits'>
        <div className='listFruits'>

          <Fruta
          name="Abacaxi"
          image="https://static.todamateria.com.br/upload/ab/ac/abacaxi-0-cke.jpg?auto_optimize=low"
          description="Rico em vitamina C e contribui para o funcionamento do sistema imunológico."
          url="https://www.livup.com.br/ingredientes/abacaxi"/>

          <Fruta
          name="Cacau"
          image="https://www.designi.com.br/images/preview/10077710.jpg"
          description="Rico em fibras e minerais, como ferro, fósforo e cálcio."
          url="https://www.livup.com.br/ingredientes/cacau"/>

          <Fruta
          name="Goiaba Vermelha"
          image="https://st3.depositphotos.com/1006597/34813/i/450/depositphotos_348130344-stock-photo-isolated-green-guava-with-pink.jpg"
          description="Rica em vitamina C, ela possui vitaminas A, E e quase todas do complexo B."
          url="https://www.livup.com.br/ingredientes/goiaba"/>

          <Fruta
          name="Jaca"
          image="https://img.freepik.com/fotos-premium/jaca-com-isolado-no-fundo-branco_253984-5865.jpg"
          description="Possui cálcio, potássio, ferro, fósforo e vitaminas A, B e C."
          url="https://www.livup.com.br/ingredientes/jaca"/>

          <Fruta
          name="Kiwi"
          image="https://img.freepik.com/fotos-premium/kiwi-verde-fresco-isolado-em-um-fundo-branco-frutas-tropicais-close-up_186456-3182.jpg"
          description="Considerado um alimento importante contra o câncer e proteção do DNA."
          url="https://www.livup.com.br/ingredientes/kiwi"/>

          <Fruta
          name="Laranja"
          image="https://img.freepik.com/fotos-premium/fruta-laranja-em-fundo-branco_319514-1585.jpg"
          description="Rica em vitamina C, a laranja é uma fruta rica em ácido cítrico."
          url="https://www.livup.com.br/ingredientes/laranja"/>

          <Fruta
          name="Maçã"
          image="https://img.freepik.com/fotos-premium/maca-fresca-isolada-no-fundo-branco-com-tracado-de-recorte_555949-582.jpg?w=2000"
          description="Possui vitaminas A, B1, B2, C e K, ferro e fósforo."
          url="https://www.livup.com.br/ingredientes/maca"/>

          <Fruta
          name="Manga"
          image="https://static4.depositphotos.com/1020804/365/i/450/depositphotos_3653163-stock-photo-mango-with-section-on-a.jpg"
          description="Ela é indicada para combater anemia devido sua alta concentração de ferro."
          url="https://www.livup.com.br/ingredientes/manga"/>

          <Fruta
          name="Tamarindo"
          image="https://img.freepik.com/fotos-premium/as-frutas-e-as-folhas-frescas-do-tamarindo-isolaram-o-fundo-branco_63373-552.jpg"
          description="Entre seus nutrientes, estão as vitaminas do complexo B, vitaminas C e E."
          url="https://www.livup.com.br/ingredientes/tamarindo"/>

        </div>
      </section>
    </>
  )
}

export default App

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
