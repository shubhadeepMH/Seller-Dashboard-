import React, { useState } from 'react'

export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  let getUserId = JSON.parse(localStorage.getItem('user'))._id
  const handleAddProduct = async () => {
    // console.log(name,price,userId,company);

    if (name && price && category && company) {
      let result = await fetch('http://localhost:3000/add-product', {
        method: 'post',
        body: JSON.stringify({ name, price, category, userId: getUserId, company }),
        headers: {
          "Content-Type": "application/json"
        },
      })
      result = await result.json()
      // console.log(result)
      alert('Product Added')
    } else {
      alert('Please Fill All The Fields')
    }

  }
  return (
    <div className='AddProduct-main'>
      {/* <h1>Hello guys</h1> */}
      <div className='addProduct'>
        <p>Add Product Details</p>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name"></input>
        <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price"></input>
        <input type='text' onChange={(e) => setCategory(e.target.value)} placeholder="Enter category"></input>
        <input type='text' onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company Name"></input>
        <button onClick={handleAddProduct}>Add</button>
      </div>
    </div>
  )
}
