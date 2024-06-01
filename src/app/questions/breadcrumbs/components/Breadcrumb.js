import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
    let { pathname } = useLocation();

    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <div className='breadcrumbs'>
            {pathnames.length > 0 && <Link to='/'> Home </Link>}
            {pathnames.map((name, index) => {
                // all link is clickable except last link.
                const isLastLink = index === pathnames.length - 1;

                return isLastLink ? (
                    <span key={index}> / {name}</span>
                ) : (
                    <Link key={name} to={name}>
                        <span key={index}> / {name}</span>
                    </Link>
                );
            })}
        </div>
    );
}
