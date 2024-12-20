AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Full Stack Engineer",
        cardImage: "assets/images/upwork.jpeg",
        place: "Upwork · Self-employed",
        time: "(Jun 2023 - Present · 1 yr 7 months)",
        desp: "<li>Developing and deploying full stack web applications with a focus on Node.js, React, and JavaScript.</li>" +
              "<li>Creating mobile applications using Flutter and Kotlin, with database integration using Firebase, Redis, PostgreSQL, and SQL.</li>" +
              "<li>Developing dynamic, scalable components for web and mobile applications.</li>" +
              "<li>Managing codebase using Git and collaborating on tasks via Jira and Trello.</li>" +
              "<li>Creating custom solutions for clients with an emphasis on performance and security.</li>" +
              "<li>Providing full-stack consulting and technical solutions for various industries.</li>" +
              "<li>Collaborating remotely with clients from different regions and time zones.</li>",
    },
    {
        title: "Full Stack Developer",
        cardImage: "assets/images/experience-page/mreshet.png",
        place: "Mreshet (Digital Marketing Firm)",
        time: "(Aug 2021 - Jun 2023 · 1 yr 11 months)",
        desp: "<li>Experience with E2E developing a platform for websites using Node.js, React, and JavaScript.</li>" +
              "<li>Developed applications for Android in Kotlin, with a focus on varied databases including Redis, PostgreSQL, SQL, and Firebase.</li>" +
              "<li>Built desktop applications using Electron and integrated API for customer websites.</li>" +
              "<li>Developed dynamic components for security using JavaScript and API integration for local websites.</li>" +
              "<li>Managed code using Git and Bitbucket, tracked tasks using Jira and Monday.com.</li>" +
              "<li>Worked on the full development lifecycle, collaborating with Product Managers and QA teams.</li>",
    },
    {
        title: "Full Stack Developer",
        cardImage: "assets/images/experience-page/flipkart.jpg",
        place: "Freelancer.com · Part-time",
        time: "(Jan 2020 - Nov 2021 · 1 yr 11 months)",
        desp: "<li>E2E Full Stack development for small businesses using diverse programming languages and environments.</li>" +
              "<li>Fixed bugs in both familiar and unfamiliar code environments.</li>" +
              "<li>Developed several projects including a task and time management web application using React and Node.js with SQL.</li>" +
              "<li>Created a machine learning-based game using the Neuroevolution Algorithm with Front-End built in JS, CSS, and HTML.</li>" +
              "<li>Developed a website for restaurants using PHP, HTML, CSS, and JavaScript, with MySQL as the database.</li>" +
              "<li>Built an app for managing medication consumption using Flutter & Firebase.</li>" +
              "<li>Created a car rental application using PHP.</li>",
    },
    {
        title: "Student Developer",
        cardImage: "assets/images/experience-page/gsoc.png",
        place: "Google Summer Of Code",
        time: "(Mar 2019 - Aug 2019)",
        desp: "<li>Worked with Mozilla as a part of Google Summer Of Code (GSoC).</li>" +
              "<li>Developed an extension called Extension Activity Monitor for Firefox, which uses the activityLog API to monitor installed extensions.</li>" +
              "<li>Implemented the activityLog API, enabling logs from other installed extensions to be monitored.</li>",
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

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
    {
        title: "StudentCode-in 2020",
        cardImage: "assets/images/experience-page/2.jpg",
        description: "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
    },
    {
        title: "PClub Summer Of Code 2020",
        cardImage: "assets/images/experience-page/3.jpg",
        description: "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
    },
    {
        title: "Hakin-Codes",
        cardImage: "assets/images/experience-page/4.jpg",
        description: "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
    },
    {
        title: "Open Source Contributor - TensorFlow",
        cardImage: "assets/images/experience-page/tensorflow.png",
        description: "Contributed to the TensorFlow project by improving documentation and resolving issues.",
    },
    {
        title: "Open Source Contributor - React",
        cardImage: "assets/images/experience-page/react.jpeg",
        description: "Helped fix bugs and improve the codebase for React by submitting pull requests related to JSX performance and state management.",
    },
    {
        title: "Mentor - GitHub Campus Expert",
        cardImage: "assets/images/experience-page/github.png",
        description: "Mentoring students in open source contribution, GitHub usage, and community building through various programs and initiatives.",
    },
    {
        title: "Open Source Contributor - Node.js",
        cardImage: "assets/images/experience-page/nodejs.png",
        description: "Contributed to the Node.js project by resolving performance-related issues and updating outdated dependencies.",
    },
];
const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);