import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
  try {
    // API call
    const response = [
      { value: "My first note", id: 1 },
      { value: "Study for exam next month", id: 2 },
      { value: "Build more full-stack applications", id: 3 },
      { value: "Go to the at gym at 8:00pm", id: 4 },
    ];

    dispatch(ActionCreators.setNotes(response));
  } catch {
    console.log("Error!");
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    // API call
    dispatch(ActionCreators.deleteNote(note));
  } catch {
    console.log("Error!");
  }
};

export const NewNote = async (dispatch, note) => {
  try {
    // API call
    const response = { value: note, id: 1 };
    dispatch(ActionCreators.newNote(response));
  } catch {
    console.log("Error!");
  }
};

export const EditNote = async (dispatch, note) => {
  try {
    // API call
    const response = { value: note, id: 1 };
    dispatch(ActionCreators.editNote(response));
  } catch {
    console.log("Error!");
  }
};
