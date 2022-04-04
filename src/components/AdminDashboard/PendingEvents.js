import React from "react"
import { Row, Col } from "antd"
import { useStyles } from "./style"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import Collapse from "@mui/material/Collapse"
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined"
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined"
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined"
import PersonIcon from "@mui/icons-material/Person"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import MapIcon from "@mui/icons-material/Map"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

const PendingEvents = () => {
  const classes = useStyles()
  const [expended, setExpended] = React.useState(false)

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 5 }}
          style={{ marginBottom: "30px" }}
        >
          <Col className="gutter-row" span={16}>
            <div className={classes.EventContainer}>
              <h1 className={classes.EventTitle}>
                <strong>What is Lorem Ipsum?</strong>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>

              <div>
                <button
                  onClick={() => setExpended(!expended)}
                  className={classes.toogleBtn}
                >
                  {expended ? "Expand Less" : "Read More"}
                  {expended ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </button>
                <Collapse in={expended} timeout="auto" unmountOnExit>
                  <h4 className="event__description__sub-heading">
                    <strong>Event Schedule</strong>
                  </h4>
                  <div className="event__details_items">
                    <div>
                      <DateRangeOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Start Date</strong>
                      </span>
                      <span className="details__item__two">
                        Friday 31-01-2022,07:00
                      </span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <EventAvailableOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>End Date</strong>
                      </span>
                      <span className="details__item__two">
                        Friday 31-01-2022,05:00
                      </span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <PendingActionsOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Status</strong>
                      </span>
                      <span className="details__item__two"> Pendig</span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <MapIcon className="Icon" style={{ fontSize: "20px" }} />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Venue</strong>
                      </span>
                      <span className="details__item__two">
                        Kigali View Hotel
                      </span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <PersonIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Organizer</strong>
                      </span>
                      <span className="details__item__two">Jean De Dieu</span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <LocationOnOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Address</strong>
                      </span>
                      <span className="details__item__two">
                        KK 23 Ave,Kigali
                      </span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <PhoneAndroidOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Phone</strong>
                      </span>
                      <span className="details__item__two"> +250784860836</span>
                    </div>
                  </div>
                  <div className="event__details_items">
                    <div>
                      <EmailOutlinedIcon
                        className="Icon"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;
                      <span className="detail__item__one">
                        <strong>Email</strong>
                      </span>
                      <span className="details__item__two">
                        Kigali View Hotel
                      </span>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div style={{ marginTop: "40px" }}>
                <button className={classes.ApproveBtn}>Approve</button>
                <button className={classes.RejectBtn}>Reject</button>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img
                className={classes.EventImage}
                src="https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg"
                alt="event_title"
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default PendingEvents
