import styled from 'styled-components'
import { Button } from './NavigationBar'


const CardsSection = ({records}) => {
  console.log(records)

  return (
    <Container>
      <CardsContainer>
        {records.map((record,i)=>(
        <Card key={i}>
          <div>
              <img src={`.${record.image}`} alt="food" />
          </div>
          <div className='cardText'>
              <div>
              <h3>{record.name}</h3>
              <p>{record.text}</p>
              </div>
              <Button>
              ${record.price}.00
              </Button>
          </div>
        </Card>         
        ))}
      </CardsContainer>
    </Container>
  )
}

export default CardsSection

const Container = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url("./images/background.png");
  background-size: cover;
  min-height: calc(100vh - 140px);
`

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
row-gap:20px;
column-gap: 32px;
padding: 40px 50px;
justify-content: center;
  
`

const Card = styled.div`

  border-radius: 20px;
  display: flex;
  padding: 8px;
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  img{
    width: 133px;
    height: 133px;
  }

  .cardText{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: end;
  }

  Button{
    font-size: 14px;
    color:blue;
  }
`
