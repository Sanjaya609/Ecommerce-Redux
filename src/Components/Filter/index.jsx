import React from 'react'
import { Offcanvas } from 'react-bootstrap';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { filterModal } from '../../Redux/action/filtermodal';
import { useDispatch } from 'react-redux';
import { filteredProduct } from '../../Redux/action/product';

const Filter = () => {

    const dispatch=useDispatch();
    const Modal=useSelector((state)=>state.filterModal.display);
    const products= useSelector((state)=>state.product.products);

    const [ranges, setRanges] = React.useState({ priceMin: 0, priceMax: 0, /* dateMin:0, dateMax: dayjs(Date()), */filterCategory:"default" });
    
    const handleResetFilter=()=>{
        setRanges({...ranges,priceMin:0,priceMax:0,filterCategory:"default"})
    };
    const handleApplyFilter=(ranges)=>{
        dispatch(filteredProduct(ranges));
        dispatch(filterModal(false));
    }
    return (
        <Offcanvas show={Modal} onHide={()=>dispatch(filterModal(false))} placement={'end'}>
        <Offcanvas.Header closeButton style={{ "backgroundColor": "#aaecf0", padding: "1rem" }}>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="filter-body">
        <div className="filter-upper-body">
            <div className="filter-price" style={{ "paddingTop": "0.8rem" }} >
                <label htmlFor="filter-price" className='form-label'>Price</label>
                <div className="price-range" style={{ "display": "flex" }}>
                    <input 
                    name='filter-price' 
                    className='form-control'
                    placeholder='Min' 
                    type="text" 
                    onChange={(e) => setRanges({ ...ranges, priceMin: e.target.value })}
                    value={ranges.priceMin} />_
                    <input 
                    name='filter-price' 
                    className='form-control' 
                    placeholder='Max' 
                    type="text"
                    onChange={(e) => setRanges({ ...ranges, priceMax: e.target.value })}
                    value={ranges.priceMax}/>
                </div>
            </div>
            <div className="filter-date" style={{ "paddingTop": "0.8rem" }}>
                <label htmlFor="filter-date" className='form-label'>Date</label>
                <div className="date-range">
                    <input
                    name='filter-date' 
                    className='form-control' 
                    type="date" 
                    style={{ 'width': '100%' }} 
                    onChange={(e)=>setRanges({...ranges,dateMin:e.target.value})}
                   />
                </div>
            </div>
            <div className="filter-category" style={{ "paddingTop": "0.8rem" }}>
                <label htmlFor="filter-category" className='form-label'>Category</label>
                <div className="category-range">
                    <select name="filter-category" className='form-control' style={{ "width": "100%" }}
                    onChange={(e) => setRanges({ ...ranges, filterCategory: e.target.value })} >
                        <option defaultValue={ranges.filterCategory} >विकल्प छान्नुहोस्</option>
                        <option value='mobile'>Mobile</option>
                        <option value='laptop'>Laptop</option>
                        <option value='watch'>Watch</option>
                        <option value='headseat'>Headset</option>
                        <option value='keyboard'>Keyboard</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="filter-footer">
            <button type="button" 
            className="btn btn-outline-secondary" 
            style={{ 'marginRight': "1rem" }} 
            onClick={()=>handleResetFilter}
            >Reset</button>
            <button 
            type="button" 
            className="btn btn-success"
            onClick={()=>handleApplyFilter(ranges)}>Apply</button>
        </div>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
        
)}
export default Filter;