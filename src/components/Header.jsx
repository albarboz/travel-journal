import React from "react";
import { GlobeIcon } from './Icon'


export default function Header() {
    return (
        <header className="header">
            <div className="header__title">
                <GlobeIcon />
                <p>my travel journal.</p>
            </div>
        </header>
    )
}