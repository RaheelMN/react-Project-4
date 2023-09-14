import styled from 'styled-components'

const NavigationBar = ({activeBtn,setActiveBtn,records,setCurrentSel}) => {

    const btns =[{name:'All'},{name:'Breakfast'},{name:'Lunch'},{name:'Dinner'},{name:'Brunch'}]

    const searchFood = (e)=>{
        const searchTerm = e.target.value;
        if(searchTerm !== null){
               const searchResult = records.filter((record)=>record.name.toLowerCase().includes(searchTerm.toLowerCase())) 
               setCurrentSel(searchResult) 
               setActiveBtn(null)
        }
    }

    const filter=(type)=>{
        setActiveBtn(type)
        switch (type) {
            case 'All':
                setCurrentSel(records)
                break;
            case 'Breakfast':
                setCurrentSel(records.filter(record=>record.type===type.toLowerCase()))
                break; 
            case 'Lunch':
                setCurrentSel(records.filter(record=>record.type===type.toLowerCase()))
                break; 
            case 'Dinner':
                setCurrentSel(records.filter(record=>record.type===type.toLowerCase()))
                break;                                            
            default:
                setCurrentSel(null)
                break;
        }
    }
  return (
    <Container>
        <NavbarTop>
            <div>
                <img src="./images/logo.svg" alt="logo" />
            </div>
            <div>
                <input type="text" onChange={searchFood} name="search" id="search" placeholder='Search'/>
            </div>
        </NavbarTop>
        <BtnContainer>
            {
                btns.map((btn)=>(
                    <Button $isselected={btn.name===activeBtn}
                     key={btn.name} 
                     onClick={()=>{filter(btn.name)}}>{btn.name}</Button>
                ))
            }
        </BtnContainer>

        {/* without map
        <BtnContainer>
            <Button onClick={()=>{filter('All')}}>All</Button>
            <Button onClick={()=>{filter('Breakfast')}}>Breakfast</Button>
            <Button onClick={()=>{filter('Lunch')}}>Lunch</Button>
            <Button onClick={()=>{filter('Dinner')}}>Dinner</Button>
        </BtnContainer>         */}

    </Container>
  )
}

export default NavigationBar

const Container = styled.div`
background-color: #323334;
 ;
`

const NavbarTop = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1220px;
    height: 70px;
    align-items: center;
    padding: 20px;

    input{
        background-color: transparent;
        color: white;
        border: 1px solid red;
        padding: 11px 15px;
        font-weight: 400;
        font-size: 16px;
        border-radius: 5px;
    }

    @media (0<width<600px) {
        flex-direction: column;
        height: 120px;
    }
`
const BtnContainer = styled.section`
    display: flex;
    gap: 10px;
    width: 60%;
    margin: 0 auto;
    height: 70px;
    align-items: center;
    justify-content: center;
`
export const Button = styled.div`
    cursor: pointer;
    background-color: ${({$isselected})=>$isselected?"green":"red"};
    color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
`