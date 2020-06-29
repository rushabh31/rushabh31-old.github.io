/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Hi I'm Rushabh",
	//nickname: "layman_brother",
	// subTitle:
	//   "A passionate data scientist 🚀 having 3+ years of experience and in-depth knowledge of database types, statistical research methodologies, and big data capture, curation, manipulation and visualization",
	subTitle:
		"A passionate data scientist having 3+ years of experience and in-depth knowledge of database types, statistical research methodologies, and big data capture, curation, manipulation and visualization",
	resumeLink:
		"https://github.com/rushabh31/rushabh31.github.io11/blob/master/Rushabh-Patel-CV.pdf"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/rushabh31",
	linkedin: "https://www.linkedin.com/in/rushabhpatel5/",
	gmail: "rushabh.patel5@gmail.com",
	facebook: "https://www.facebook.com/rpate307/",
	twitter: "https://twitter.com/rushabhpatel5",
	instagram: "https://www.instagram.com/rushabhpatel5/"
};

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      imagePath: "machine-learning.svg",
      skills: [
        "Applying natural language processing methods to clinical text to extract structured information",
        "Using the latest deep learning techniques to classify imaging studies",
        "Applying statistical models (with a focus on Bayesian methods) to assist researchers in analyzing missing,erroneous or incomplete patient data",
        "Writing tools and visualizations to surface data insights from the above methods to researchers"
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon-sql",
          style: {
            backgroundColor: "transparent"
          }
        }
      ]
    },
    {
      title: "Data Visualization",
      imagePath: "data-visualization.svg",
      skills: [
        " Report and visualize results of statistical analyses, in the form of graphs, charts, and tables",
        " Conduct regular data mining and exploratory analyses across analytics spectrum to ensure data quality & integrity and to produce data insights",
        " Develop dashboards to illustrate data insight and describe predictive modeling output."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "D3",
          fontAwesomeClassname: "logos:d3",
          style: {
            color: "#663399"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        " Experience working on multiple cloud platforms",
        " Create and maintain framework for deploying machine on Cloud",
        " Engineer computational solutions and develop algorithms and deploying them through REST API in production"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "API",
          fontAwesomeClassname: "carbon:api-1",
          style: {
            color: "#FF7C00"
          }
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        }
      ]
    },
    {
      title: "Package Development",
      imagePath: "ui_ux_design.svg",
      skills: [
        " Designed multiple R packages for the community to make vis easy.",
        " Developed a R Package to facilitate contact tracing on visit-based data with a specific focus on providers of community-based healthcare.",
        " Packaging and deploying them for the public usage"
      ],
      softwareSkills: [
        {
          skillName: "RStudio",
          fontAwesomeClassname: "simple-icons:rstudio",
          style: {
            color: "#005daa"
          }
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#3569c4"
      },
      profileLink: "https://scholar.google.com/citations?user=VjR1JYQAAAAJ&hl=en"
    },
    {
      siteName: "Stackoverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#f48024"
      },
      profileLink: "https://stackoverflow.com/users/7120667/rushabh-patel"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/rushabhpatel"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Symbiosis International University",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "siu.png",
      alt_name: "SIU",
      duration: "2011 - 2015",
      descriptions: [" - Bachelor of Technology (B.Tech) in Computer Science"
      ],
      website_link: "http://siu.edu.in"
    },

    {
      title: "University of Illinois",
      subtitle: "MS in Computer Science",
      logo_path: "uis.png",
      alt_name: "UIS",
      duration: "2016 - 2017",
      descriptions: [
        " - Master of Science (MS) in Computer Science GPA - (4.0/4.0)"," - Honors In Computer Science ( For best Academics and Research)"
        ],
      website_link: "http://uis.edu"
    },

    {
      title: "Temple University",
      subtitle: "PhD in Computer Science",
      logo_path: "temple.png",
      alt_name: "temple",
      duration: "2020 - Present",
      descriptions: [
        " - Started PhD in Computer Science (Artificial Intelligence and Applications Track) under the supervision of Dr. Longin Jan Latecki (https://cis.temple.edu/~latecki/)"
      ],
      website_link: "http://temple.edu"
    }



  ]
}

const certifications = {
	certifications: [
		{
			title: "R",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "rlogo.png",
			color_code: "#D83B0199"
		},
		{
			title: "Python",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "pythonlogo.png",
			color_code: "black"
		},
		{
			title: "Apache Spark",
			subtitle: " Years of Experience: 1+\n Expertise: Begineer",
			logo_path: "sparklogo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Scala",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "scalalogo.png",
			color_code: "#1F70C199"
		},
		{
			title: "Redshift",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "redshiftlogo.png",
			color_code: "#D83B0199"
		},
		{
			title: "Tableau",
			subtitle: "Years of Experience: 1+\n Expertise: Begineer",
			logo_path: "tableaulogo.png",
			color_code: "#1F70C199"
		},
		{
			title: "H2O.ai",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "h2ologo.png",
			color_code: "#0C9D5899"
		},
		{
			title: "Tensorflow",
			subtitle: "Years of Experience: < 1\n Expertise: Begineer",
			logo_path: "tflogo.png",
			color_code: "#00000099"
		},
		{
			title: "PyTorch",
			subtitle: "Years of Experience: < 1 \n Expertise: Begineer",
			logo_path: "pytorch-logo.png",
			color_code: "#2A73CC"
		},
		{
			title: "R Shiny",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "shinylogo.png",
			color_code: "#4285F499"
		},
		{
			title: "GGPLOT2",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "ggplotlogo.png",
			color_code: "#FFBB0099"
		},
		{
			title: "SQL",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "sqllogo.png",
			color_code: "#4285F499"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg"


};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+1(515) 981-8460",
  email_address: "rushabh.patel5@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
