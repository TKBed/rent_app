import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Button from '@mui/material/Button'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <div className="resources">
        <div className="sub-heading">Resources</div>
      </div>
      <div className="spacing" />
      <div className="announcements">
        <div className="announcements-title">Announcements</div>
        <div className="announcements-table"></div>
      </div>
      <div className="spacing" />
      <div className="directory">
        <div className="menu">
          <div className="sub-heading">Menu</div>
        </div>
        <div className="top-space" />
        <div className="rent">
          <div className="sub-heading">Pay Rent</div>
          <div className="button-spacing" />
          <Button
            className="button-style"
            variant="contained"
            onClick={() => navigate('/rent')}
          >
            Click Here to Pay
          </Button>
        </div>
      </div>
    </div>
  )
}
export default HomePage
