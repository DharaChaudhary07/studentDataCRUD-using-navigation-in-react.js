import React from "react";


const CRUDForm = ({ handleChange, handleSubmit}) => {

    return(
        <>
            <div className="container">
                <div className="row">
                    <form className="row g-3 mt-5 " onSubmit={handleSubmit}>
                        <input name="id" type="hidden" />
                        <div className="col-md-6">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label for="Phone" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="Phone" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark mt-3">Add Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CRUDForm;