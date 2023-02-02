import React, { useContext } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

import { List, ListItem, Button, ListItemText } from '@mui/material'
import ContextProvider from '../../context'

function Sidebar() {
  const { list, setModalOpen } = useContext(ContextProvider)

  return (
    <div className="sidebar-wrapper">
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
              {item.icon}
              <ListItemText
                style={{ paddingTop: '5px', paddingLeft: '5px' }}
                className="sidebar-list-item-text"
              >
                {item.text}
              </ListItemText>
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
            className="sidebar-list-item-link create-button"
            variant="contained"
            color="success"
          >
            Create Project
          </Button>
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
