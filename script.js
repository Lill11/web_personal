const translations = {
  es: {
    brandName: "Lili Chen",
    heroTitle: "Lili Chen",
    heroSubtitle:
      "Ingeniera Informática especializada en QA y Desarrollo de Software",
    heroDescription:
      "Diseño soluciones fiables, automatizo pruebas y garantizo que los sistemas funcionen con la calidad que las personas esperan.",
    btnAbout: "Conóceme",
    btnCV: "Descargar CV",
    highlightTitle: "Lo que me mueve",
    highlightBody:
      "QA Engineer con experiencia en automatización, validación de eSIM y desarrollo full-stack con Python, Java, Django y JavaScript.",
    aboutTitle: "Sobre mí",
    aboutLead:
      "Ingeniera Informática con experiencia en QA, programación y bases de datos. Me apasiona resolver problemas complejos, automatizar procesos y colaborar con equipos multidisciplinares para construir productos escalables.",
    aboutBody:
      "Me especializo en diseñar y ejecutar planes de pruebas end-to-end, crear automatizaciones utilizando frameworks como TestNG y mantener la calidad del software con métricas claras. Tengo una base sólida en Python, Java y SQL, y disfruto aprendiendo nuevas tecnologías que potencien los proyectos en los que participo.",
    experienceTitle: "Experiencia",
    experienceBadge: "Julio 2024 - Actual · Madrid",
    experienceRole: "QA Software Engineer Junior",
    experienceItem1:
      "Realizo pruebas funcionales y no funcionales para tarjetas eSIM, cubriendo requisitos críticos de negocio.",
    experienceItem2:
      "Desarrollo automatizaciones con Java y TestNG para acelerar la validación y detectar incidencias antes de producción.",
    experienceItem3:
      "Analizo fallos, documento resultados y colaboro con equipos ágiles (Scrum/Kanban) para resolver incidencias usando JIRA.",
    projectsTitle: "Proyectos destacados",
    project1Body:
      "Landing page responsive con menú digital, animaciones suaves y experiencia fluida para reservas en línea.",
    project1Tech:
      "Tecnologías: Next.js, Tailwind CSS, Vercel, Responsive Design",
    project2Body:
      "Sitio estático con secciones interactivas y navegación fluida para presentar platos y promociones especiales.",
    project2Tech:
      "Tecnologías: HTML, CSS, JavaScript, GitHub Pages",
    project3Body:
      "Aplicación web con Django + Vue.js que permite crear y jugar quizzes en tiempo real, integrando autenticación y tests automatizados.",
    project3Tech:
      "Tecnologías: Django, Vue.js, HTML, CSS, Pytest",
    projectVisit: "Ver proyecto",
    projectSoon: "Código disponible a petición",
    skillsTitle: "Habilidades técnicas",
    skillsLanguages: "Lenguajes",
    skillsWeb: "Web & Frameworks",
    skillsData: "Datos & DevOps",
    skillsSecurity: "Redes & Ciberseguridad",
    educationTitle: "Formación",
    educationDegree: "Grado en Ingeniería Informática",
    educationDates: "2020 - 2024",
    educationBody:
      "Especialización en Bases de Datos, Algoritmos, Redes, Ciberseguridad, Ingeniería de Software e Inteligencia Artificial. Nota media: 7.13.",
    contactTitle: "Contacto",
    contactLead:
      "¿Quieres colaborar o saber más? Escríbeme y nos tomamos un café.",
    contactPhone: "Teléfono",
    contactLanguages: "Idiomas",
    contactLanguagesBody:
      "Español (Avanzado), Inglés (Intermedio alto), Chino (Nativo)",
    footerText:
      "© 2024 Lili Chen · Abierta a oportunidades en QA, Desarrollo y Datos.",
  },
  en: {
    brandName: "Lili Chen",
    heroTitle: "Lili Chen",
    heroSubtitle:
      "Computer Engineer focused on QA and Software Development",
    heroDescription:
      "I build reliable solutions, automate testing, and make sure systems deliver the quality people expect.",
    btnAbout: "About me",
    btnCV: "Download résumé",
    highlightTitle: "What drives me",
    highlightBody:
      "QA Engineer experienced in automation, eSIM validation, and full-stack development with Python, Java, Django, and JavaScript.",
    aboutTitle: "About me",
    aboutLead:
      "Computer Engineer with experience in QA, programming, and databases. I love solving complex problems, automating processes, and collaborating with multidisciplinary teams to ship scalable products.",
    aboutBody:
      "I design and execute end-to-end test plans, build automation using frameworks like TestNG, and keep software quality measurable. I have a strong foundation in Python, Java, and SQL, and I enjoy learning technologies that level up every project I join.",
    experienceTitle: "Experience",
    experienceBadge: "July 2024 - Present · Madrid",
    experienceRole: "Junior QA Software Engineer",
    experienceItem1:
      "Run functional and non-functional testing for eSIM cards, covering business-critical requirements.",
    experienceItem2:
      "Develop automation with Java and TestNG to speed up validation and detect incidents before production.",
    experienceItem3:
      "Investigate issues, document results, and collaborate with agile squads (Scrum/Kanban) to resolve incidents using JIRA.",
    projectsTitle: "Featured projects",
    project1Body:
      "Responsive landing page with digital menu, smooth animations, and a clear reservation experience.",
    project1Tech:
      "Technologies: Next.js, Tailwind CSS, Vercel, Responsive Design",
    project2Body:
      "Static website with interactive sections and easy navigation to showcase dishes and special offers.",
    project2Tech:
      "Technologies: HTML, CSS, JavaScript, GitHub Pages",
    project3Body:
      "Web app built with Django + Vue.js to create and play quizzes in real time, including authentication and automated tests.",
    project3Tech:
      "Technologies: Django, Vue.js, HTML, CSS, Pytest",
    projectVisit: "View project",
    projectSoon: "Code available on request",
    skillsTitle: "Technical skills",
    skillsLanguages: "Languages",
    skillsWeb: "Web & Frameworks",
    skillsData: "Data & DevOps",
    skillsSecurity: "Networks & Cybersecurity",
    educationTitle: "Education",
    educationDegree: "BSc in Computer Engineering",
    educationDates: "2020 - 2024",
    educationBody:
      "Focused on Databases, Algorithms, Networks, Cybersecurity, Software Engineering, and Artificial Intelligence. GPA: 7.13/10.",
    contactTitle: "Get in touch",
    contactLead:
      "Want to collaborate or learn more? Drop me a message and let's grab a coffee.",
    contactPhone: "Phone",
    contactLanguages: "Languages",
    contactLanguagesBody:
      "Spanish (Advanced), English (Upper-intermediate), Chinese (Native)",
    footerText:
      "© 2024 Lili Chen · Open to opportunities in QA, Software, and Data.",
  },
};

const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("langToggle");
const i18nElements = document.querySelectorAll("[data-i18n-key]");

const storedLang =
  typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
let currentLang = storedLang === "en" ? "en" : "es";

function applyLanguage(lang) {
  const messages = translations[lang];

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (messages[key]) {
      el.textContent = messages[key];
    }
  });

  htmlEl.lang = lang;
  if (toggleBtn) {
    toggleBtn.textContent = lang === "es" ? "EN" : "ES";
    toggleBtn.setAttribute(
      "aria-label",
      lang === "es" ? "Switch language to English" : "Cambiar idioma a español"
    );
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem("lang", lang);
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyLanguage(currentLang);
  });
}

applyLanguage(currentLang);
