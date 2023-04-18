import React from 'react'
import { Container, Row } from 'reactstrap'

import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css'

import { Link, NavLink } from 'react-router-dom'

const admin__nav = [
    {
        display: 'Dashboard',
        path: './dashboard'
    },
    {
        display: 'All-Products',
        path: './dashboard/all-products'
    },
    {
        display: 'Orders',
        path: './dashboard/orders'
    },
    {
        display: 'Users',
        path: './dashboard/users'
    }
]

const AdminNav = () => {

    const { currentUser } = useAuth()

    return (<>
        <header className='admin__header' >
            <div className="admin__nav-top">
                <Container>
                    <div className='admin__nav-wrapper-top'>
                        <div className="logo">
                            <Link to='/home'>
                                <h2>Multimart</h2>
                            </Link>

                        </div>

                        <div className="search__box">
                            <input type="text" class='box' className='' placeholder='Search...' />
                            <span><i class='ri-search-line'></i></span>
                        </div>

                        <div className="admin__nav-top-right">
                            <span><i class="ri-notification-3-line"></i></span>
                            <span><i class="ri-settings-3-line"></i></span>
                            <img src={currentUser && currentUser.photoURL} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </header>

        <section className='admin__menu p-0' >
            <Container>
                <Row>
                    <div className="admin__navigation">
                        <ul className="admin__menu-list">
                            {
                                admin__nav.map((item, index) => (
                                    <li className="admin__menu-item" key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__admin-menu' : ''} >{item.display}</NavLink>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default AdminNav
