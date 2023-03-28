import React from "react";
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Link from "next/link";
import NavBarData, {NavBarItem, NavBarSection} from "@/uiDataHolders/NavBarData";

interface HomeNavBarProps {
    data: NavBarData
}

const HomeSideMenu = ({data}: HomeNavBarProps) => {

    const navSection = (section: NavBarSection) => (
        <List>
            <Typography color="text.secondary" marginBottom={1}>{section.title}</Typography>
            {navButtons(section.items)}
            <Divider/>
        </List>
    )

    const navButtons = (items: NavBarItem[]) => (items.map(item =>
        <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name}/>
            </ListItemButton>
        </ListItem>
    ))

    return (
        <Box padding={2}>{data.sections.map(navSection)}</Box>
    );
};

export default HomeSideMenu;