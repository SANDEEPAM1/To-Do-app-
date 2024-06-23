export function NewTodoform ({onSubmit,newItem,setnewItem}){
 const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit(newItem);
    setnewItem("")
}

    return(
    <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input type='text' id='item' value={newItem} onChange={e => setnewItem(e.target.value)}/>
        </div>
        <button className='btn' >Add</button>
      </form>
      )

}