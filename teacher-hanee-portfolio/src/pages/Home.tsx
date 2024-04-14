import Header from "../components/Header"
import SubHeader from "../components/SubHeader"

const Home = () => {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column",gap:"75px"}}>
            <Header/>
            <SubHeader/>
    </div>
  )
}

export default Home