import React, { useState } from "react";
import SearchFilter from "./examples/SearchFilter";
import DataSetFIlter from "./examples/DataSetFIlter";
import TodosApp from "./examples/Todolist/App";
import Polyfill from "./polyfill/App";

export default function UseMemoPolyfill() {
    return (
        <>
            {/* ------------- examples for useMemo ----------- */}
            {/* <SearchFilter /> */}
            {/* <DataSetFIlter /> */}
            {/* <TodosApp /> */}

            {/* ------------- useMemo hook polyfill ----------- */}
            <Polyfill />
        </>
    );
}
