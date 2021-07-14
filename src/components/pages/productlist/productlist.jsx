import './productlist.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productRows } from '../../../dummyData';


function ProductList() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
      // console.log(" deleted ")
  };

  const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
          field: "product", headerName: "Product", width: 200, renderCell: (params) => {
              return (
                  <div className="productListItem">
                      <img  className="productListImg" src={params.row.image} alt="" />
                      {params.row.name}
                  </div>
          )
      } },
      { field: 'stock', headerName: 'Stock', width: 200 },
      { field: 'statuser', headerName: 'Status', width: 120 },
      { field: 'price', headerName: 'Price', width: 160 },

      {
          field: "action",
          headerName: "Action",
          width: 150,
             renderCell: (params) => {
              return (
                   <div className="productListButDel">
                      <Link to={"/product/"+params.row.id}>
                          <button className="productListEdit">Edit</button>
                      </Link>

                      <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                  </div>
           )
      }}
  
    ];
    return (
        <div className="productlist">
             <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection />
        </div>
    );
}


export default ProductList;