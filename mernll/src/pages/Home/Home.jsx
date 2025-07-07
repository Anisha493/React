import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Button name='Welcome here!' message="newMessage"/>
    </div>
  )
}

export default Home