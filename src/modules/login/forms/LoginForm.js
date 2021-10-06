import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getLoginResponseAsync } from "../../../store/asyncActions";
// import {apiEndPoints} from "../../../config/config";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state)=> state.login);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        dispatch(getLoginResponseAsync(email, password));
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            {loading && <h2>Loading</h2>}
            {error && <h2 style={{color: "red"}}>{error}</h2>}
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}  placeholder="example@email.com" /><br/>

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br/>
            <button type="submit">Login</button>
        </form>
    );
}