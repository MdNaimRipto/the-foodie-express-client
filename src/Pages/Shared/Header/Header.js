import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from "react-router-dom"
import navIcon from "../../../Assets/Icons/icon.png"

const Header = () => {
    return (
        <Navbar
            className='py-7 border-b border-gray-300 container mx-auto'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand className='h-6'>
                <div className=" w-20 md:w-32">
                    <img
                        src={navIcon}
                        alt="Navbar logo"
                    />
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    The Foodie Express
                </span>
            </Navbar.Brand>
            <div className="flex flex-row-reverse md:flex-row justify-between md:order-2 w-1/4 md:w-[40%]">
                <Navbar.Collapse className='hidden md:flex items-center mr-8'>
                    <Link to="/home">
                        Home
                    </Link>
                    <Link to="/allServices">
                        All Foods
                    </Link>
                    <Link to="/blog">
                        Blog's
                    </Link>
                    <Link to="/add">
                        Add Food
                    </Link>
                    <Link to="/reviews">
                        My Reviews
                    </Link>
                </Navbar.Collapse>
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
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
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='block md:hidden'>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/allServices">
                    Add Food
                </Link>
                <Link to="/blog">
                    Blog's
                </Link>
                <Link to="/add">
                    Add Food
                </Link>
                <Link to="/reviews">
                    My Reviews
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;