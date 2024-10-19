import homeButton from '../icons/home.png'

const Header = ({ goHome }) => {
  return (
    <div>
        <img src={ homeButton } onClick={goHome}/>
    </div>
  )
}

export default Header