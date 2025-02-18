import React, { useState } from 'react'
// import ReactSlider from 'react-slider';




const priorityColors = ["Black", "White", "Red","Blue","Green"]; 

export default function Sidebar(props) {
  const [showAll,setShowAll]=useState(false);
  
  const uniqueColors = [...new Set(props.categoryProducts.flatMap(product => product.colors.map(color => color.name)))];
  const uniqueBrands = [...new Set(props.categoryProducts.map(product => product.brand))];
  uniqueColors.sort((a, b) => {
    const indexA = priorityColors.indexOf(a);
    const indexB = priorityColors.indexOf(b);
    
    if (indexA === -1 && indexB === -1) return 0; 
    if (indexA === -1) return 1;  
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  // const reducedColors=uniqueColors.slice(0,5);
  const visibleColors= showAll ? uniqueColors :uniqueColors.slice(0,5);
  const handleShow= ()=>{
    setShowAll(!showAll);
  }
  return (
    <div style={{ "width": "200px","padding":"20px"}} className='sidebar_box'>
    <div className='categories d-flex flex-column'>
      <div className='d-flex'><h5 className='fw-semibold'>BRANDS</h5><button className='ms-auto text-danger border-0 bg-white fw-semibold' onClick={props.removeAllFilters}>Clear All</button></div>
      {uniqueBrands.map((brand)=>(
        <label key={brand} style={{cursor:"pointer"}}>
            <input
              type="checkbox"
              className='mx-2'
              checked={props.filters.brands.includes(brand)}
              onChange={() => props.handleBrandChange(brand)}
            />
            {brand}
          </label>))}
      </div>
       <hr/>

       <div className='color d-flex flex-column'>
       <h5>COLOR</h5>
       {visibleColors.map((color) => (
          <label key={color} style={{cursor:"pointer"}}>
            <input
              type="checkbox"
              className='mx-2'
              checked={props.filters.colors.includes(color)}
              onChange={() => props.handleColorChange(color)}
            />
            {color}
          </label>
        ))}
        {uniqueColors.length>5 ?  <button className='border-0 bg-white text-danger ' onClick={handleShow} >{showAll ? "Show Less" :  `+ ${uniqueColors.length-5} More` }</button>:" " }
        
       </div>
       <hr/>
       {/* <div className="slider-container mx-4 my-3">
  <label>Price Range:</label>
  <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    min={0} 
    max={1000000} 
    step={100} 
    defaultValue={props.priceRange}
    value={props.priceRange}
    onChange={props.handlePriceChange}
    pearling
    minDistance={500} // Ensure a minimum gap between values
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
  />
</div>
<br/>

<hr/> */}
       <div className='discount'>
       <h5>DISCOUNT RANGE</h5>
       <div><input name='discount' value="0"  type='radio' className='mx-2' checked={props.filters.discount === "0"}  onChange={props.handleDiscountChange}/> No Discount </div>
       <div><input name='discount' value="10" type='radio' className='mx-2' checked={props.filters.discount === "10"} onChange={props.handleDiscountChange}/> 10% and above </div>
       <div><input name='discount' value="20" type='radio' className='mx-2' checked={props.filters.discount === "20"} onChange={props.handleDiscountChange}/> 20% and above </div>
       <div><input name='discount' value="30" type='radio' className='mx-2' checked={props.filters.discount === "30"} onChange={props.handleDiscountChange}/> 30% and above </div>
       <div><input name='discount' value="40" type='radio' className='mx-2' checked={props.filters.discount === "40"} onChange={props.handleDiscountChange}/> 40% and above </div>
       <div><input name='discount' value="50" type='radio' className='mx-2' checked={props.filters.discount === "50"} onChange={props.handleDiscountChange}/> 50% and above </div>
       <div><input name='discount' value="60" type='radio' className='mx-2' checked={props.filters.discount === "60"} onChange={props.handleDiscountChange}/> 60% and above </div>
       <div><input name='discount' value="70" type='radio' className='mx-2' checked={props.filters.discount === "70"} onChange={props.handleDiscountChange}/> 70% and above </div>
       <div><input name='discount' value="80" type='radio' className='mx-2' checked={props.filters.discount === "80"} onChange={props.handleDiscountChange}/> 80% and above </div>
       <div><input name='discount' value="90" type='radio' className='mx-2' checked={props.filters.discount === "90"} onChange={props.handleDiscountChange}/> 90% and above </div>
       </div>
    </div>
  )
}
