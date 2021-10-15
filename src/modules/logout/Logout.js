import React, {useEffect} from "react";

const Logout = () => {

    useEffect(() => {
       setTimeout(() => window.location.reload(true), 1000);
    });

    return (
        <>
            <h3>Logout successful</h3>
        </>
    );
}

export default Logout;
