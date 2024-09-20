AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development",
    place: "CodeClause",
    cardImage: "/images/codeclause.jpeg",
    time: "(Aug, 2023 - Sep,2023)",
    desp: "<ul><li>Completed a virtual internship, developing three projects using HTML, CSS, and JavaScript.Demonstrated proficiency in front-end technologies,ensuring a seamless user experience and adherence to design principles</li></ul>" 
  },

  {
    title: "Web Development",
    cardImage: "/images/bharat_intern_logo.jpeg",
    place: "Bharat Intern",
    time: "(July, 2023 - Aug, 2023)",
    desp: "<ul><li>During my virtual internship, I successfully developed projects, showcasing my proficiency in web development. These projects demonstrated my ability to create innovative solutions while refining my coding and problem-solving skills </li> </ul>" 
  },
  {
    title: "Web Development & Designing",
    cardImage: "/images/oasis_infobyte_logo.jpeg", 
    place: "Oasis Infobyte",
    time: "(July, 2023- Aug, 2023)",
    desp: "<ul><li>During my virtual internship, I successfully developed three projects utilizing HTML, CSS, and JavaScript. Demonstrated proficiency in web development,emphasizing creativity, functionality, and responsive design.</li></ul>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

