import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../chart/chart';
import { productData } from '../../../dummyData';
import { Publish } from '@material-ui/icons';
 
function Product(){
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="addProductButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/I/63606_1609624223.jpg" alt="" className="productInfoImge" />
                        <span className="productName">Apple Airphod</span>
                    </div>
                    <div className="productInfoButtom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">546</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">4300</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">active:</div>
                            <div className="productInfoValue">yes</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">in stock:</div>
                            <div className="productInfoValue">no</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airphod" />
                        <label>In Stock</label>
                        <select name="inStcok" id="idStock">
                            <option value="yes">yes</option>
                            <option value="no">no </option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active ">
                            <option value="yes">yes</option>
                            <option value="no">no </option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/I/63606_1609624223.jpg" alt="" className="productUploadImg" />
                            <label For="file">
                            <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Product;