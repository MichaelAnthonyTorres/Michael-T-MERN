const Color = (props) => {
    return( 
    <h1 style={{backgroundColor:props.background, color:props.color}} > 
        The word is: {props.str} 
    </h1>
    )
}

export default Color;