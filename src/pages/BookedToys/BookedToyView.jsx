import React from 'react';

const BookedToyView = ({produc}) => {

    const { _id, customerName, product, price, email}= produc;

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(``)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={produc?.img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product}</div>
                    </div>
                </div>
            </td>
            <td>
            <div className="font-bold">{customerName}</div>
            </td>
            <td>
            <div className="font-bold">{price}</div>
            </td>
            <td>
            <div className="font-bold">{email}</div>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default BookedToyView;