import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";

const Register = () => {
    const inputValueRef = {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    };
    const [inputValues, setInputValues] = useState(inputValueRef);
    const { email, password, name, confirmPassword } = inputValues;

    function onChange(event) {
        const { value, name } = event.target;

        setInputValues({ ...inputValues, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    console.log(inputValues);
    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <form
                className='text-[#141414] border-solid border-2 border-[#141414] xl:w-1/3 p-10 h-auto text-xl lg:w-1/2 max-sm:w-full max-sm:border-0'
                onSubmit={handleSubmit}>
                <h2 className='text-center text-5xl mb-4'>Register</h2>
                <FormField
                    name='name'
                    type={"text"}
                    onChange={onChange}
                    label={"Name"}
                    value={name}
                />
                <FormField
                    name='email'
                    type={"email"}
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
                <FormField
                    name='confirmPassword'
                    type={"password"}
                    onChange={onChange}
                    label={"Confirm Password"}
                    value={confirmPassword}
                />
                <Button>Login</Button>
            </form>
        </div>
    );
};
export default Register;
