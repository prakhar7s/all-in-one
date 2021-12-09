import CustomLink from "../resued-components/custom-link/custom-link";

import Avatar from "@mui/material/Avatar";

import "./intro-card.css";
import { contactLinks } from "../../assets/data/contact-links";

const IntroCard = () => {
  return (
    <div className="rounded p-1 my-4 b-shadow intro-card">
      <div className="row p-2">
        <div className="col-4 col-md-2 pt-2">
          <div className="d-flex justify-content-center">
            <Avatar
              alt="Prakhar Shrivastava"
              src="https://avatars.githubuserconent.com/u/56044776?v=4"
              sx={{ width: 85, height: 85 }}
            />
          </div>
        </div>
        <div className="col">
          <p className="name font-sans-pro mb-2 pb-2 text-start w-100">
            Hi, I'm Prakhar Shrivastava!
          </p>

          <div className="d-flex flex-wrap align-items-center my-2 flex-gap justify-content-start justify-content-md-start">
            {contactLinks.map((link) => (
              <CustomLink key={link.id} {...link} />
            ))}
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-0 col-md-2"></div>
        <div className="col about-me">
          <p className="font-sans-pro">
            I love to build, and I love working on impactful products with
            talented people.
          </p>
          <p className="font-sans-pro">
            I'm currently a mobile app developer intern @ APICon. I'm also
            interned at Bread, an exciting project, and writing for
            GeeksforGeeks, a programming publication with billions of visits
            annually.
          </p>
          <p className="font-sans-pro">
            In my free time, I write articles on my blog, build fun
            side-projects, and occasionally do computer science research at
            institutions like Boston University. I'm also a student, so school
            is a big part of my life too.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
