import "./footer.css";
import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const socialMediaAccounts = [
  {
    id: 1,
    name: "Github",
    icon: <GitHubIcon />,
    url: "https://github.com/prakhar7s",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/prakhar7s",
  },
  {
    id: 3,
    name: "Email",
    icon: <EmailIcon />,
    url: "mailto:prakharshrivastava971@gmail.com",
  },
  {
    id: 4,
    name: "Hacerrank",
    icon: <CodeIcon />,
    url: "https://www.hackerrank.com/prakhar7s",
  },
  {
    id: 5,
    name: "Resume",
    icon: <PersonIcon />,
    url: "https://drive.google.com/file/d/1mFo0aid38Kqb-H4YBvUUKg3pvyGHVx76/view",
  },
];

const localLinks = [
  {
    id: "12341",
    name: "Home",
    path: "/",
  },
  {
    id: "12342",
    name: "About",
    path: "/about",
  },
  {
    id: "12343",
    name: "Blog",
    path: "/blogs",
  },

  {
    id: "12344",
    name: "Projects",
    path: "/projects",
  },
  {
    id: "12345",
    name: "Resume",
    path: "/resume",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="row pt-4">
        <div className="local-links d-flex justify-content-center align-items-center flex-gap my-3">
          {localLinks.map((link) => (
            <Link
              key={link.id}
              title={link.name}
              to={link.path}
              className="font-sans-pro"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="social-media-accounts d-flex flex-gap justify-content-center align-items-center my-2">
          {socialMediaAccounts.map((acc) => (
            <a
              key={acc.id}
              title={acc.name}
              href={acc.url}
              target="_blank"
              rel="noreferrer"
            >
              <Avatar sx={{ bgcolor: grey[900] }} variant="rounded">
                {acc.icon}
              </Avatar>
            </a>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center my-4 contact-details">
          <p className="m-0">© Prakhar Shrivastava 2021. Contact me at</p>
          <a
            title="contact mail"
            href="mailto:prakharshrivastava971@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 special-link"
          >
            prakharshrivastava971@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
