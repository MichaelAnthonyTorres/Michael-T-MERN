const Hello = (props) => {
    if (isNaN(props.str)){
        return( 
            <h1> 
                The word is: {props.str} 
            </h1>
            )
    }
    else{
        return (
            <h1> The number is: {props.str}</h1>
        )
    }
}

export default Hello;