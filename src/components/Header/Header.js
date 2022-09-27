import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div>
            <Link to='/'>
                Home
            </Link>
            <Link to='/login'>
                Login
            </Link>
            <Link to='/admin'>
                Admin
            </Link>
        </div>
    )
}