import { v4 as uuid } from "uuid"


export const notereducer = (state, {type, payload}) => {

    switch(type)
    {
        case 'TITLE':
            return {
                ...state,
                title : payload
            }
        case 'TEXT':
            return {
                ...state,
                text : payload
            }
        case 'ADD_BTN':
            return {
                ...state,
                notes : [...state.notes, {title : state.title, text : state.text, id : uuid(), isPinned : false, isArchive : false, isImportant : false, isDeleted : false} ]
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                title : "",
                text : "",
            }
        case 'PIN_UNPIN':
            return {
                ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isPinned : !note.isPinned, isDeleted : false, isArchive : false, isImportant : false} : {...note})
            }
        case 'ARCHIVE':
            return {
               ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isArchive : !note.isArchive, isDeleted : false, isImportant : false, isPinned : false } : {...note})
            }
        case 'IMPORTANT':
            return {
               ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isImportant : !note.isImportant, isDeleted : false, isArchive : false, isPinned : false} : {...note})
            }
        case 'BIN':
            return {
               ...state,
                notes : state.notes.map(note => note.id === payload ? {...note, isDeleted : !note.isDeleted} : {...note})
            }
        default:
            return state;
    }
}
