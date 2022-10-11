import { Outlet } from 'react-router-dom';
import Sidebar from "../Sidebar/sidebar";
import './Layout.scss';

function Layout(){
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags"></span>
                    <Outlet />
                <span className="tags bottom-tags">
                    Web made in React, 2022;
                    <br />
                    <span className="bottom-tag-html">By Luis Miño Bustos</span>
                </span>
            </div> 
        </div>
    )
}

export default Layout;