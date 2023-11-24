import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { Context } from ".."
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

const AppBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logout = () => {
        user.setIsAuth(false);
        navigate(SHOP_ROUTE);
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <NavLink style={{ color: "white", textDecoration: "none"}} to={SHOP_ROUTE}>OnlineShop</NavLink>
            { user.isAuth ?
                <Nav className="ml-auto" style={{ color: "white" }}>
                    <Button
                        variant={"outline-light"}
                        style={{ marginRight: '12px'}}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Dashboard
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </Nav> :
                <Nav className="ml-auto" style={{ color: "white" }}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => user.setIsAuth(true)}
                    >
                        Authorization
                    </Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default AppBar;
