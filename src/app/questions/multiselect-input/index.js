import React, { useState, useEffect, useRef } from "react";
import Pill from "./components/Pill";
import "./style.css";

export default function MultiSelect() {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const inputRef = useRef(null);
    const [activeSuggestion, setActiveSuggestion] = useState(0);

    // handling duplication suggestions
    const [selectedUserSet, setSelectedUserSet] = useState(new Set([]));

    const handleSelectUser = (user) => {
        setSelectedUsers([...selectedUsers, user]);
        setSearchTerm("");
        setSuggestions([]);
        // automatic focus to input
        inputRef.current.focus();
        // keep unique user's email (prevent duplication)
        setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    };

    const handleRemoveUser = (user) => {
        const updatedUsers = selectedUsers.filter(
            (selectedUser) => selectedUser.id !== user.id
        );
        setSelectedUsers(updatedUsers);

        const updatedEmail = new Set(selectedUserSet);
        updatedEmail.delete(user.email);
        setSelectedUserSet(updatedEmail);
    };

    const handleKeyDown = (e) => {
        if (
            e.key === "Backspace" &&
            e.target.value === "" &&
            selectedUsers.length > 0
        ) {
            const lastUser = selectedUsers[selectedUsers.length - 1];
            handleRemoveUser(lastUser);
            setSuggestions([]);
        } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
            e.preventDefault();
            setActiveSuggestion((prevIndex) => {
                return prevIndex < suggestions.users.length - 1
                    ? prevIndex + 1
                    : prevIndex;
            });
        } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
            e.preventDefault();
            setActiveSuggestion((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : 0
            );
        } else if (
            e.key === "Enter" &&
            activeSuggestion >= 0 &&
            activeSuggestion < suggestions.users.length
        ) {
            handleSelectUser(suggestions.users[activeSuggestion]);
        }
    };

    useEffect(() => {
        const fetchUsers = () => {
            setActiveSuggestion(0);
            if (searchTerm.trim() === "") {
                setSuggestions([]);
                return;
            }

            fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => setSuggestions(data))
                .catch((err) => {
                    console.error(err);
                });
        };

        fetchUsers();
    }, [searchTerm]);

    return (
        <div className='user-search-container'>
            <div className='user-search-input'>
                {/* Pills */}
                {selectedUsers.map((user) => {
                    return (
                        <Pill
                            key={user.email}
                            image={user.image}
                            text={`${user.firstName} ${user.lastName}`}
                            onClick={() => handleRemoveUser(user)}
                        />
                    );
                })}
                {/* Input feild woth search suggestion */}
                <div>
                    <input
                        ref={inputRef}
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search for User...'
                        onKeyDown={handleKeyDown}
                    />
                    {/* search suggestion - at every render selectedUsers.some(callback) compares with suggestions state[] then render <li>. its a heavy calculation */}
                    {/* <ul className='suggestions-list'>
                        {suggestions?.users?.map((user, index) => {
                            return selectedUsers.length &&
                                selectedUsers.some(
                                    (x) => x.email === user.email
                                ) ? (
                                <></>
                            ) : (
                                <li
                                    key={user.email}
                                    onClick={() => handleSelectUser(user)}
                                >
                                    <img
                                        src={user.image}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                    <span>
                                        {user.firstName} {user.lastName}
                                    </span>
                                </li>
                            );
                        })}
                    </ul> */}

                    {/* implement Set() - optimised approch */}
                    <ul className='suggestions-list'>
                        {suggestions?.users?.map((user, index) => {
                            return !selectedUserSet.has(user.email) ? (
                                <li
                                    className={
                                        index === activeSuggestion
                                            ? "active"
                                            : ""
                                    }
                                    key={user.email}
                                    onClick={() => handleSelectUser(user)}
                                >
                                    <img
                                        src={user.image}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                    <span>
                                        {user.firstName} {user.lastName}
                                    </span>
                                </li>
                            ) : (
                                <></>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
