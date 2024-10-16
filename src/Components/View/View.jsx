import React from "react";

const View = ({ handleEdit , setStorage , storage}) => {


    
  const handleDelete = (id) => {

    const deleteData = storage.filter(item => item.id !== id);

    setStorage(deleteData);
  };

    return (


        <>
            <table className="table mt-5" width={"100%"} border="1" cellSpacing="0" cellPadding="5" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Password</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                       {
                       storage.map((rec, index) => (
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{rec.name}</td>
                                <td>{rec.email}</td>
                                <td>{rec.phone}</td>
                                <td>{rec.password}</td>
                                <td>{rec.address}</td>
                                <td>
                                    <button className="btn btn-dark" onClick={ () => handleEdit(rec.id)}>edit</button> ||  
                                    <button className="btn btn-danger" onClick={() => handleDelete(rec.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default View;