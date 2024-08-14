import React from "react";
import style from "./exam.module.css";
import main from "./assets/background_pic/jeemain.jpg";
import advance from "./assets/background_pic/jeeadv.jpg";
import { Link } from "react-router-dom";
import Footer from "./footer";
const Exam = () => {
  return (
    <div>
      <div className={style.top}>
        <div className={style.logo}>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            JEE-PREP
          </Link>
        </div>
        <div className={style.home}>
          <Link to="/home">HOME</Link>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.main}>
          <div className={style.jeem}>
            <h2>Jee-Main :-</h2>
            <img src={main} alt="Jee Main" />
            <ul>
              <li>
                Exam Conducting Body: The Joint Entrance Examination (JEE) Main
                is conducted by the National Testing Agency (NTA), which is an
                autonomous organization under the Department of Higher
                Education, Ministry of Education, Government of India.
              </li>
              <li>
                Exam Frequency: JEE Main is typically conducted twice a year,
                usually in the months of January and April. However, the
                frequency and schedule may vary, so it's important to check the
                official website for the latest updates.
              </li>
              <li>
                Mode of Exam: JEE Main is conducted in a computer-based test
                (CBT) mode. The exam is taken on a computer at designated test
                centers.
              </li>
              <li>Papers: JEE Main consists of multiple papers, primarily:</li>
              <li className="no">
                Paper 1: For admission to B.E./B.Tech courses.
              </li>
              <li className="no">Paper 2: For admission to B.Arch courses.</li>
              <li className="no">
                Paper 3 (recently introduced): For admission to B.Planning
                courses.
              </li>
              <li>
                Question Types: The exam includes a mix of multiple-choice
                questions (MCQs) as well as numerical value-based questions. In
                MCQs, candidates have to select the correct answer from the
                given options, while numerical value-based questions require
                candidates to enter a numerical value as the answer.
              </li>
              <li>Subjects: The question paper covers three main subjects:</li>
              <li className="no">Mathematics</li>
              <li className="no">Physics</li>
              <li className="no">Chemistry</li>
              <li>
                Duration: The duration of each paper is generally 3 hours.
                However, there might be variations in the duration for different
                papers.
              </li>
              <li>
                Marking Scheme: The marking scheme varies slightly for different
                question types. For MCQs, there's typically +4 for each correct
                answer, -1 for each incorrect answer, and 0 for unanswered
                questions. For numerical value-based questions, there's usually
                no negative marking.
              </li>
              <li>
                Syllabus: The syllabus for JEE Main is based on the 10+2 level
                curriculum of Physics, Chemistry, and Mathematics.
              </li>
              <li>
                Eligibility: Candidates who have completed their 10+2 education
                or an equivalent examination are eligible to appear for JEE
                Main. There are also certain age criteria and number of attempts
                allowed, which may vary.
              </li>
            </ul>
          </div>
          <div className={style.jeea}>
            <h2>Jee-Advanced :-</h2>
            <img src={advance} alt="Jee Advanced" />
            <ul>
              <li>
                Eligibility Criteria: To be eligible for JEE Advanced,
                candidates need to meet certain criteria, including clearing the
                JEE Main exam. Only the top 2,50,000 (approximately) candidates
                from JEE Main are eligible to appear for JEE Advanced, based on
                their All India Rank (AIR) and category-wise distribution.
              </li>
              <li>
                Mode of Exam: JEE Advanced is typically conducted in a
                computer-based test (CBT) mode. The format of the exam may
                include multiple-choice questions (MCQs), numerical answer type
                questions, and integer type questions.
              </li>
              <li>
                Papers: The JEE Advanced exam consists of two papers, Paper 1
                and Paper 2. Both papers are usually held on the same day, with
                a short break in between.
              </li>
              <li>
                Subjects: The exam covers three subjects: Physics, Chemistry,
                and Mathematics. The syllabus for JEE Advanced is more advanced
                and comprehensive compared to JEE Main.
              </li>
              <li>
                Marking Scheme: The marking scheme for JEE Advanced varies for
                different questions. It includes full, partial, and zero marks,
                depending on the question type.
              </li>
              <li>
                Exam Language: JEE Advanced is conducted in two languages:
                English and Hindi. Additionally, some IITs may offer the exam in
                other regional languages as well.
              </li>
              <li>
                Aptitude Test for B.Arch Programs: For candidates seeking
                admission to B.Arch programs in IITs, an Architecture Aptitude
                Test (AAT) is conducted after JEE Advanced. Only those who
                qualify in JEE Advanced can appear for the AAT.
              </li>
              <li>
                Syllabus: The syllabus for JEE Advanced is comprehensive and
                covers a wider range of topics compared to JEE Main. It includes
                advanced concepts and applications.
              </li>
              <li>
                Multiple Choice and Numerical Answer Type Questions: JEE
                Advanced includes different types of questions, including
                multiple-choice questions, numerical answer type questions
                (NAT), and integer type questions. For NAT questions, candidates
                need to enter the numerical value as the answer.
              </li>
            </ul>
            <p>
              For the latest and most accurate details about the JEE exams,
              including application dates, exam pattern, syllabus, and other
              important updates, it's recommended to visit the official JEE Main
              website/Jee Advanced website or official notifications from the
              National Testing Agency (NTA).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
