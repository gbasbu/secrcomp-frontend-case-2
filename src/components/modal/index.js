import React, { useContext, useState } from 'react'
import ContextProvider from '../../context'
import { Button, TextField, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material'

export default function Modal() {
  const { modalOpen, setModalOpen, setProjects } = useContext(ContextProvider)

  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const clearForm = () => {
    setName('')
    setStartDate('')
    setEndDate('')
  }

  const handleCreate = () => {
    setProjects(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name: name,
        startDate: startDate,
        endDate: endDate,
        status: 'Next'
      }
    ])
    setModalOpen(prev => !prev)
    clearForm()
  }

  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(prev => !prev)}
      >
        <DialogTitle>Create Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Start Date"
            type="text"
            fullWidth
            variant="standard"
            value={startDate}
            onChange={event => setStartDate(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="End Date"
            type="text"
            fullWidth
            variant="standard"
            value={endDate}
            onChange={event => setEndDate(event.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ marginRight: '15px', paddingBottom: '20px' }}>
          <Button
            variant="contained"
            onClick={handleCreate}
            color="success"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
