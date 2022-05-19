/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Entry list will take in string of role of person viewing it
const EntryList = ({ type }) => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entry);

  const [tableHeaders, setTableHeaders] = useState();
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    dispatch({ type: "GET_ALL_ENTRIES" });
    console.log("entries", entries);
    tableType(type);
  }, []);
  useEffect(() => {
    if (Array.isArray(entries)) {
      setAllEntries(entries);
      console.log(allEntries);
    }
  }, [entries]);

  const tableType = (typeOfTable) => {
    console.log(typeOfTable);
    switch (typeOfTable) {
      case "user":
        setTableHeaders([
          "#",
          "Title",
          "Genre",
          "Length",
          "Prompt",
          "Submitted",
          "Public",
          "Edit",
        ]);
        break;
      case "public":
        setTableHeaders([
          "#",
          "Title",
          "Genre",
          "Prompt",
          "Submitted",
          "Likes (TBD)",
        ]);
        break;
      default:
        break;
    }
  };

  const handleEdit = (entry) => {
    dispatch({ type: "SET_ENTRY_TO_EDIT", payload: entry });
  }
  return (
    <div>
      {allEntries.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {tableHeaders &&
                tableHeaders.map((header, key) => {
                  return <th key={key}>{header}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {allEntries &&
              allEntries.map((entry, key) => {
                return type === "user" ? (
                  <tr key={key}>
                    <td>{allEntries.indexOf(entry) + 1}</td>
                    <td>{entry.title}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.length}</td>
                    <td>{entry.prompt}</td>
                    <td>{entry.submission_time}</td>

                    <td>
                      <input
                        name="isGoing"
                        type="checkbox"
                        checked={entry.public}
                        />                     </td>
                    <td>
                      <button onClick={()=> handleEdit(entry)}>
                        <Link to="/edit-writing">Edit</Link>
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>{allEntries.indexOf(entry) + 1}</td>
                    <td>{entry.title}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.length}</td>
                    <td>{entry.prompt}</td>
                    <td>{entry.submission_time}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : type === "user" ? (
        <div>Nothing to see here</div>
      ) : (
        <div>This user has no stories yet :(</div>
      )}
    </div>
  );
};

export default EntryList;
