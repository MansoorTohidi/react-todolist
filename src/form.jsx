
import './form.css'
export default function Form(props){
    return(
        <form className="form" action="" 
             onSubmit={(e)=>{
             e.preventDefault()   
             if(props.inputValue!==""){
             
             props.setlistItem([...props.listItem,{id:crypto.randomUUID(),title:props.inputValue,edit:true}])
             props.setInputValue("")
             }
             
             }}>
            <input 
            autoFocus 
            placeholder="type here..."
            type="text"
            value={props.inputValue}
            onChange={(e)=>{
             props.setInputValue(e.target.value)
            }} />
            <button >Add</button>
        </form>
    )
}
