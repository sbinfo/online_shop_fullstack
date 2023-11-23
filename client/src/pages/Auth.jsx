import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom'

const Auth = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{ isLoginPage ? 'Authorization' : 'Registration' }</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your Email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your Password...'
                    />
                    <Button
                        className='mt-3'
                        variant={"outline-primary"}
                    >
                        { isLoginPage ? 'Sing in' : 'Registration' }
                    </Button>
                    {
                        isLoginPage ?
                        <div className='d-flex mt-2'>
                            Don't have an account? <NavLink to={REGISTER_ROUTE} className='ms-2'>Registration</NavLink>
                        </div> :
                        <div className='d-flex mt-2'>
                            Already have an account?? <NavLink to={LOGIN_ROUTE} className='ms-2'>Login</NavLink>
                        </div>
                    }
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;