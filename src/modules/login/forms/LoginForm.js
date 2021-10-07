import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoginResponseAction} from "../store/actions";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state)=> state.login);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        dispatch(getLoginResponseAction(email, password));
    }

    return (
    <div className="container">
        <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="col-5">
                <div className="card bg-info">
                    <div className="card-body">
                        <form onSubmit={handleLoginSubmit} autoComplete="off">
                            {loading && <h2>Loading</h2>}
                            {error && <h2 style={{color: "red"}}>{error}</h2>}
                            <div className="form-group">
                                <input type="email" id="email" className="form-control"
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder="example@email.com" /><br/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       placeholder="password"/><br/>
                            </div>
                            <button type="submit" id="sendlogin" className="btn btn-secondary float-md-end">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}