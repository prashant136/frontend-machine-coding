//  In a dashboard application, you might have a table that displays a large dataset and allows for sorting.
import React, { useState, useMemo } from "react";

const data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Laura", age: 23 },
    { id: 4, name: "Fiona", age: 40 },
    { id: 5, name: "Steve", age: 55 },
    { id: 6, name: "Victor", age: 37 },
    { id: 7, name: "Quincy", age: 21 },
    { id: 8, name: "Nina", age: 28 },
    { id: 9, name: "David", age: 35 },
    { id: 10, name: "Mike", age: 44 },
    { id: 11, name: "Eva", age: 51 },
    { id: 12, name: "Oscar", age: 30 },
    { id: 13, name: "Karen", age: 26 },
    { id: 14, name: "Ian", age: 59 },
    { id: 15, name: "Yara", age: 24 },
    { id: 16, name: "Paula", age: 43 },
    { id: 17, name: "George", age: 29 },
    { id: 18, name: "Charlie", age: 33 },
    { id: 19, name: "Xander", age: 49 },
    { id: 20, name: "Tina", age: 31 },
    { id: 21, name: "Rachel", age: 39 },
    { id: 22, name: "Wendy", age: 27 },
    { id: 23, name: "Jack", age: 42 },
    { id: 24, name: "Hannah", age: 53 },
    { id: 25, name: "Zane", age: 34 },
    { id: 26, name: "Uma", age: 36 },
    { id: 27, name: "Laura", age: 32 },
    { id: 28, name: "Fiona", age: 38 },
    { id: 29, name: "Steve", age: 57 },
    { id: 30, name: "Victor", age: 22 },
    { id: 31, name: "Quincy", age: 41 },
    { id: 32, name: "Nina", age: 20 },
    { id: 33, name: "David", age: 48 },
    { id: 34, name: "Mike", age: 50 },
    { id: 35, name: "Eva", age: 45 },
    { id: 36, name: "Oscar", age: 56 },
    { id: 37, name: "Karen", age: 58 },
    { id: 38, name: "Ian", age: 46 },
    { id: 39, name: "Yara", age: 43 },
    { id: 40, name: "Paula", age: 39 },
    { id: 41, name: "George", age: 55 },
    { id: 42, name: "Charlie", age: 29 },
    { id: 43, name: "Xander", age: 51 },
    { id: 44, name: "Tina", age: 40 },
    { id: 45, name: "Rachel", age: 21 },
    { id: 46, name: "Wendy", age: 25 },
    { id: 47, name: "Jack", age: 54 },
    { id: 48, name: "Hannah", age: 35 },
    { id: 49, name: "Zane", age: 27 },
    { id: 50, name: "Uma", age: 33 },
    { id: 51, name: "Laura", age: 23 },
    { id: 52, name: "Fiona", age: 47 }
];

export default function DataSetFIlter() {
    const [sortField, setSortField] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const sortedData = useMemo(() => {
        console.log("Sorting data...");
        return [...data].sort((a, b) => {
            if (a[sortField] < b[sortField])
                return sortOrder === "asc" ? -1 : 1;
            if (a[sortField] > b[sortField])
                return sortOrder === "asc" ? 1 : -1;
            return 0;
        });
    }, [sortField, sortOrder]);

    return (
        <div>
            <h1>Data Table</h1>
            <button onClick={() => setSortField("name")}>Sort by Name</button>
            <button onClick={() => setSortField("age")}>Sort by Age</button>
            <button
                onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
            >
                Toggle Order
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
