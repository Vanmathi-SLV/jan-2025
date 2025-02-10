// import { NoteAPI } from "api/note";
// import { Header } from "components/Header/Header";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";
import Header from "./header";
import {Auth} from "../Hoc/Auth";
// import { setNoteList } from "store/notes/notes-slice";

function Layout() {
    // const dispatch = useDispatch();

    async function fetchNotes() {
        // const noteList = await NoteAPI.fetchAll();
        // dispatch(setNoteList(noteList));
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
         <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar/>

        <div style={{ flex: 1 }}>
          {/* Header */}
          <Header />

          {/* Main Content Area */}
          <div style={{ padding: '20px' }}>
                <Outlet />

          </div>
        </div>
      </div>
        // <div>
        //     <Header />
        //     <div style={{ padding: 50 }}>
        //         <Outlet />
        //     </div>
        // </div>
    );
}

export default Layout