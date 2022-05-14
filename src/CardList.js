import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />
    });
    return(
        <div>
            {
                robots.map((user, i) => {
                    return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />
                })
            }
        </div>
    );
}

export default CardList;