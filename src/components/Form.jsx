function Form(props) {
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={props.handleFirstNameChange}
                value={props.firstName}
            />
            <input
                type="text"
                onChange={props.handleLastNameChange}
                value={props.lastName}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form