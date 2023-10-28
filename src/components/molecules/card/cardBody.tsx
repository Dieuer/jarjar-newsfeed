import React from "react";
import { Update } from "../../../datatypes/datatypes"

function CardBody({ update }: { update: Update }) {
    return (
        <div className='card-body'>
            <img src={update.author.image} alt={`${update.author.firstname} ${update.author.lastname}`} />
            <p> -  {update.author.firstname} {update.author.lastname} ({update.createdDate}) </p>
            <h5 className="card-title"> {update.title} </h5>
            <p className="card-text"> {update.text} </p>
        </div>
    );
}

export const MemoizedCardBody = React.memo(CardBody)
