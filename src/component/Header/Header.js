import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 sticky">
                <div className="flex-1">
                    <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Quizers Dev</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/statistics'}>Statistics</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;