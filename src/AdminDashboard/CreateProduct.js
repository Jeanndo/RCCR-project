import React from 'react'
import { useStyles } from './style'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import UserList from './ProductList'
import { Divider } from '@mui/material'

const Users = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <span className={classes.Title}> Create a Product</span>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ sx: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <form className={classes.form}>
                <Box sx={{ width: '100%' }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ sx: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <input
                        type="text"
                        placeholder="Product Name"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="Number"
                        placeholder="First Price"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="number"
                        placeholder="Second Price"
                        className={classes.Inputs}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <select className={classes.Inputs}>
                        <option>Category1</option>
                        <option>Category2</option>
                        <option>Category3</option>
                        <option>Category4</option>
                      </select>
                    </Grid>
                    <Grid item xs={12}>
                      <input type="file" className={classes.Inputs} />
                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit" className={classes.SendBtn}>
                        Add
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <h1>
                <span className={classes.Title}>Products</span>
              </h1>

              <UserList />
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default Users
