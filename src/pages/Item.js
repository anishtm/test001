import React from 'react'

const Item = (props) => {
    const showItem = props.Data
    return (
        <>
            <div className="card">
                <img src={showItem.item_image} className="card-img-top" alt={showItem.item_name} />
                <div className="card-body">
                    <h4 className="card-title">{showItem.item_name}</h4>
                    <h5 className="card-title">{showItem.item_price}</h5>
                </div>
            </div>

        </>
    )
}

export default Item
