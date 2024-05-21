import React, { useState } from "react";
import styles from "./folder.module.css";
import { TbFolderPlus } from "react-icons/tb";
import { CgFileAdd } from "react-icons/cg";
import { LuFileText } from "react-icons/lu";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

export default function Folder({ explorerData }) {
    // console.log(explorerData);
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
        text: ""
    });

    const handleInput = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            ...showInput,
            visible: !showInput.visible,
            isFolder: isFolder
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            // logic to add folder ...

            setExpand(false);
        }
    };

    if (explorerData.isFolder) {
        return (
            <div>
                <div
                    className={styles.folder}
                    onClick={() => setExpand(!expand)}
                >
                    <span className={styles.folderName}>
                        {expand ? (
                            <FcOpenedFolder size={20} />
                        ) : (
                            <FcFolder size={20} />
                        )}
                        {explorerData.name}
                    </span>
                    <div className={styles.folderBtn}>
                        <TbFolderPlus
                            size={22}
                            onClick={(e) => handleInput(e, true)}
                        />
                        <CgFileAdd
                            size={20}
                            onClick={(e) => handleInput(e, false)}
                        />
                    </div>
                </div>
                {showInput.visible && (
                    <div className={styles.inputBox}>
                        {showInput.isFolder ? (
                            <FcFolder size={20} />
                        ) : (
                            <LuFileText size={20} />
                        )}
                        <input
                            type='text'
                            onKeyDown={onAddFolder}
                            autoFocus
                            onBlur={() =>
                                setShowInput({
                                    ...showInput,
                                    visible: !showInput.visible
                                })
                            }
                        />
                    </div>
                )}
                <div
                    style={{
                        display: expand ? "block" : "none",
                        marginLeft: 20
                    }}
                >
                    {explorerData.items.map((exp) => {
                        return <Folder key={exp.id} explorerData={exp} />;
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <span className={styles.file}>
                <LuFileText size={20} /> {explorerData.name}
            </span>
        );
    }
}
