
import { Button } from "./Button"

export const ButtonsRow = ({buttons, functions}) => {
  return (
    <tr>
      {
        buttons.map(button => (
          
            <Button key={button.label} 
            {...button}
            functions={functions}/>
        ))
      }
    </tr>
  )
}

export default Button
