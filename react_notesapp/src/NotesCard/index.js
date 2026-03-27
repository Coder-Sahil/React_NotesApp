
import { useNotes } from "../../src/context/notes-contex";

const NotesCard = ({note, color}) => {

    const {notesDispatch} = useNotes();

    const handleChanges = (e) => {

        const event = e.target.id;
        const value = note.id;
       // console.log('pin - ' + event + ' value - ' +value)
        notesDispatch({
                type : event,
                payload : value
            })
    }

    //console.log(note)
    return (
        <>
            <div id={note.id} className={`flex flex-col h-[140px] bg-pink-900 w-80 min-h-40 p-2 m-2 rounded-lg relative h-auto overflow-visible break-words whitespace-normal ${color.backgroundColor} ${color.textColor}`}>
                <div className="flex text-3xl overflow-x-clip">
                    {note.title}
                    <span id="PIN_UNPIN" className="material-symbols-outlined absolute top-2 right-2 hover:cursor-pointer" onClick={handleChanges}>{note.isPinned ? "keep_off" : "keep"}</span>
                </div>
                <div className="overflow-x-clip py-8">
                    {note.text}
                </div>
                <div className="flex" >
                    <span id="ARCHIVE" className="material-symbols-outlined absolute bottom-2 right-16  hover:cursor-pointer" onClick={handleChanges}>{note.isArchive ? "beenhere" : "archive"}</span>
                    <span id="IMPORTANT" className="material-symbols-outlined absolute bottom-2 right-9 hover:cursor-pointer" onClick={handleChanges}>{note.isImportant ? "priority" : "Label_important"}</span>
                    <span id="BIN" className="material-symbols-outlined absolute bottom-2 right-2  hover:cursor-pointer" onClick={handleChanges}>{note.isDeleted ? "backspace" : "delete"}</span>
                </div>

            </div>
        </>
    )
}

export default NotesCard;