import { PermIdentity, CalendarToday, PhoneAndroid, MailOutlineOutlined, LocationSearching, Publish } from '@material-ui/icons';
import './user.css';
import {Link} from 'react-router-dom'

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">Edit User</h2>
                <Link to="/newUser">
                     <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Rebbecca Cornol</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>

                    <div className="userShowButtom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="showUserIcon"/>
                            <span className="userShowInfoTitle">rebecca99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="showUserIcon"/>
                            <span className="userShowInfoTitle">10, July 1990</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="showUserIcon"/>
                            <span className="userShowInfoTitle">+11 23 6725 33</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineOutlined className="showUserIcon"/>
                            <span className="userShowInfoTitle">rebecca2@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="showUserIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>

                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLef">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="rebecca99" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name:</label>
                                <input type="text" placeholder="Rebbecca Cornol" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email:</label>
                                <input type="text" placeholder="rebecca2@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone:</label>
                                <input type="text" placeholder="+11 23 6725 33" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address:</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>
                            
                        </div>
                        <div className="userUpdateRigth">
                            <div className="userUpdateUpload">
                                <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUploadIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="updateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default User;
