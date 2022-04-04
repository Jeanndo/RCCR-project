// @ts-nocheck
import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useStyles } from "./style"

const data = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 1000,
  },
  {
    name: "Mar",
    Sales: 8000,
  },
  {
    name: "Apr",
    Sales: 2000,
  },
  {
    name: "May",
    Sales: 10000,
  },
  {
    name: "June",
    Sales: 5000,
  },
  {
    name: "July",
    Sales: 3000,
  },
  {
    name: "Aug",
    Sales: 4000,
  },
  {
    name: "Sept",
    Sales: 2000,
  },
  {
    name: "Oct",
    Sales: 6000,
  },
  {
    name: "Nov",
    Sales: 4000,
  },
  {
    name: "Dec",
    Sales: 20000,
  },
]
const Analytics = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className={classes.Title}> Sales Analytics</h1>
          </Grid>
          <Grid item xs={12}>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal=""
                  vertical=""
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Sales"
                  stroke="#b45309"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Analytics
