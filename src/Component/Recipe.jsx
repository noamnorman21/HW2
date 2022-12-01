import React from 'react'

export default function Recipe(props) {
    return (
        <div className="col-md-4 card">
            <img src={props.imgUrl} style={{ width: "100%", height: "150px" }} />
            <h1>{props.name}</h1>
            <p className='title'>{props.desc}</p>
            <p><button onClick={() => props.getDish(props.name)} className={props.class}>{props.btnTxt}</button></p>
        </div>
    )
}