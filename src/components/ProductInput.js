import {useState} from "react";

const initState = {
    title:'',
    content:'',
    writer:'',
    images: []
}
const ProductInput = () => {

    const[board, setBoard] = useState({...initState})


    return(

        <div>
            <h1>Input</h1>
            <div>
                <input type='text' name='title'></input>
            </div>
            <div>
                <input type='text' name='content'></input>
            </div>
            <div>
                <input type='text' name='writer'></input>
            </div>
            <div>
                <input type='file' multiple name='title'></input>
            </div>
        </div>

    );
}

export default ProductInput;