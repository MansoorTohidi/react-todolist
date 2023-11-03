import { useState } from "react"
import "./app.css"
import Form from './form.jsx'



function App(){
    const[inputValue,setInputValue]=useState("")
    const[listItem,setlistItem]=useState([])
    const[inputEdit,setInputeEdit]=useState([])
    const [idSelectioafterButtonEdit,setesh]=useState("");
   
    

    function handleDelete(id){
        const filtered=listItem.filter((item)=>{
            return(item.id!==id)
            })
            setlistItem(filtered)    
    }
    
    function handleEdit(id){
        
        const resetEditbtns=listItem.map((e)=>{
            return(e.edit=true)
        })
        setlistItem(resetEditbtns)
        const myindex=listItem.findIndex((item)=>(item.id===id))
        setInputeEdit([listItem[myindex].title])
        setesh(id)
        const newlistItem=[...listItem]
        newlistItem[myindex].edit=false
        setlistItem(newlistItem)
        
        
    
    }


    function handleEditOrTitle(title,id){
        if(inputEdit.length===0){
        
            return(title)}
        else{
        if(idSelectioafterButtonEdit===id)
        return(
                inputEdit.map((inp)=>{
                 return(
                    <div className="insteadEdit" >
                     <input  className="inputedit" value={inputEdit} autoFocus  onChange={(e)=>{setInputeEdit([e.target.value])}}  type="text"  />
                     <div className="cancelbtn" onClick={
                        ()=>{
                        const myindessx=listItem.findIndex((item)=>{return(item.id===idSelectioafterButtonEdit)})
                        const editedlistItem=[...listItem]
        
                        console.log(`inputeedit: ${inputEdit[0]}`)
                        editedlistItem.splice(myindessx,1,{id:idSelectioafterButtonEdit,title:inputEdit[0],edit:true})
    
    
                        console.log(editedlistItem)
                        setlistItem(editedlistItem)
                    
                       
                        setInputeEdit([])
                        
                        }
                     }>ok</div>
                     <div className="okbtn" onClick={
                        ()=>{
                            const myindessx=listItem.findIndex((item)=>{return(item.id===idSelectioafterButtonEdit)})
                            const editedlistItem=[...listItem]
            
                            console.log(`inputeedit: ${inputEdit[0]}`)
                            editedlistItem.splice(myindessx,1,{id:idSelectioafterButtonEdit,title:listItem[myindessx].title,edit:true})
                            setlistItem(editedlistItem)

                            setInputeEdit([])
                        }
                     }>cancel</div>
                    </div>
                 )
                })
             
            
        )
        else{ return(title)}
    }


    }


    function createBtn(id){
            const myindex=listItem.findIndex((item)=>{
            return(item.id===id)
            })
            if(listItem[myindex].edit===true){
            return(<div  className="editbtn"   onClick={
                ()=>{
             handleEdit(id)
                }
            } >Edit</div>)
        }
    }

    return(
        <div className="total">
        <h1 className="title">TO-DO LIST</h1>
        
         <Form inputValue={inputValue} setInputValue={setInputValue} listItem={listItem} setlistItem={setlistItem}/>
 
        <div className="itemsList">
        {
            listItem.map((item)=>{
                return(
                <div key={item.id} className="everyitemlist">
                    <h4 className="number">
                        {listItem.indexOf(item)+1}
                    </h4>

                    <div className="titleitem">
                      {handleEditOrTitle(item.title,item.id)}
                    </div>

                  
                    <div className="delAndEdit">
                    {
                        createBtn(item.id)
                    }
                    
                    <div className="del" onClick={
                        ()=>{
                     handleDelete(item.id)
                        }
                    }>
                        Delete
                    </div>
                    </div>

                </div>
                )
            })
        }

        
        </div>
        </div>
    )
    
    }
export default App