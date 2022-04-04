import React from 'react'
import { useStyles } from './style'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import CategoryList from './CategoryList'

const CreateTicket = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <span className={classes.Title}>Create Category</span>
        <div>
          <form className={classes.form}>
            <Box sx={{ width: '100%' }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ sx: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <div>
                    <input
                      type="text"
                      placeholder="Category Name"
                      className={classes.Inputs}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Description"
                      className={classes.Inputs}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <button type="submit" className={classes.SendBtn}>
                    Create
                  </button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
        <Grid item xs={12}>
          <h1 className={classes.Title}> Categories</h1>
          <CategoryList />
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default CreateTicket
