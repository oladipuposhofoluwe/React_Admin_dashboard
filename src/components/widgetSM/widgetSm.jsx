import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItems">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src="https://image.shutterstock.com/image-photo/portrait-happy-male-employee-wearing-260nw-1126819802.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-confident-businesswoman-posing-for-photoshoot-in-picture-id1032228790?s=612x612" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>

            </ul>
        </div>
    )
}


export default WidgetSm;