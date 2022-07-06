import React from 'react'

function AddItem() {
  return (
<div className='form_Add' style={{margin:"50px"}}>
    <h1>Add Items</h1>

<form>  
<div class="form-group col-md-4">
      <label for="inputState">Product Name</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Shirt</option>
        <option>Blouse</option>
        <option>Skirts</option>
      </select>
    </div>

    <div class="form-group col-md-4">
      <label >Price</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder=""/>
    </div>
 

  <div class="form-group col-md-4">
    <label for="inputAddress">Description</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>

  <div class="form-group col-md-4">
      <label >Count InStock</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder=""/>
    </div>

    <div class="form-group col-md-4">
      <label >Image URL</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder=""/>
    </div>
    
    <div class="form-group col-md-4">
      <label >Size</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder=""/>
    </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

    </div>
  )
}

export default AddItem