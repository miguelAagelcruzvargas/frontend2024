import { buttonsClasses } from "../assets/buttonsClasses"


export const Button = ({
    class: className, 
    label, 
    function: action, 
    columns,
    functions
}) =>{
    return(
        <td colSpan={columns}>
            <button
                type='button'
                className={buttonsClasses[className]}
                onClick={()=>functions[action](label)}
                >
                  {label}
            </button>
        </td>
        
    )
}


