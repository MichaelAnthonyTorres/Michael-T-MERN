import List from "../components/List";
import Form from "../components/Form";
import React, { useState } from 'react';


const Main = () => {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    return(
        <>
        <Form setHasBeenSubmitted={setHasBeenSubmitted} hasBeenSubmitted={hasBeenSubmitted} />
        <hr />
        <List setHasBeenSubmitted={setHasBeenSubmitted} hasBeenSubmitted={hasBeenSubmitted}/>
        </>
    ) ;
}
 
export default Main