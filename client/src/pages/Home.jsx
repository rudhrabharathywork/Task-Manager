import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1>Home Page</h1>
            <Link to="/login" >Login</Link>
        </>
    )
}

export default Home;