import { LineStyle, Timeline, TrendingUp, Person, AttachMoney, Assessment, Email, Feedback, Message, LocalMall, Report } from '@material-ui/icons';
import React from 'react';
import './sidebar.css';
import  {Link} from 'react-router-dom'


function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidetitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <Link to="/" className="link" >
                            <li className="sidebarlistitem active">
                            <LineStyle  className="sidebaricon"/>
                                Home
                            </li>
                        </Link>
                        
                        <li className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                                Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TrendingUp className="sidebaricon"/>
                                Sales
                            </li>
                        </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidetitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <Link to="/users" className="link">
                            <li className="sidebarlistitem">
                            <Person className="sidebaricon"/>
                                User
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                        <li className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                                Product
                            </li>
                        </Link>

                        <li className="sidebarlistitem">
                            <AttachMoney className="sidebaricon"/>
                                Transcation
                        </li>
                        <li className="sidebarlistitem">
                            <Assessment className="sidebaricon"/>
                                Report
                        </li>
                    </ul>
                    
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidetitle">Notification</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                            <Email  className="sidebaricon"/>
                                Mail
                        </li>
                        <li className="sidebarlistitem">
                            <Feedback className="sidebaricon"/>
                                Feedback
                        </li>
                        <li className="sidebarlistitem">
                            <Message className="sidebaricon"/>
                                Message
                            </li>
                        </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidetitle">Staff</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                            <LocalMall  className="sidebaricon"/>
                                Manage
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                                Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <Report className="sidebaricon"/>
                                Report
                            </li>
                        </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;