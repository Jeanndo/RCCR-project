// @ts-nocheck
import * as React from "react"
import { useHistory } from "react-router-dom"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import MuiDrawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Avatar from "@mui/material/Avatar"
import SideBar from "./Sidebar"
import { useStyles } from "./style"
import Analytics from "./Analytics"
import PendingEvents from "./PendingEvents"
import CreateEvent from "./CreateProduct"
import CreateTicket from "./CreateCategory"
import Clients from "./UsersList"
import Orders from "./Orders"

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

const DashboardContent = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [isPending, setIsPending] = React.useState(false)
  const [isHappened, setIsHappened] = React.useState(false)
  const [isCreateEvent, setIsCreateEvent] = React.useState(false)
  const [isUsers, setIsUsers] = React.useState(true)
  const [isCreateTicket, setIsCreateTicket] = React.useState(false)
  const [isOder, setIsOrder] = React.useState(false)
  const history = useHistory()
  const [Content, setContent] = React.useState(<Clients/>)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const logoutHandle = () => {
    localStorage.clear();
    history.push("/")
  }
  const handleAnalytics = () => {
    setIsPending(false)
    setIsHappened(false)
    setIsCreateEvent(false)
    setIsCreateTicket(false)
    setIsUsers(false)
    setIsOrder(false)
    setOpen(true)
  }
  const handlePending = () => {
    setIsPending(true)
    setIsHappened(false)
    setIsCreateEvent(false)
    setIsCreateTicket(false)
    setIsUsers(false)
    setIsOrder(false)
    setOpen(true)
  }
  const handleHappened = () => {
    setIsPending(false)
    setIsHappened(true)
    setIsCreateEvent(false)
    setIsCreateTicket(false)
    setIsUsers(false)
    setIsOrder(false)
    setOpen(true)
  }
  const handleCreateEvent = () => {
    setIsPending(false)
    setIsHappened(false)
    setIsUsers(false)
    setIsCreateTicket(false)
    setIsOrder(false)
    setIsCreateEvent(true)
    setOpen(true)
  }
  const handleUsers = () => {
    setIsPending(false)
    setIsHappened(false)
    setIsCreateEvent(false)
    setIsCreateTicket(false)
    setIsOrder(false)
    setIsUsers(true)
    setOpen(true)
  }
  const handleCreateTickets = () => {
    setIsPending(false)
    setIsHappened(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setIsOrder(false)
    setIsCreateTicket(true)
    setOpen(true)
  }

  const handleOrders = () => {
    setIsPending(false)
    setIsHappened(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setIsCreateTicket(false)
    setIsOrder(true)
    setOpen(true)
  }

  React.useEffect(() => {
    if(!JSON.parse(sessionStorage.getItem("rccRwUser")).data.user.lastName){
      history.push('/')
    }
    if (isUsers) {
      setContent(<Clients />)
    }
    if (isPending) {
      setContent(<PendingEvents />)
    }

    if (isCreateEvent) {
      setContent(<CreateEvent />)
    }
    if (isUsers) {
      setContent(<Clients />)
    }
    if (isCreateTicket) {
      setContent(<CreateTicket />)
    }
    if (isOder) {
      setContent(<Orders />)
    }
  }, [isPending, isHappened, isCreateEvent, isUsers, isCreateTicket, isOder])
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
            className={classes.toolBar}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              DASHBOARD

            </Typography>
            <IconButton color="inherit">
            {localStorage.getItem('user')?
              <Avatar
                alt={JSON.parse(localStorage.getItem('user')).fullName}
              />:<Avatar
              alt="Admin"
            />
            }
            </IconButton>
            <button className={classes.LogoutBtn} onClick={logoutHandle}> Logout</button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className={classes.Icons} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <SideBar
              setOpen={setOpen}
              handleAnalytics={handleAnalytics}
              handlePending={handlePending}
              handleHappened={handleHappened}
              handleCreateEvent={handleCreateEvent}
              handleUsers={handleUsers}
              handleCreateTickets={handleCreateTickets}
              handleOrders={handleOrders}
            />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
          // className={classes.background}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {Content}

              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
