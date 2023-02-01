import React, { useContext } from 'react'
import './style.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

import { List, ListItem, Button, ListItemText } from '@mui/material'
import ContextProvider from '../../context'

function Sidebar() {
  const { list, setModalOpen } = useContext(ContextProvider)

  return (
    <div className="sidebar-wrapper">
      <MenuIcon />
      <List className="sidebar-list-wrapper">
        {list.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className="sidebar-list-item"
          >
            <NavLink
              to={item.link}
              className="sidebar-list-item-link"
            >
              <ListItemText>{item.text}</ListItemText>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List className="sidebar-list-wrapper">
        <ListItem
          disablePadding
          className="sidebar-list-item"
        >
          <Button
            onClick={() => setModalOpen(true)}
            className="sidebar-list-item-link"
          >
            <ListItemText>Create Project</ListItemText>
          </Button>
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
