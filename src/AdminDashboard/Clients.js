import React from "react"
import { useStyles } from "./style"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import UserList from "./UsersList"

const Users = () => {
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ sx: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <h1>
                <span className={classes.Title}>Clients</span>
              </h1>

              <UserList/>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default Users
