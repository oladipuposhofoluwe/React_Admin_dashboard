import React from 'react';
import './topbar.css';
import  {NotificationsNone, Language, Settings} from '@material-ui/icons';


function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                <span className="logo">CrownJewel</span></div>
                <div className="topright">
                    <div className="topbariconscontaine">
                        <NotificationsNone />
                        <div className="topiconbag">2</div>
                    </div>
                    <div className="topbariconscontaine">
                        <Language/>
                        <div className="topiconbag">2</div>
                    </div>
                    <div className="topbariconscontaine">
                        <Settings/>
                    </div>
                    <div className="topbariconscontaine">
                       <img className="picture" src="/image/oladipupo_shofoluwe.jpeg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar