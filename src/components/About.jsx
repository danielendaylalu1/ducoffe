/* eslint-disable react/prop-types */
const About = ({ checked, active }) => {
  return (
    <div
      className={`item item-wide item-tall about box-column ${
        checked ? "dark" : "light-frth"
      } ${!(active === "All" || active === "About") && "hide"}`}
    >
      <h1>Daniel Endaylalu</h1>
      <h3>
        I am an experienced Front end Developer with a proven track record in
        developing high-quality websites and web applications. My expertise lies
        in developing attractive , dynamic and functional website using the
        latest web frameworks and libraries.
      </h3>
      <h3>
        I possess in-depth knowledge of popular front end frameworks and
        libraries such as ✅React, ✅Next.js and ✅svelte.
      </h3>
      <h3>
        My projects involve seamless API integration for enhanced
        functionalities, pixel perfect design conversion, clean and optimize
        written codes.I adhere to Agile methodologies, ensuring an adaptive,
        flexible, and result-oriented approach in every project I undertake.
      </h3>
      {/* <h3>Dedicated and Passionate Full-stack Web Developer.</h3>
      <h4>
        As a Full-stack Developer, I possess skills in{" "}
        <span className="underline">Javascript</span>, HTML, Css,{" "}
        <span className="underline">React</span>, Redux,{" "}
        <span className="underline">Node.js</span>, Tailwind, ,
        <span className="underline">Express.js</span>, Sql and{" "}
        <span className="underline">MongoDB</span>. I excel in developing, and
        maintaining responsive websites and web applications that offer a
        seamless user experience.
        {show && (
          <p className="bottom-p">
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean, optimized code and utilizing cutting-edge{" "}
            <span className="underline">full-stack development</span> tools and
            techniques. I am proficient in both{" "}
            <span className="underline">front-end</span> and{" "}
            <span className="underline">back-end</span> development, including
            database management and server-side programming. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        )}
        <span className="about-more" onClick={() => setShow(!show)}>
          {show ? "Hide" : "More"}
        </span>
      </h4> */}
    </div>
  );
};

export default About;
