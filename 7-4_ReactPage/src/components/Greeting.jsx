function Greeting(props){
    return (
        <div className="Greeting">
            <h1>Hello {props.name}</h1>
            <strong>{props.children}</strong>
        </div>
    )
}

export default Greeting