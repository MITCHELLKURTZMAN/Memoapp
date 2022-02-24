
const Note = ({id, text, date, handleDeleteNote}) => {
    return <div className= "note">
        <h4>{id}</h4>
        <span>{text}</span>
        <div className= "note-footer">
            <small>{date}</small>
        <button 
        onClick={() => handleDeleteNote(id)}
        > delete</button>
        </div>
    </div>;
};

export default Note;