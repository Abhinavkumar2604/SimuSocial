import Card from "../Card/Card";
import GetDataComponent from "../../API/Users";

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Simpler</a>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="btn btn-primary">
                            <span className="glyphicon glyphicon-user"></span> Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <Card name="Simpler Technologies" email="example@gmail.com"/>
        <div className="users-container">

            <GetDataComponent />
        </div>
        </>
    );
};

export default Navbar;