import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>
      <p>
        Rebum invidunt gubergren vero et sit nonumy kasd sed stet. Dolor dolores
        lorem kasd est ipsum erat sit labore erat. Clita stet dolor dolores
        magna diam ea sadipscing et, et sed gubergren sanctus sadipscing. Diam
        sadipscing aliquyam ipsum amet justo ipsum lorem lorem duo. Amet dolor
        amet dolores tempor magna ut gubergren diam. Nonumy amet nonumy clita at
        et labore.
      </p>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default About;
