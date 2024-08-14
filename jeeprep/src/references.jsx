import React from "react"; // Assuming the CSS file is in ./assets/
import style from "./references.module.css";
import { Link } from "react-router-dom";
import phypic from "./assets/physics/physics.jpg";
import chempic from "./assets/chem/chemistry.jpg";
import mathpic from "./assets/maths/maths.jpg";
import Footer from "./footer";
import HCVerma1 from "./assets/physics/HC Verma - Volume-1.pdf";
import HCVerma2 from "./assets/physics/HC Verma - Volume-2.pdf";
import previous from "./assets/physics/previous.pdf";
import chem1 from "./assets/chem/chem1.pdf";
import chem2 from "./assets/chem/chem2.pdf";
import math1 from "./assets/maths/math1.pdf";
import math2 from "./assets/maths/math2.pdf";
const References = () => {
  return (
    <div>
      <div className={style.top}>
        <div className={style.logo}>JEE-PREP</div>
        <div className={style.home}>
          <Link to="/home">HOME</Link>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.main}>
          <div className={style.physics}>
            <img src={phypic} alt="Physics" />
            <h2>Physics :-</h2>
            <p>
              Physics in the JEE exams covers a wide range of topics, including
              classical mechanics, electromagnetism, thermodynamics, optics,
              modern physics, and more. Preparation for JEE physics typically
              involves a combination of understanding theoretical concepts,
              practicing problem-solving, and mastering time management since
              the exam is known for its time pressure. Many students use a
              variety of resources, including textbooks, online tutorials,
              practice papers, and coaching classes, to excel in JEE physics and
              the exam as a whole.
            </p>
            <h4>For Physics :-</h4>
            <ul>
              <li>
                <a href={HCVerma1}>Download H.C VERMA-1</a>
              </li>
              <li>
                <a href={HCVerma2}>Download H.C VERMA-2</a>
              </li>
            </ul>
          </div>
          <div className={style.maths}>
            <img src={mathpic} alt="Mathematics" />
            <h2>Mathematics :-</h2>
            <p>
              Mathematics is a critical component of both JEE Main and JEE
              Advanced. Time management is crucial during the exam. You'll have
              a limited amount of time to solve a significant number of
              questions. Practicing solving questions under timed conditions is
              essential to improve your speed and accuracy. Learn various
              problem-solving techniques, shortcuts, and strategies to tackle
              different types of mathematical problems efficiently. These skills
              can save you time during the exam.
            </p>
            <h4>For Maths :-</h4>
            <ul>
              <li>
                <a href={math1}>Download Ncert part-1</a>
              </li>
              <li>
                <a href={math2}>Download Ncert part-2</a>
              </li>
            </ul>
          </div>
          <div className={style.chamistry}>
            <img src={chempic} alt="Chemistry" />
            <h2>Chemistry :-</h2>
            <p>
              JEE Chemistry assesses candidates' knowledge of chemical concepts,
              their ability to apply these concepts to solve problems, and their
              aptitude for understanding various chemical phenomena. A
              combination of conceptual understanding, practice, and familiarity
              with different types of chemical reactions and structures is
              essential for success in this section.
            </p>
            <h4>For Chemistry :-</h4>
            <ul>
              <li>
                <a href={chem1}>Download Ncert part-1</a>
              </li>
              <li>
                <a href={chem2}>Download Ncert part-2</a>
              </li>
            </ul>
            <h4>For Previous :-</h4>
            <ul>
              <li>
                <a href={previous}>Download previous papers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default References;
