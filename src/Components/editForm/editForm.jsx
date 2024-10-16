import React, { useState, useEffect } from "react";

const EditForm = ({ editData, handleUpdate }) => {
    const [editInput, setEditInput] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: ''
    });

    useEffect(() => {
        setEditInput(editData);
    }, [editData]); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditInput({
            ...editInput,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate(editInput);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <form className="row g-3 mt-5" onSubmit={handleSubmit}>
                        <input name="id" type="hidden" value={editInput.id} /> {/* added value={editInput.id} */}
                        <div className="col-md-6">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={handleChange} value={editInput.name} />
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onChange={handleChange} value={editInput.email} />
                        </div>
                        <div className="col-md-6">
                            <label for="Phone" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="Phone" onChange={handleChange} value={editInput.phone} />
                        </div>
                        <div className="col-md-6">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleChange} value={editInput.password} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange} value={editInput.address} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark mt-3">Add Updated Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditForm;