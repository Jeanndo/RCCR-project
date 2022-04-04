import React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import StarRateIcon from "@mui/icons-material/StarRate"
import FiberNewIcon from "@mui/icons-material/FiberNew"
import { Button } from "@mui/material"
import { useStyles } from "./style"
import { Modal } from "antd"
import { alpha } from "@mui/material/styles"
import { pink } from "@mui/material/colors"
import Switch from "@mui/material/Switch"

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}))

const label = { inputProps: { "aria-label": "Switch demo" } }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b45309",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData(
    "Computer",
    "1000 FRW",
    "2000FRW",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Computer",
    "1000 FRW",
    "2000FRW",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Computer",
    "1000 FRW",
    "2000FRW",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Computer",
    "1000 FRW",
    "2000FRW",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Computer",
    "1000 FRW",
    "2000FRW",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
]

const UserList = () => {
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [featured, setFeatured] = React.useState(false)
  const [latest, setLatest] = React.useState(false)

  const handleDelete = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
  }

  const handleFeatured = () => {
    setFeatured((prev) => !prev)
  }
  const handleLatest = () => {
    setLatest((prev) => !prev)
  }
  return (
    <React.Fragment>
      <Modal
        className="Modal"
        title="Delete This ?"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <span style={{ color: "red" }}> Do you want To Delete This ?</span>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name </StyledTableCell>
              <StyledTableCell align="right">Firt Price </StyledTableCell>
              <StyledTableCell align="right">Second Price</StyledTableCell>
              <StyledTableCell align="right">Mark as(Featured)</StyledTableCell>
              <StyledTableCell align="right">Mark as (Latest)</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.calories}
                  <Switch {...label} defaultChecked color="primary" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.fat}
                  <Switch {...label} defaultChecked color="primary" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={handleFeatured}
                    style={{ border: "1px solid #f8ad74" }}
                    variant="outlined"
                  >
                    {featured ? "Featured?" : <StarRateIcon />}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={handleLatest}
                    style={{ border: "1px solid #f8ad74" }}
                    variant="outlined"
                  >
                    {latest ? "Latest?" : <FiberNewIcon />}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon className={classes.userTableIcons} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    onClick={handleDelete}
                    className={classes.userTableIcons}
                    style={{ color: "red" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default UserList
