"use client";
import DarkMode from "./questions/dark-light-mode";
import EMICalculator from "./questions/emi-calculator";
import FileExplorer from "./questions/file-explorer";
import GridLight from "./questions/grid-lights";
import LikeButton from "./questions/like-button";
import Pagination from "./questions/pagination";
import PasswordGenerator from "./questions/password-generator";
import ProgressBar from "./questions/progress-bar";
import UseEffectPolyfill from "./questions/useEffect-polyfill";
import UseMemoPolyfill from "./questions/useMemo-polyfill";

export default function Home() {
    return (
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
            {/* <FileExplorer /> */}
            {/* <Pagination /> */}
            {/* <EMICalculator /> */}
            {/* <PasswordGenerator /> */}
            {/* <ProgressBar /> */}
            {/* <UseMemoPolyfill /> */}
            {/* <UseEffectPolyfill /> */}
            {/* <GridLight /> */}
            {/* <LikeButton /> */}
            <DarkMode />
        </div>
    );
}
