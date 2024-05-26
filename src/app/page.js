"use client";
import EMICalculator from "./questions/emi-calculator";
import FileExplorer from "./questions/file-explorer";
import Pagination from "./questions/pagination";

export default function Home() {
    return (
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
            {/* <FileExplorer /> */}
            {/* <Pagination /> */}
            <EMICalculator />
        </div>
    );
}
