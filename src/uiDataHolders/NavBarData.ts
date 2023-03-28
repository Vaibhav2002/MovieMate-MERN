import React from "react";

export interface NavBarSection {
    title: string
    items: NavBarItem[]
}

export interface NavBarItem {
    icon?: React.ReactNode

    name: string

    href: string
}

export default interface NavBarData {
    sections: NavBarSection[]
}