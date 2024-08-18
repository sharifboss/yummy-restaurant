
import './App.css'
import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'
import Food from './Food/Food'


function App() {
  
  return (
    <>
      <div >
        <Header ></Header>

      </div>
    

      <div className='flex justify-center mt-10'>
        <Cover></Cover>
      </div>
      <div>
        <Food></Food>
      </div>
     

    </>
  )
}

export default App
