import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import navIcon from "../../../Assets/Icons/icon.png"
import { AuthContext } from '../../../ContextProvider/AuthProvider';
import { BiUser } from "react-icons/bi"

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    // console.log(user)
    const handleLogout = () => [
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    ]
    return (
        <Navbar
            className='pt-7 pb-7 border-b border-gray-300 container mx-auto'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand className='h-6'>
                <div className=" w-16 md:w-32">
                    <img
                        src={navIcon}
                        alt="Navbar logo"
                    />
                </div>
                <span className="self-center whitespace-nowrap text-base md:text-xl font-semibold dark:text-white">
                    The Foodie Express
                </span>
            </Navbar.Brand>
            <div className="flex flex-row-reverse md:flex-row justify-between md:order-2">
                <Navbar.Collapse className='hidden md:flex items-center mr-8'>
                    <Link to="/home">
                        Home
                    </Link>
                    <Link to="/allServices">
                        All Foods
                    </Link>
                    <Link to="/blogs">
                        Blog's
                    </Link>

                    {
                        user?.uid &&
                        <Link to="/addService">
                            Add Food
                        </Link>
                    }
                    {
                        user?.uid &&
                        <Link to="/reviews">
                            My Reviews
                        </Link>
                    }
                </Navbar.Collapse>
                {
                    !user?.uid &&
                    <Link to="/login">
                        <button className="bg-green-500 rounded text-white py-2 font-semibold px-5">
                            Login
                        </button>
                    </Link>
                }
                {
                    user?.uid &&
                    <Dropdown
                        className='ml-2 md:ml-0'

                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="" img={user?.photoURL ? user?.photoURL : <BiUser />} rounded={true} />}
                        // label={<img
                        //     alt=""
                        //     src={user?.photoURL ? user?.photoURL : <BiUser />}
                        //     referrerPolicy="no-referrer"
                        // />}
                        status="online"
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {
                                    user?.uid && user?.displayName
                                }
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {
                                    user?.uid && user?.email
                                }
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/cart">
                                View Cart
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <button onClick={handleLogout}>
                                logout
                            </button>
                        </Dropdown.Item>
                    </Dropdown>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='block md:hidden'>
                <Link className='font-semibold mb-3 ml-2' to="/home">
                    Home
                </Link>
                <Link className='font-semibold mb-3 ml-2' to="/allServices">
                    Add Food
                </Link>
                <Link className='font-semibold mb-3 ml-2' to="/blogs">
                    Blog's
                </Link>
                <Link className='font-semibold mb-3 ml-2' to="/addService">
                    Add Food
                </Link>
                <Link className='font-semibold mb-3 ml-2' to="/reviews">
                    My Reviews
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;