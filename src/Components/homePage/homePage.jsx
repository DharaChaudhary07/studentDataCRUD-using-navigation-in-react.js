import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <>

            <h1 className="text-center mt-5">Student Registration Form</h1>
        
            <div className="text-center mt-5">
                <button type="button" className="btn btn-dark mt-5" onClick={() => navigate('/form')} >Registration Form</button>
            </div>

        </>
    )
}

export default HomePage;
