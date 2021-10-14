import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-native";
import { GetNotes } from "../services/notes";

export const NotesTable = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    GetNotes(dispatch);
  }, []);

  return (
    <table className="table table-dark">
      <tbody>{}</tbody>
    </table>
  );
};
