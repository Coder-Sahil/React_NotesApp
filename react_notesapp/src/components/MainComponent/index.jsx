
import { useNotes } from "../../context/notes-contex";
import NotesCard from "../../NotesCard";

const MainComponent = ({ tag }) => {

    const { title, text, notes, notesDispatch } = useNotes();
    // const initialState = {
    //     title : "",
    //     text : "",
    //     notes : []
    // }
    // const [{title, text, notes}, notesDispatch] = useReducer(notereducer,initialState);
    
    const colorDefault = {
        backgroundColor : 'bg-pink-900',
        textColor : ''
    }
    const colorImportant = {
        backgroundColor : 'bg-amber-500',
        textColor : 'text-zinc-950'
    }
    const colorPin = {
        backgroundColor : 'bg-pink-500',
        textColor : 'text-zinc-950'
    }
    const colorArchive = {
        backgroundColor : 'bg-sky-800',
        textColor : 'text-neutral-50'
    }
    const colorBin = {
        backgroundColor : 'bg-rose-950',
        textColor : 'text-neutral-50'
    }

    const handleChange = (e) => {

        const id = e.target.id;
        const value = e.target.value;

        // console.log("id -" + id + "value - " +value)
        if (id === "ADD_BTN") {
            //console.log("button clicked");
            notesDispatch({
                type: id,
                payload: value
            })

            notesDispatch({
                type: 'CLEAR_INPUT'
            })
        }
        else {
            notesDispatch({
                type: id,
                payload: value
            })
        }

    }

    // console.log(title + " - " + text)
    //console.log(notes)
    //console.log(tag)
    return (
        <>
            <div className="flex flex-col flex-wrap w-screen p-8">
            {
                tag === "HOME" &&
                <div className="flex flex-col gap-1 w-[400px] h-[200px] p-3 text-purple-900 place-self-center">
                    <input id="TITLE" value={title} className="h-12 rounded-lg" placeholder="Enter Title . . ."
                        onChange={handleChange} />
                    <textarea id="TEXT" value={text} className="h-24 rounded-lg" placeholder="Enter Text . . ."
                        onChange={handleChange} />
                    <button disabled={title.length < 1 || text.length < 1} className="relative" >
                        <span id="ADD_BTN" onClick={handleChange} className="material-symbols-outlined text-neutral-50 text-4xl bottom-0 right-0 hover:cursor-pointer">add_circle</span>
                    </button>
                </div>
            }

            {
                tag === "HOME" && notes.length > 0 && notes.find(note => note.isPinned === true) &&
                <div className="flex flex-wrap">
                    {notes?.map(note => (
                        (note.isPinned === true
                            && note.isDeleted === false) &&
                        <NotesCard id={note.id} note={note} color={colorPin}  />
                    ))}
                </div>
            }

            {
                tag === "HOME" && notes.length > 0 &&
                <div className=" flex flex-wrap">
                    {notes?.map(note => (
                        (note.isPinned === false && note.isArchive === false && note.isImportant === false
                            && note.isDeleted === false) &&
                        <NotesCard id={note.id} note={note} color={colorDefault}  />
                    ))}
                </div>
            }

            {
                tag === "IMPORTANT" && notes.length > 0 &&
                <div className="flex flex-wrap">
                    {notes?.map(note => (
                        (note.isImportant === true
                            && note.isDeleted === false) &&
                        <NotesCard id={note.id} note={note} color={colorImportant} />
                    ))}
                </div>
            }

            {
                tag === "ARCHIVE" && notes.length > 0 &&
                <div className="flex flex-wrap">
                    {notes?.map(note => (
                        (note.isArchive === true
                            && note.isDeleted === false) &&
                        <NotesCard id={note.id} note={note} color={colorArchive}  />
                    ))}
                </div>
            }

             {
                tag === "BIN" && notes.length > 0 &&
                <div className="flex flex-wrap">
                    {notes?.map(note => (
                        (note.isDeleted === true) &&
                        <NotesCard id={note.id} note={note}  color={colorBin}  />
                    ))}
                </div>
            }
            </div>
        </>
    )
}

export default MainComponent;