import Header from "../components/Header/Header"
import SubHeader from "../components/SubHeader/SubHeader"
// import "../index.css"

const Home = () => {
  return (
  
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column",gap:"25px"}}>
            <Header/>
            <SubHeader/>
         
    </div>
    
  )
}

export default Home