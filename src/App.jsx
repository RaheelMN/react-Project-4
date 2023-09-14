
import './App.css'
import styled from 'styled-components'
import NavigationBar from './components/NavigationBar'
import CardsSection from './components/CardsSection'
import {useState,useEffect} from 'react'

const URL = "http://localhost/reactProject4/index.php"

function App() {

  const [records, setRecords] = useState([])
  const [currentSelection,setCurrentSelection]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [activeBtn, setActiveBtn]=useState('All')

  async function getData(){
    setLoading(true)
    try{
      const response = await fetch(URL)
      const data = await response.json()
      if(response.status === 200){
        setRecords(data)
        setCurrentSelection(data) 
        setLoading(false)
      }
    }catch(error){
      setError(`Error: ${error}`)
    }
  }

  
  useEffect(()=>{
    if(error){ return <div>{error}</div>}
    if(loading){ return <div>Loading</div>}
    getData()
  },[])  

  return (
    <Container>
      <NavigationBar
      activeBtn={activeBtn}
      setActiveBtn={setActiveBtn} 
      records={records}
      setCurrentSel={setCurrentSelection}/>
      { currentSelection?.length>0?
      (
        <CardsSection records={currentSelection}/>
      ):
      (<h3>No record found</h3>
      )}
    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 1441px;
  margin:0 auto;

  h3{
    text-align: center;
    color: white;
    text-transform: uppercase;
  }
`
