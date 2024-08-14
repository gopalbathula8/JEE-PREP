import React, { useState } from "react";
import styles from "./colleges.module.css";
import { Link } from "react-router-dom";
import nitTrichy from "./assets/nit&iit/nittrichy.jpeg";
import nitSurathkal from "./assets/nit&iit/nitsurathkal.webp";
import nitRourkela from "./assets/nit&iit/nitrourkela.jpg";
import nitWarangal from "./assets/nit&iit/nitwarangal.webp";
import nitCalicut from "./assets/nit&iit/nitcalicut.webp";
import nitNagpur from "./assets/nit&iit/nitnagpur.jpg";
import nitSurat from "./assets/nit&iit/nitsurat.webp";
import nitGoa from "./assets/nit&iit/nitgoa.jpg";
import nitJamshedpur from "./assets/nit&iit/nitjamshedpur.jpg";
import nitDurgapur from "./assets/nit&iit/nit durgapur.jpg";
import nitHamirpur from "./assets/nit&iit/nithamirpur.jpg";
import nitMeghalaya from "./assets/nit&iit/nitmeghalaya.jpg";
import nitRaipur from "./assets/nit&iit/nitraipur.webp";
import nitAgartala from "./assets/nit&iit/nitagartala.jpg";
import nitKurukshetra from "./assets/nit&iit/nitkurukshetra.jpg";
import nitPatna from "./assets/nit&iit/nitpatna.jpg";
import nitSilchar from "./assets/nit&iit/nitsilchar.jpeg";
import nitUttarakhand from "./assets/nit&iit/nituttarakhand.jpg";
import nitDelhi from "./assets/nit&iit/nitdelhi.jpg";
import nitArunachalpradesh from "./assets/nit&iit/nitarunachal pradesh.jpg";
import nitPuducherry from "./assets/nit&iit/nitpuducherry.jpg";
import nitJalandhar from "./assets/nit&iit/nitjalandhar.jpg";
import nitAp from "./assets/nit&iit/andhrapradesh.jpg";
import nitMizoram from "./assets/nit&iit/nitmizoram.webp";
import nitNagaland from "./assets/nit&iit/nitnagaland.jpg";
import nitSikkim from "./assets/nit&iit/nitsikkim.png";
import nitJaipur from "./assets/nit&iit/nitjaipur.jpg";
import nitAllahabad from "./assets/nit&iit/nitallahabad.webp";
import nitBhopal from "./assets/nit&iit/nitbhopal.jpeg";
import nitManipur from "./assets/nit&iit/nitmanipur.jpg";
import nitSrinagar from "./assets/nit&iit/nitsrinagar.jpg";

import iitBombay from "./assets/nit&iit/iitbombay.jpg";
import iitDelhi from "./assets/nit&iit/iitdelhi.jpg";
import iitdharwad from "./assets/nit&iit/iitdharwad.jpg";
import iitpatna from "./assets/nit&iit/iitpatna.jpg";
import iitroorke from "./assets/nit&iit/iitroorke.jpg";
import iitKharagpur from "./assets/nit&iit/iitkharagpur.jpg";
import iitKanpur from "./assets/nit&iit/iitkanpur.jpg";
import iitMadras from "./assets/nit&iit/iitmadras.jpeg";
import iitGuwahati from "./assets/nit&iit/iitguwahati.jpg";
import iitRopar from "./assets/nit&iit/iitropar.jpg";
import iitBhubaneswar from "./assets/nit&iit/iitbhubaneshwar.jpg";
import iitIndore from "./assets/nit&iit/iitindore.jpg";
import iitMandi from "./assets/nit&iit/iitmandi.jpg";
import iitVaranasi from "./assets/nit&iit/iitbhu.jpg";
import iitJodhpur from "./assets/nit&iit/iitjodhpur.jpg";
import iitPalakkad from "./assets/nit&iit/iitpalakkad.jpg";
import iitJammu from "./assets/nit&iit/iitjammu.jpg";
import iitGandhinagar from "./assets/nit&iit/iitgandhinagar.jpg";
import iitHyderabad from "./assets/nit&iit/iithyderabad.jpg";
import iitTirupati from "./assets/nit&iit/iittirupati.jpg";
import iitBhilai from "./assets/nit&iit/iitbhilai.jpg";
import iitDhanbad from "./assets/nit&iit/iitdhanbad.jpg";

import Footer from "./footer";
const collegesData = [
  // NITs
  {
    name: "NIT Trichy",
    nirf: 9,
    abbreviation: "NITT",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    img: nitTrichy,
    url: "https://www.nitt.edu/",
  },
  {
    name: "NIT Karnataka",
    nirf: 12,
    abbreviation: "NITK",
    city: "Surathkal",
    state: "Karnataka",
    img: nitSurathkal,
    url: "https://www.nitk.ac.in/",
  },
  {
    name: "NIT Rourkela",
    nirf: 16,
    abbreviation: "NITRKL",
    city: "Rourkela",
    state: "Odisha",
    img: nitRourkela,
    url: "https://www.nitrkl.ac.in/",
  },
  {
    name: "NIT Warangal",
    nirf: 21,
    abbreviation: "NITW",
    city: "Warangal",
    state: "Telangana",
    img: nitWarangal,
    url: "https://www.nitw.ac.in/",
  },
  {
    name: "NIT Calicut",
    nirf: 23,
    abbreviation: "NITC",
    city: "Calicut",
    state: "Kerala",
    img: nitCalicut,
    url: "https://www.nitc.ac.in/",
  },
  {
    name: "VNIT Nagpur",
    nirf: 41,
    abbreviation: "VNIT",
    city: "Nagpur",
    state: "Maharashtra",
    img: nitNagpur,
    url: "https://vnit.ac.in/",
  },
  {
    name: "NIT Durgapur",
    nirf: 43,
    abbreviation: "NITDGP",
    city: "Durgapur",
    state: "West Bengal",
    img: nitDurgapur,
    url: "https://nitdgp.ac.in/",
  },
  {
    name: "NIT Silchar",
    nirf: 40,
    abbreviation: "NITS",
    city: "Silchar",
    state: "Assam",
    img: nitSilchar,
    url: "https://www.nits.ac.in/",
  },
  {
    name: "NIT Jaipur",
    nirf: 37,
    abbreviation: "MNIT",
    city: "Jaipur",
    state: "Rajasthan",
    img: nitJaipur,
    url: "https://www.mnit.ac.in/",
  },
  {
    name: "NIT Allahabad",
    nirf: 49,
    abbreviation: "MNNIT",
    city: "Allahabad",
    state: "Uttar Pradesh",
    img: nitAllahabad,
    url: "http://www.mnnit.ac.in/",
  },
  {
    name: "NIT Kurukshetra",
    nirf: 58,
    abbreviation: "NITKKR",
    city: "Kurukshetra",
    state: "Haryana",
    img: nitKurukshetra,
    url: "https://www.nitkkr.ac.in/",
  },
  {
    name: "NIT Jalandhar",
    nirf: 46,
    abbreviation: "NITJ",
    city: "Jalandhar",
    state: "Punjab",
    img: nitJalandhar,
    url: "https://www.nitj.ac.in/",
  },
  {
    name: "NIT Surat",
    nirf: 65,
    abbreviation: "SVNIT",
    city: "Surat",
    state: "Gujarat",
    img: nitSurat,
    url: "https://www.svnit.ac.in/",
  },
  {
    name: "NIT Meghalaya",
    nirf: 72,
    abbreviation: "NITM",
    city: "Shillong",
    state: "Meghalaya",
    img: nitMeghalaya,
    url: "https://www.nitm.ac.in/",
  },
  {
    name: "NIT Patna",
    nirf: 41,
    abbreviation: "NITP",
    city: "Patna",
    state: "Bihar",
    img: nitPatna,
    url: "https://www.nitp.ac.in/",
  },
  {
    name: "NIT Raipur",
    nirf: 70,
    abbreviation: "NITRR",
    city: "Raipur",
    state: "Chhattisgarh",
    img: nitRaipur,
    url: "https://www.nitrr.ac.in/",
  },
  {
    name: "NIT Srinagar",
    nirf: 82,
    abbreviation: "NITSRI",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    img: nitSrinagar,
    url: "http://www.nitsri.ac.in/",
  },
  {
    name: "NIT Bhopal",
    nirf: 80,
    abbreviation: "MANIT",
    city: "Bhopal",
    state: "Madhya Pradesh",
    img: nitBhopal,
    url: "http://www.manit.ac.in/",
  },
  {
    name: "NIT Goa",
    nirf: 90,
    abbreviation: "NITG",
    city: "Farmagudi",
    state: "Goa",
    img: nitGoa,
    url: "http://www.nitgoa.ac.in/",
  },
  {
    name: "NIT Agartala",
    nirf: 91,
    abbreviation: "NITA",
    city: "Agartala",
    state: "Tripura",
    img: nitAgartala,
    url: "https://www.nita.ac.in/",
  },
  {
    name: "NIT Jamshedpur",
    nirf: "NA",
    abbreviation: "NITJSR",
    city: "Jamshedpur",
    state: "Jharkhand",
    img: nitJamshedpur,
    url: "https://www.nitjsr.ac.in/",
  },
  {
    name: "NIT Manipur",
    nirf: 95,
    abbreviation: "NITMN",
    city: "Imphal",
    state: "Manipur",
    img: nitManipur,
    url: "http://www.nitmanipur.ac.in/",
  },
  {
    name: "NIT Hamirpur",
    nirf: "NA",
    abbreviation: "NITH",
    city: "Hamirpur",
    state: "Himachal Pradesh",
    img: nitHamirpur,
    url: "https://nith.ac.in/",
  },
  {
    name: "NIT Uttarakhand",
    nirf: "NA",
    abbreviation: "NIUK",
    city: "Srinagar",
    state: "Uttarakhand",
    img: nitUttarakhand,
    url: "https://www.nituk.ac.in/",
  },
  {
    name: "NIT Puducherry",
    nirf: "NA",
    abbreviation: "NITPY",
    city: "Karaikal",
    state: "Puducherry",
    img: nitPuducherry,
    url: "https://www.nitpy.ac.in/",
  },
  {
    name: "NIT Arunachal Pradesh",
    nirf: "NA",
    abbreviation: "NITAP",
    city: "Yupia",
    state: "Arunachal Pradesh",
    img: nitArunachalpradesh,
    url: "https://www.nitap.ac.in/",
  },
  {
    name: "NIT Sikkim",
    nirf: "NA",
    abbreviation: "NITSKM",
    city: "Ravangla",
    state: "Sikkim",
    img: nitSikkim,
    url: "http://www.nitsikkim.ac.in/",
  },
  {
    name: "NIT Delhi",
    nirf: 51,
    abbreviation: "NITD",
    city: "New Delhi",
    state: "Delhi",
    img: nitDelhi,
    url: "http://nitdelhi.ac.in/",
  },
  {
    name: "NIT Mizoram",
    nirf: "NA",
    abbreviation: "NITMZ",
    city: "Aizwal",
    state: "Mizoram",
    img: nitMizoram,
    url: "https://www.nitmz.ac.in/",
  },
  {
    name: "NIT Nagaland",
    nirf: "NA",
    abbreviation: "NITN",
    city: "Dimapur",
    state: "Nagaland",
    img: nitNagaland,
    url: "https://nitnagaland.ac.in/",
  },
  {
    name: "NIT Tadepalligudem",
    nirf: "NA",
    abbreviation: "NIT AP",
    city: "Tadepalligudem",
    state: "Andhra Pradesh",
    img: nitAp,
    url: "https://www.nitandhra.ac.in/main/",
  },
  {
    name: "IIT Madras",
    nirf: 1,
    abbreviation: "IITM",
    city: "Chennai",
    state: "Tamil Nadu",
    img: iitMadras,
    url: "https://www.iitm.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT New Delhi",
    nirf: 2,
    abbreviation: "IITD",
    city: "New Delhi",
    state: "Delhi",
    img: iitDelhi,
    url: "https://www.iitd.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Bombay",
    nirf: 3,
    abbreviation: "IITB",
    city: "Mumbai",
    state: "Maharashtra",
    img: iitBombay,
    url: "https://www.iitb.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Kanpur",
    nirf: 4,
    abbreviation: "IITK",
    city: "Kanpur",
    state: "Uttar Pradesh",
    img: iitKanpur,
    url: "https://www.iitk.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Roorkee",
    nirf: 5,
    abbreviation: "IITR",
    city: "Roorkee",
    state: "Uttarakhand",
    img: iitroorke,
    url: "https://www.iitr.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Kharagpur",
    nirf: 6,
    abbreviation: "IITKGP",
    city: "Kharagpur",
    state: "West Bengal",
    img: iitKharagpur,
    url: "https://www.iitkgp.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Guwahati",
    nirf: 7,
    abbreviation: "IITG",
    city: "Guwahati",
    state: "Assam",
    img: iitGuwahati,
    url: "https://www.iitg.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Hyderabad",
    nirf: 8,
    abbreviation: "IITH",
    city: "Hyderabad",
    state: "Telangana",
    img: iitHyderabad,
    url: "https://www.iith.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Varanasi",
    nirf: 15,
    abbreviation: "IIT BHU",
    city: "Varanasi",
    state: "Uttar Pradesh",
    img: iitVaranasi,
    url: "https://www.iitbhu.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Dhanbad",
    nirf: 17,
    abbreviation: "IITISM",
    city: "Dhanbad",
    state: "Jharkhand",
    img: iitDhanbad,
    url: "https://www.iitism.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Indore",
    nirf: 14,
    abbreviation: "IITI",
    city: "Indore",
    state: "Madhya Pradesh",
    img: iitIndore,
    url: "https://www.iiti.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Ropar",
    nirf: 22,
    abbreviation: "IITR",
    city: "Ropar",
    state: "Punjab",
    img: iitRopar,
    url: "https://www.iitrpr.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Mandi",
    nirf: 33,
    abbreviation: "IITM",
    city: "Mandi",
    state: "Himachal Pradesh",
    img: iitMandi,
    url: "https://www.iitmandi.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Gandhinagar",
    nirf: 18,
    abbreviation: "IITG",
    city: "Gandhinagar",
    state: "Gujarat",
    img: iitGandhinagar,
    url: "https://www.iitgn.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Jodhpur",
    nirf: 30,
    abbreviation: "IITJ",
    city: "Jodhpur",
    state: "Rajasthan",
    img: iitJodhpur,
    url: "https://www.iitj.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Patna",
    nirf: 41,
    abbreviation: "IITP",
    city: "Patna",
    state: "Bihar",
    img: iitpatna,
    url: "https://www.iitp.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Bhubaneswar",
    nirf: 27,
    abbreviation: "IITBBS",
    city: "Bhubaneswar",
    state: "Odisha",
    img: iitBhubaneswar,
    url: "https://www.iitbbs.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Palakkad",
    nirf: 69,
    abbreviation: "IITPKD",
    city: "Palakkad",
    state: "Kerala",
    img: iitPalakkad,
    url: "https://www.iitpkd.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Tirupati",
    nirf: 59,
    abbreviation: "IITTP",
    city: "Tirupati",
    state: "Andhra Pradesh",
    img: iitTirupati,
    url: "https://www.iittp.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Jammu",
    nirf: 67,
    abbreviation: "IITJ",
    city: "Jammu",
    state: "Jammu & Kashmir",
    img: iitJammu,
    url: "https://www.iitjammu.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Dharwad",
    nirf: 93,
    abbreviation: "IITD",
    city: "Dharwad",
    state: "Karnataka",
    img: iitdharwad,
    url: "https://www.iitdwd.ac.in/", // Placeholder URL, update with actual
  },
  {
    name: "IIT Bhilai",
    nirf: 81,
    abbreviation: "IITB",
    city: "Bhilai",
    state: "Chattisgarh",
    img: iitBhilai,
    url: "https://www.iitbhilai.ac.in/", // Placeholder URL, update with actual
  },
];
const normalizeString = (str) => str.replace(/\s+/g, "").toLowerCase();

const CollegeList = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const normalizedSearch = normalizeString(search);

  const filteredColleges = collegesData.filter(
    (college) =>
      normalizedSearch === "" ||
      normalizeString(college.name).includes(normalizedSearch) ||
      normalizeString(college.state).includes(normalizedSearch)
  );
  const handleCollegeClick = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.logo}>JEE-PREP</div>
        <div className={styles.home}>
          <Link to="/home">HOME</Link>
        </div>
      </div>
      <div className={styles.searchbox}>
        <div className={styles.searchbar}>
          <input
            type="text"
            placeholder="Search by college name or state..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.main}>
          <h2>Colleges List:</h2>
          <div className={styles.row}>
            {filteredColleges.length === 0 ? (
              <div className={styles.notfound}>No results found</div>
            ) : (
              filteredColleges.map((college, index) => (
                <div
                  className={styles.each}
                  key={index}
                  onClick={() => handleCollegeClick(college.url)}
                >
                  <img src={college.img} alt={college.name} />
                  <p>{college.name}</p>
                  <p>NIRF: {college.nirf}</p>
                  <p>Abbreviation: {college.abbreviation}</p>
                  <p>City/Town: {college.city}</p>
                  <p>State: {college.state}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollegeList;
