import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import day from "dayjs";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = createdAt ? day(createdAt).format("MMM Do, YYYY") : "N/A";

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company?.charAt(0) || "C"}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation || "Unknown"} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType || "Unknown"} />
          <div className={`status ${jobStatus || "default-status"}`}>
            {jobStatus || "Unknown"}
          </div>
        </div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form
            method="post"
            action={`../delete-job/${_id}`}
            onSubmit={(e) => {
              if (!window.confirm("Are you sure you want to delete this job?")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
