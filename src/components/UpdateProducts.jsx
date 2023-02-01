import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateProducts() {
    const [name,setName]=useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const param=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getProductDetails()
    },[])
    //Function for preFilled Data;
    const getProductDetails=async()=>{
        let result= await fetch(`http://localhost:3000/update-product/${param.id}`)
        result=await  result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)

    }
        //Function for update Product on onClick handle 
    const handleUpdateProduct= async()=>{
      
        let result= await fetch(`http://localhost:3000/update-product/${param.id}`,{
        method:'put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json'
        }
        })
        alert('Product updated') //showing Alert for confirm product uodatation
        navigate('/')   //Navigate to products(HOME) page After update product;
       

    }
    return (
        <div className='AddProduct-main'>
            {/* <h1>Hello guys</h1> */}
            <div className='addProduct'>
                <p>Add Product Details</p>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} ></input>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} ></input>
                <input type='text' onChange={(e) => setCategory(e.target.value)} value={category} ></input>
                <input type='text' onChange={(e) => setCompany(e.target.value)} value={company}></input>
                <button onClick={handleUpdateProduct}>Update</button>
            </div>
            </div>
            )
}
