import React from "react";
import { Helmet } from "react-helmet";
import style from "./counselling.module.css";
import Cimage from "./assets/background_pic/counselling.jpg";
import { Link } from "react-router-dom";
import Footer from "./footer";
const Counselling = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Counselling</title>
        <script
          src="https://kit.fontawesome.com/5e85f26058.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div id={style.top}>
        <div id={style.logo}>JEE-PREP</div>
        <div className={style.home}>
          <Link to="/home">HOME</Link>
        </div>
      </div>
      <div id={style.body}>
        <div id={style.main}>
          <div id={style.box1}>
            <div className={style.element}>
              <i className="fa-solid fa-computer"></i>
              <div>
                <p>Registration</p>
              </div>
            </div>
            <div className={style.elementx}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={style.element}>
              <i className="fa-solid fa-chair"></i>
              <div>
                <p>Seat allocation</p>
              </div>
            </div>
            <div className={style.elementx}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={style.element}>
              <i className="fa-solid fa-reply"></i>
              <div>
                <p>Response</p>
              </div>
            </div>
            <div className={style.elementx}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={style.element}>
              <i className="fa-solid fa-flag"></i>
              <div>
                <p>Reporting</p>
              </div>
            </div>
            <div className={style.elementx}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={style.element}>
              <i className="fa-solid fa-check"></i>
              <div>
                <p>End/special rounds</p>
              </div>
            </div>
          </div>
          <img src={Cimage} alt="Counselling Background" />
          <h1>JOSAA :-</h1>
          <p>
            The Joint Seat Allocation Authority (JoSAA) is a
            government-established body in India responsible for overseeing the
            joint seat allocation process for admissions to various
            undergraduate engineering programs at Indian Institutes of
            Technology (IITs), National Institutes of Technology (NITs), Indian
            Institutes of Information Technology (IIITs), and other Government
            Funded Technical Institutes (GFTIs) in India.
          </p>
          <p>
            JoSAA was established to simplify the admission process for students
            by providing a common platform for centralized seat allocation and
            counseling. The participating institutes collectively offer a wide
            range of engineering disciplines and programs, and JoSAA facilitates
            the allocation of seats based on the ranks obtained by students in
            national level entrance examinations such as JEE Main and JEE
            Advanced.
          </p>
          <p>Here's how the JoSAA process generally works:</p>
          <ol>
            <li>
              Registration and Choice Filling: Candidates who have qualified the
              JEE Main or JEE Advanced exams register on the JoSAA website and
              fill in their preferred choices of institutes and programs.
            </li>
            <li>
              Seat Allocation: JoSAA processes the choices and ranks of
              candidates to allocate seats based on various factors like
              availability, category, and preferences. The allocation is done in
              multiple rounds.
            </li>
            <li>
              Acceptance of Seat: After seat allocation, candidates have the
              option to either accept the allocated seat, float (accept and also
              opt for an upgrade), or slide (accept with the possibility of
              sliding to a higher preferred choice in the same institute).
            </li>
            <li>
              Reporting to Institutes: Candidates who accept the allocated seat
              report to the respective institute for further admission
              formalities.
            </li>
            <li>
              Subsequent Rounds: JoSAA conducts multiple rounds of seat
              allocation to give candidates more chances to get their preferred
              choices. After each round, candidates can either accept, float,
              slide, or withdraw.
            </li>
            <li>
              Special Rounds: After the regular rounds, JoSAA might conduct
              additional special rounds to fill any remaining vacant seats.
            </li>
          </ol>
          <p>
            JoSAA's role is to streamline the entire admission process, minimize
            conflicts and overlapping offers, and ensure transparency and
            fairness in seat allocation. It eliminates the need for candidates
            to apply individually to each institute, making the process more
            efficient for both students and participating institutions. It also
            helps to prevent multiple acceptances by a single candidate, which
            used to cause wastage of seats in the past.
          </p>
          <p>
            It's important to note that specific details of the JoSAA process,
            including dates, procedures, and policies, might change from year to
            year, so candidates are advised to check the official JoSAA website
            or relevant authorities for the most up-to-date information.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Counselling;
