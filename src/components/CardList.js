import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    var list =
        <div>
            {

                robots.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                    );
                })

            }
        </div>;

    return list;
}

export default CardList;