import React, { useState } from "react";
import { explorer } from "./data/folderData";
import Folder from "./components/Folder";

export default function FileExplorer() {
    const [explorerData, setExplorerData] = useState(explorer);

    return (
        <div className='App'>
            <Folder explorerData={explorerData} />
        </div>
    );
}
