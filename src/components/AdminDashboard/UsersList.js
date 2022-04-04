import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import UserInformation from "./UserInformation";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useStyles } from "./style";
import { Modal, Drawer, Space } from "antd";
import { padding } from "@mui/system";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#64748b",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const baseURL = "https://akagera-center.herokuapp.com";
  const [users, setUsers] = React.useState([]);

  console.log("users:", users);

  const showLargeDrawer = () => {
    setVisible1(true);
  };
  const onClose = () => {
    setVisible1(false);
  };
  const userHandle = async () => {
    let showUsr = showUsers;
    setIsLoading(true);
    await axios.get(baseURL + "/user").then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
    if (users != null) {
      setIsLoading(false);
      setShowUsers(!showUsr);
    }
  };

  const handleDelete = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

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

      <Drawer
        width={1300}
        style={{ marginTop: "90px" }}
        title="Review"
        placement="right"
        size="large"
        onClose={onClose}
        visible={visible1}
        extra={
          <Space>
            <Button onClick={onClose}>Reject</Button>
            <Button onClick={onClose}>Approve</Button>
          </Space>
        }
      >
        <UserInformation />
      </Drawer>
      <div
        onClick={userHandle}
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          margin: "5px 0",
          borderRadius: "5px",
          cusor: "pointer",
          padding: "5px",
          marginTop: "40px",
          width: "fit-content",
        }}
      >
        {showUsers ? (
          <b style={{ color: "white" }}>Hide </b>
        ) : (
          <b style={{ color: "white" }}>Show </b>
        )}
        Users
      </div>
      {isLoading ? (
        <div>
          loading...
          <LoadingSpinner />
        </div>
      ) : (
        <TableContainer component={Paper}>
          {showUsers ? (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name </StyledTableCell>
                  <StyledTableCell align="center">Phone</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Option</StyledTableCell>
                  <StyledTableCell align="center">More Options</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users != null ? (
                  users.map((user) => (
                    <StyledTableRow key={user.fullName}>
                      <StyledTableCell component="th" scope="row">
                        {user.fullName}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {user.phone}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {user.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <div style={{ display: "flex" }}>
                          <div
                            style={{
                              backgroundColor: "#1976d2",
                              cusor: "pointer",
                              color: "white",
                              borderRadius: "5px",
                              fontSize: "14px",
                              padding: "0px 5px",
                              width: "fit-content",
                            }}
                          >
                            <DeleteIcon padding="20px" color="red" />
                          </div>
                          <div
                            style={{
                              backgroundColor: "#1976d2",
                              fontSize: "14px",
                              cusor: "pointer",
                              color: "white",
                              borderRadius: "5px",
                              margin: " 0 5px",
                              width: "fit-content",
                            }}
                          >
                            <ModeEditIcon padding="20px" color="red" />
                          </div>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          variant="outlined"
                          style={{ float: "left", flex: "flex" }}
                          onClick={showLargeDrawer}
                        >
                          <ViewComfyIcon />
                          Read More
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <div>No user user in db</div>
                )}
              </TableBody>
            </Table>
          ) : null}
        </TableContainer>
      )}
    </React.Fragment>
  );
};

export default UserList;
