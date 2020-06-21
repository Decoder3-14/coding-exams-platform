import React from 'react';


export default function Nav(links, current) {
    return (
        <nav aria-label="breadcrumb" className="">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                {links.map(link => (
                    <li className="breadcrumb-item"><a href={link.link}>{link.title}</a></li>
                ))}
                <li className="breadcrumb-item active" aria-current="page">{current}</li>
            </ol>
        </nav>
    );
}
