import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {

    const [products, setProducts] = useState([])
    // const [searchRes,setSearchRes]=useState('')
    const getResult = async () => {
        let result = await fetch('http://localhost:3000/products')
        result = await result.json()
        setProducts(result)
    }
    const handleSearchProduct = async (e) => {
       
           let key=e.target.value//Get search input here
            if (key) {//if user type any search key
                //Fetch search data for search key
                    let result = await fetch('http://localhost:3000/search-product/'+key);
                    result = await result.json()//Parse json data
                     console.log(result);
                    if (result) {
                        setProducts(result)//update search data to product array
                    }
            } else {//If user does not search for any specific product
                getResult()
            }
      


    }
    useEffect(() => {
        getResult()

    },[setProducts])


    const deleteProduct = (id) => {
        // console.log(id)
        let deletedResult = fetch('http://localhost:3000/delete-product/' + id, {
            method: 'Delete'
        })
    }

    return (
        <div className='products'>
            <input onChange={handleSearchProduct} placeholder='search product' className='search' type='search'></input>
            <ul>
                <li>SL No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Action</li>
            </ul>

            {
               products.map((item, index) => {
                    return (<ul key={index}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li className='actionButton'><button onClick={() => deleteProduct(item._id)}>Delete</button> <span><Link to={'/update-product/' + item._id}>UPDATE</Link></span> </li>

                    </ul>
                    )
                })
                
         
            }
            {/* For not find any result */}
           { products.length==0 && <div className='no-result'>No Results found</div>}
         


        </div>
    )
}
