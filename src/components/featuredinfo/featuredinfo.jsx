import {ArrowDownward, ArrowUpward} from '@material-ui/icons'
import './featuredinfo.css';

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredtitle">Revenue</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,143</span>
                    <span className="featuredmoneyrate">-11.4 <ArrowDownward className="featuredicon negative"/></span>
                </div>
                <span className="featuredsub">Compare to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Sales</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$4,143</span>
                    <span className="featuredmoneyrate">-1.4 <ArrowDownward className="featuredicon negative"/></span>
                </div>
                <span className="featuredsub">Compare to last month</span>
            </div>

            <div className="featureditem">
                <span className="featuredtitle">Cost</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,323</span>
                    <span className="featuredmoneyrate">+2.4 <ArrowUpward className="featuredicon "/></span>
                </div>
                <span className="featuredsub">Compare to last month</span>
            </div>
        </div>
    )
}


export default FeaturedInfo;