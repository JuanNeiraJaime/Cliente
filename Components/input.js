import { Input } from "reactstrap"

const input = ({typeinput,onChange, value}) =>{
    return (
    
    <Input   
        type={typeinput}
        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        onChange={onChange}
        value={value}
        /* placeholder={"gsgsd"} */
    ></Input>
    )
}

export default input