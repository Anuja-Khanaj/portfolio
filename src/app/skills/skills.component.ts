
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  @ViewChild('col0') col0: ElementRef;
  @ViewChildren('projectCol') projectCols: QueryList<ElementRef>;
  @ViewChild('nav') nav: ElementRef;
  @ViewChildren('ol') ol: QueryList<ElementRef>;

  projects = [
    {
      title: 'Resume Generator',
      description: 'Empower yourself with the Resume Generator, a dynamic web application designed to effortlessly craft your professional resume. Say goodbye to layout headaches and focus solely on showcasing your skills and experiences.',
      technologies: 'HTML, CSS, Angular 16, Firebase',
      features: [
        'Effortless Creation: Seamlessly create your resume without the burden of worrying about layouts.',
        'Reactive Form Integration: Utilizes reactive forms and validation for ensuring required fields are filled accurately.',
        'Temporary Storage: Data is securely stored in local storage for temporary purposes, enabling easy printing and editing.',
        'Firebase Integration: Utilizes Firebase for user authentication, ensuring a secure login process and storing user information.',
        'Interactive Feedback: Engage with users through an interactive feedback section, leveraging the GET method to display data dynamically.'
      ],
      img:"assets/1.png",
      codeLink:"https://github.com/Anuja-Khanaj/resume-genrator"
    },
    {
      title: 'Dynamic Portfolio Website',
      description: 'Elevate your online presence with a dynamic portfolio website designed to showcase your skills, accomplishments, and personality. This website serves as a digital representation of your professional journey, offering visitors a comprehensive view of your expertise and accomplishments. From captivating visuals to intuitive navigation, every aspect of the portfolio is crafted to leave a lasting impression.',
      technologies: 'HTML, CSS, JavaScript',
      features: [
        'Visual Impact: Impress visitors with visually stunning design elements, captivating imagery, and sleek animations that highlight your creativity and attention to detail.',
        'Comprehensive Showcase: Display a diverse range of projects, accomplishments, and experiences, providing a comprehensive overview of your skills and expertise.',
        'Interactive Elements: Engage visitors with interactive elements such as portfolio galleries, sliders, and embedded media, creating an immersive browsing experience.',
        'Seamless Navigation: Ensure ease of navigation with intuitive menu structures, smooth scrolling, and clear call-to-action buttons that guide visitors through your portfolio effortlessly.',
        'Responsive Design: Optimize the website for various devices and screen sizes, ensuring a seamless user experience regardless of the platform used for access.'
      ],
      img:"assets/portfolio.PNG",
      codeLink:"https://github.com/Anuja-Khanaj/portfolio"
    },
    {
      title: 'Project Management System',
      description: 'Streamline project management with our comprehensive Project Management System, designed to centralize data and facilitate easy access to various projects implemented by students. From seamless data integration to robust user authentication features, our system empowers efficient project management for educational endeavors.',
      technologies: 'HTML, CSS, PHP, MySQL, JavaScript',
      features: [
        'Centralized Data Management: Integrate and store project data efficiently within databases, ensuring seamless access and organization.',
        'Project Accessibility: Simplify access to diverse projects executed by students, providing a user-friendly platform for exploration and collaboration.',
        'Student Authentication: Implement a secure authentication system for students, ensuring data integrity and privacy throughout the platform.',
        'Login and Signup System: Enable students to create accounts and login securely, enhancing user experience and facilitating personalized interactions.'
      ],
      img:"assets/bg2.jpeg",
      codeLink:"https://github.com/Anuja-Khanaj/ProjectManagement"
    },
    {
      title: 'Lingofur - Language Learning Platform',
      description: 'Embark on a linguistic journey with Lingofur, your one-stop destination for mastering various languages including English and many more. Our user-friendly website offers a comprehensive suite of tools including dictionaries, translators, and lessons, all conveniently housed under one roof. Coupled with an intuitive UI design and a bespoke logo, Lingofur promises a seamless and engaging language learning experience.',
      technologies: 'HTML, CSS, PHP, MySQL, JavaScript',
      features: [
        'Multi-Language Support: Dive into the world of languages with English and many others available for learning and exploration.',
        'Comprehensive Tools: Access dictionaries, translators, and lessons all in one place, simplifying the language learning process for users.',
        'Intuitive UI Design: Navigate effortlessly through our website thanks to a thoughtfully designed user interface, enhancing usability and engagement.',
        'Distinctive Branding: Stand out with our unique logo, reflecting the essence of Lingofur and its commitment to fostering language proficiency.'
      ],
      img:"assets/lingofur.PNG",
      codeLink:"https://github.com/Anuja-Khanaj/lingofur"
    },
   
  ];

  ngAfterViewInit(): void {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });

    // Animate the intro column
    timeline.to(this.col0.nativeElement, { y: -20, opacity: 1 });

    // Animate each project column
    this.projectCols.forEach((projectCol, index) => {
      timeline.to(projectCol.nativeElement, { y: 0, opacity: 1, duration: 1, delay: index * 0.2 });
    });

    // Animate the nav element
    timeline.to(this.nav.nativeElement, { opacity: 1 });
  }

  hover() {
    this.ol.forEach((olElement: ElementRef) => {
      olElement.nativeElement.style.display = 'block';
    });
  }

  noHover(){
    this.ol.forEach((olElement: ElementRef) => {
      olElement.nativeElement.style.display = 'none';
    });
  }
}


