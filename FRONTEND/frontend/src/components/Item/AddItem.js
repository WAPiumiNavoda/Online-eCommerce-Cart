import React, { useState } from 'react'
import axios from 'axios';

function AddItem() {

    const [itemName, setproductname] = useState("");
    const [price,setprice] = useState("");
    const [description,setdescription] = useState("");
    const [countInStock,setcount] = useState("");
    const [imageUrl,setImage] = useState("");
    const [size,setsize] = useState("");

    function sendData(e){
         e.preventDefault();// protect the behaviour of form
        // alert('addedd');
        const newItem = {
            itemName,
            price,
            description,
            countInStock,
            imageUrl,
            size
        }

        axios.post("http://localhost:8070/item/add",newItem).then(()=>{
             alert("Item added");
        }).catch((err)=>{
            alert(err)
        })
    }

  return (
<div className='form_Add' style={{margin:"50px"}}>
    <h1>Add Items</h1>

<form onSubmit={sendData}>  
<div class="form-group col-md-4">
      <label for="inputState">Product Name</label>
      <select id="inputState" class="form-control" onChange={(e)=>{
          setproductname(e.target.value);
      }}>
        <option selected>Choose...</option>
        <option>Shirt</option>
        <option>Blouse</option>
        <option>Skirts</option>
      </select>
    </div>

    <div class="form-group col-md-4">
      <label >Price</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="" onChange={(e)=>{
          setprice(e.target.value);
          }}/>
    </div>
 

  <div class="form-group col-md-4">
    <label for="inputAddress">Description</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="" onChange={(e)=>{
          setdescription(e.target.value);
          }}/>
  </div>

  <div class="form-group col-md-4">
      <label >Count InStock</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="" onChange={(e)=>{
          setcount(e.target.value);
          }}/>
    </div>

    <div class="form-group col-md-4">
      <label >Image URL</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="" onChange={(e)=>{
          setImage(e.target.value);
          }}/>
    </div>
    
    <div class="form-group col-md-4">
      <label >Size</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="" onChange={(e)=>{
          setsize(e.target.value);
          }}/>
    </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

    </div>
  )
}

export default AddItem