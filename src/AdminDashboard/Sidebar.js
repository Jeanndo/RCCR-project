import * as React from "react"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import CategoryIcon from "@mui/icons-material/Category"
import PeopleIcon from "@mui/icons-material/People"
import AddBoxIcon from "@mui/icons-material/AddBox"
import TimelineIcon from "@mui/icons-material/Timeline"
import SellIcon from "@mui/icons-material/Sell"
import Collapse from "@mui/material/Collapse"
import EmailIcon from "@mui/icons-material/Email"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import { useStyles } from "./style"

const MainListItems = ({
  handleAnalytics,
  handlePending,
  handleHappened,
  handleCreateEvent,
  handleUsers,
  handleCreateTickets,
  handleOrders,
  setOpen,
}) => {
  const classes = useStyles()
  const [event, setEvent] = React.useState(true)
  const [ticket, setTicket] = React.useState(true)

  const handleEvents = () => {
    setEvent(!event)
  }

  const handleTicket = () => {
    setTicket(!ticket)
  }
  const handleDrawer = () => {
    setOpen(true)
  }
  return (
    <React.Fragment>
      <div>
        <ListItemButton onClick={handleUsers}>
          <ListItemIcon>
            <PeopleIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Clients" className={classes.labels} />
        </ListItemButton>
        <ListItemButton onClick={handleOrders}>
          <ListItemIcon>
            <EmailIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Messages" className={classes.labels} />
        </ListItemButton>
        <ListItemButton onClick={handleUsers}>
          <ListItemIcon>
            <DirectionsRunIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Requests" className={classes.labels} />
        </ListItemButton>
      </div>
    </React.Fragment>
  )
}

export default MainListItems
