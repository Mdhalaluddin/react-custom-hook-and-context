import useInputHooks from "../Hooks/UseInputHooks";


const HookForm = () => {
    // const [name, handleName] = useInputHooks('rojina');
    const nameHook = useInputHooks('belal');

    const handleSubmit = e => {
        console.log('form data', nameHook.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleName}
                    type="text" name="name" /> */}
                <input {...nameHook}
                    type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;