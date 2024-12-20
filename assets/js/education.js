AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
   // Existing courses

  // New courses
  {
    title: "Cybersecurity Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/specializations/cyber-security",
  },
  {
    title: "Advanced Penetration Testing",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/advanced-penetration-testing/ ",
  },
  {
    title: "Ethical Hacking Essentials",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
  },
  {
    title: "Web Application Security Testing",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/web-application-security",
  },
  {
    title: "Linux System Administration",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/linux-administration-bootcamp/",
  },
  {
    title: "Python for Cybersecurity",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/python-for-cybersecurity",
  },
  {
    title: "Kali Linux for Ethical Hacking",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/kali-linux-ethical-hacking/",
  },
  {
    title: "Full-Stack Web Development",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    title: "React and Redux",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/react-redux/",
  },
  {
    title: "Node.js and Express",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/full-stack-react-node",
  },
  {
    title: "Modern JavaScript",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    title: "Cloud Computing Basics",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/cloud-computing-basics",
  },
  {
    title: "AWS for Beginners",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/aws-certified-cloud-practitioner/",
  },
  {
    title: "Docker and Kubernetes",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
  },
  {
    title: "Artificial Intelligence Foundations",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/professional-certificate/columbiax-artificial-intelligence",
  },
  {
    title: "Deep Learning Specialization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    title: "Blockchain Basics",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/blockchain-and-cryptocurrency-explained/",
  },
  {
    title: "Google Cloud Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/gcp-fundamentals",
  },
  {
    title: "Microsoft Azure Basics",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/azure-administration/",
  },
  {
    title: "Internet of Things (IoT) Specialization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/specializations/iot",
  },
  {
    title: "Penetration Testing with Metasploit",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/penetration-testing-with-metasploit/",
  },
  {
    title: "Azure Security Engineer Certification",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/microsoft-azure-security",
  },
  {
    title: "SQL for Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/sql-data-science",
  },
  {
    title: "CI/CD Pipeline with Jenkins",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/jenkins-ci-cd-pipeline/",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/ethical-hacking/",
  },
  {
    title: "Cyber Threat Intelligence",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/cyber-threat-intelligence",
  },
  {
    title: "Programming with GoLang",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/learn-go-the-complete-bootcamp-course-golang/",
  },
  {
    title: "Rust for Beginners",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/rust-programming-language-tutorial/",
  },
  {
    title: "React Native Advanced Concepts",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/react-native-advanced",
  },
  {
    title: "Secure Coding Practices",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/secure-coding-practices/",
  },
  
];


const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});