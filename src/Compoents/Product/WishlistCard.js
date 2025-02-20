import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useCurrency } from './CurrencyContext'
import { useWishlist } from './WishlistContext';
import { FaTimes } from 'react-icons/fa';
import { useCart } from './CartContext';

export default function WishlistCard(props) {

    const [isOpen, setIsOpen] = useState(false);
      const [selectedColor,setSelectedColor]=useState(null);
      const [selectedSize,setSelectedSize]=useState(null);
      const {addToCart}=useCart();

  const {currency,currencyOptions}=useCurrency();
  const {removeFromWishlist}= useWishlist();
  

  return (<>
  
<div style={{width:"240px", height: "340px"}} className='d-flex flex-column position-relative m-2 shadow border'>
<Link className='text-decoration-none text-black' to={`/productpage/${props.data.id}`}>
<FaTimes onClick={(e)=>{e.preventDefault();removeFromWishlist(props.data)}} className=' position-absolute end-0 m-2 bg-opacity-50 text-dark-emphasis bg-white border rounded-5' />
{/* <Link key={props.data.id} to={`/productpage/${props.data.id}`} className='text-decoration-none text-black'>  */}
<img style={{height:"260px"}} className='w-100' src={props?.data?.images[0]} alt='img'/> 
  {/* </Link> */}
   <div className="d-flex justify-content-center my-2">
      </div> 
    <div className='text-truncate px-2' style={{fontSize:"0.83rem"}}>{props?.data?.name}  </div>
    <div className='d-flex flex-row px-2 fs-6'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1' style={{fontSize:"0.8rem"}} >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1' style={{fontSize:"0.75rem"}}> ({currencyOptions[currency].symbol}{((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}OFF) </div> </div>
    </Link>
          <button className='bg-white border text-danger fw-bolder p-2' onClick={(e) =>{e.preventDefault(); setIsOpen(true)}}>MOVE TO BAG </button>
    </div>


    <div className="text-center mt-3">

{isOpen && (
  <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
         <img style={{width:"50px"}} src={props.data.images[0]}  alt='productImage'/>
         <div className='d-flex flex-column'><div className='justify-content-start mx-1'>{props.data.name}</div><div className='d-flex flex-row px-2 fs-6'> <div className='pe-1 fw-semibold'>{currencyOptions[currency].symbol}{(props?.data?.price.discounted *currencyOptions[currency].rate).toFixed(0)} </div><div className='text-decoration-line-through text-secondary px-1 pt-1' style={{fontSize:"0.8rem"}} >{currencyOptions[currency].symbol}{(props?.data?.price.original * currencyOptions[currency].rate).toFixed(0) }</div> <div className='text-danger-emphasis pt-1' style={{fontSize:"0.75rem"}}> ({currencyOptions[currency].symbol}{((props?.data?.price.original-props?.data?.price.discounted)* currencyOptions[currency].rate).toFixed(0)}OFF) </div> </div></div>
          <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
        </div>

        <div className="modal-body text-center">
          <div className="d-flex flex-column justify-content-center gap-2">

           {props.data.colors.length>0 && <>
                    <div className='fs-5 fw-bolder'>SELECT COLOR</div>
                    <div>{props.data.colors.map((color,index)=>(<button key={index} onClick={()=> setSelectedColor(color.name)} style={{"background":`${color["hex"]}`,hover:"color.name"}}  className={`p-3 me-2 rounded-5 ${selectedColor===color.name ? "border border-3 border-danger" :<></>}`}></button>))}</div>
                  </>}
                  {props.data.sizes.length>0 && <><div className='fs-5 m-auto fw-bold'> SELECT SIZE  </div>
                  <div>{props.data.sizes.map((size)=>(<button disabled={size["available"]===false} onClick={()=> setSelectedSize(size.size)} style={{height:"50px",width:"auto",minWidth:"50px"}} className={`me-2 rounded-5 
                   ${selectedSize === size.size ? "text-white bg-danger" : " bg-white"}`}>{size["size"]}</button>))}</div> </>}
               
           
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-danger w-100" onClick={(!selectedColor || !selectedSize) ?()=>setIsOpen(false):() => {addToCart(props.data,selectedColor,selectedSize);setIsOpen(false);removeFromWishlist(props.data)}}>
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{isOpen && <div className="modal-backdrop fade show" onClick={() => setIsOpen(false)}></div>}
</div>







    </>
  )
}