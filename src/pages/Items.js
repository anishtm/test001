import React,{useState} from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

const Items = () => {
    const itemsdata=useSelector(store=>store.item)
    const [itemList, setItemList]= useState(itemsdata.items)

    return (
        <>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                   {itemList.map((item,i)=>(
                       <Item key={i} data={item}/>
                   ))}
                </div>

            </div>
        </>
    )
}

export default Items
