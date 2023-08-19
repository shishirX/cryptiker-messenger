import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";

const Login = () => {
    const inputValueRef = {
        email: "",
        password: "",
    };

    const [inputValues, setInputValues] = useState(inputValueRef);
    const { email, password } = inputValues;

    function onChange(event) {
        const { value, name } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    console.log(inputValues);
    return (
        <div className='flex items-center justify-center h-screen'>
            <form
                className='text-[#141414] border-solid border-2 border-[#141414] xl:w-1/3 p-10 h-auto text-xl lg:w-1/2 max-sm:w-full max-sm:border-0'
                onSubmit={handleSubmit}>
                <h2 className='text-center text-5xl mb-4'>Login</h2>
                <FormField
                    name='email'
                    type={"text"}
                    onChange={onChange}
                    label={"Email"}
                    value={email}
                />
                <FormField
                    name='password'
                    type={"password"}
                    onChange={onChange}
                    label={"Password"}
                    value={password}
                />
                <Button>Login</Button>
            </form>
        </div>
    );
};
export default Login;
