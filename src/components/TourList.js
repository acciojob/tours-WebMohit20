import React from "react";

const TourList = ( {data} )=>{

    console.log(data);
    
    return (
        <div>
            {data.map( (list)=>(
            <div className="tour-data" key={list.id}>
                <h2 className="title">{list.name}</h2>
                <div className = "single-tour">
                    <p className="tour-info">
                        {list.info}
                    </p>
                    <p className="tour-price">
                        {list.price}
                    </p>
                </div>
            </div>
            ) )
            }
        </div> 
    
    )
}

export default TourList;