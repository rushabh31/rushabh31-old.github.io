import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internships and Publications",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Applied Data Scientist II",
					company: "Children's Hospital of Philadelphia (DBHi)",
					company_url: "https://legatohealthtech.com/",
					logo_path: "chop.png",
					duration: "June 2020 - PRESENT",
					location: "Philadelphia, PA",
					description: "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
					color: "#0879bf"
				},
				{
					title: "Data Scientist",
					company: "Visiting Nurse Service of New York",
					company_url: "https://www.vnsny.org/",
					logo_path: "vnsny.png",
					duration: "Feb 2019 - June 2020",
					location: "New York City, NY",
					description:
						"- Develop, build, test and deploy machine learning algorithms to support development of business processes for healthcare organization and subsidiary health plan provider, to improve business outcomes and quality of care.  \- Create and maintain framework for deploying machine learning algorithms using APIs. - Utilize resulting applications to implement, track and monitor predictive models used to guide business decisions. - Engineer computational solutions and develop algorithms and applications to meet the predictive  needs of clinical and business units across the Visiting Nurse Service of New York. - Identify clusters of sub-populations of patients who may benefit from targeted care-management strategies: improves positive predicted value for patient outcomes based on sub-modeling for each cluster. - Ensure accuracy of deployed algorithms is monitored on ongoing basis alert management when algorithm performance declines, identify causes. - Ensure data quality throughout all stages of acquisition and processing, including sourcing, collection, ground truth generation, normalization & transformation.Programming languages\Techniques\tools: R, SQL, Python, Apache Spark, Tableau, H2O, Random Forest, XGBoost, Light GBM, Regression, Clustering, KNN, GBM, PCA, SVD.",
					color: "#9b1578"
				},
				{
					title: "Data Scientist",
					company: "Jvion Inc.",
					company_url: "https://www.jvion.com/",
					logo_path: "jvion.png",
					duration: "June 2017 - Jan 2019",
					location: "Johns Creek, GA",
					description:
						"Design statistical models/programs using R/Python to successfully test hypotheses and answer targeted questions in healthcare outcomes research. • Design algorithms for the recommended actions/interventions that will best prevent adverse events and deterioration. • Cluster analysis for identifying sub-populations of complex patients who may benefit from targeted care management strategies and improvising positive predicted value for patient outcome by sub-modelling on each cluster. • Perform analysis on the targets including hospital readmission among Acute Myocardial Infarction (AMI) patients, IP visits, ER visits, MRSA among diabetes patients, congestive heart failure,Clostridium difficile (C. diff.), pressure injury,sepsis and fall-injury. • Writing complex SQL queries for data investigation and mapping to extract data for analysis. • Build algorithms to reduce predictive analytics in driving population-level insights and the expected ROI from predictive population health analytic solutions. • Report and visualize results of statistical analyses, in the form of graphs, charts, and tables using Tableau. Programming languages\Techniques\tools: R, SQL, Python, Apache Spark,Tableau, H2O, Random Forest, XGBoost, HDBSCAN Clustering, KNN, GBM, PCA, SVD.",
					color: "#fc1f20"
				},
				{
					title: "Co-Founder",
					company: "PayTooth Software Solutions Limited",
					company_url: "https://www.rushabh.info/",
					logo_path: "paytooth.png",
					duration: "July 2015 - April 2016",
					location: "Pune, Maharashtra, India",
					description:
						"• Proposed a new idea where money can be transferred easily in absence or low range of cellular network. • Analyzed survey data on mobile payment gateways in India to ensure the product launching strategy. • Contributed in ensuring all implementations consistent with Software Development Lifecycle (SDLC) standards. • Involved in creating process flow diagrams for overall business specification. • Involved in understanding of data extraction, which involves Online Transfer Processing (OLTP) system and centralized database server. Programming languages\Techniques\tools: R, ETL Processing, SQL, MS ACCESS, MS EXCEL (V-Lookup, Macros, Pivot Tables).",
					color: "#fc1f20"
				}
			]
		},
		{
			title: "Internships",
			experiences: [

			  {
					title: "Data Science Analyst",
					company: "University of Illinois",
					company_url:
						"https://uis.edu",
					logo_path: "uis.png",
					duration: "March 2017 - May 2017",
					location: "Springfield, IL",
					description:
						"• Worked as a Data Science Analyst on pediatric cancer patient data from SIU School of Medicine (SIUSOM). • Applied statistical & predictive modeling techniques to identify significant patterns in the diagnosis and treatment of the SIUSOM’s service region of central and southern Illinois. • Performed the initial statistical exploration using R to gain insights on the data • Analyzed data to find specific correlations between demographic information and disease unique to the pediatric patients that are served by SIUSOM. • Concentrated on linkages between socioeconomic status, racial/ethnic demographics, zip code, and other demographic factors and specific pediatric diseases. • Analyzed these linkages in a manner that allows clinician researchers to reexamine our approaches and treatment plans on the patients that we serve. Programming languages\Techniques\tools: R, SQL, MS EXCEL, Tableau, Exploratory Data Analysis, Chi-Squared Test, Association Rules, Logistic Regression, LDA, QDA, KNN, tree classification and random forest method.",
					color: "#0071C5"
				},
				{
					title: "Research Student Worker",
					company: "University of Illinois",
					company_url:
						"https://uis.edu",
					logo_path: "uis.png",
					duration: "May 2016 - August 2016",
					location: "Springfield, IL",
					description:
						"• Worked on a Supply Chain Management Project to ensure a proper level of inventory in a warehouse by forecast recommendations. • Collected and reviewed data from different research studies. • Wrote R code to perform statistical analysis and meta-analysis on data to get key insights. • Used R packages like Carat, ggplot2, sqldf, metafor to create statistical models and perform visual data analysis. • Involved in defining the source to target data mappings, business rules, and data definitions. • Performed data analysis and data profiling using complex SQL on various sources systems. • Created dashboards in Excel to understand visualizations for non-technical users.Programming languages\Techniques\tools: R, Excel, Pivot table, VLOOKUP, SQL, t-test, Hypothesis testing, descriptive Statistics.",
					color: "#0071C5"
				},
				{
					title: "Research Assistant",
					company: "University of Illinois",
					company_url:
						"https://uis.edu",
					logo_path: "uis.png",
					duration: "Jan 2016 - April 2016",
					location: "Springfield, IL",
					description:
						"• Worked on a project name A Novel Computer Aided Diagnosis(CAD) System for Breast Cancer Based on Convolution Neural Network(CNN). • It is presented using an innovative tumor classification method based on convolution neural network on breast mammogram images to improve the diagnosis accuracy. • A novel training and testing scheme is also proposed to train CNN in an image dataset with limited case number. • A novel reinforcement sample learning scheme is proposed to train the CNN with less iteration epochs and less training time. Programming languages\Techniques\tools: MATLAB, R, Neural Network, Conjugate Gradient Method.",
					color: "#0071C5"
				},
				{
					title: "Intern",
					company: "Allstate India",
					company_url: "https://www.aspl.in/",
					logo_path: "allstate.png",
					duration: "Jan 2014 - May 2014",
					location: "Bengluru, Karnataka",
					description:
						"• Worked on a project named Document Processing System, which holds data for customers involved in a claim.",
					color: "#ee3c26"
				}

			]
		},
		{
			title: "Publications",
			experiences: [
				{
					title: "Pediatric Population Health Analysis of Southern and Central Illinois Region: A Cross Sectional Retrospective Study Using Association Rule Mining and Multiple Logistic Regression",
					company: "Computer Methods and Programs in Biomedicine, Elsevier",
					company_url: "https://www.sciencedirect.com/science/article/abs/pii/S0169260718312914?via%3Dihub",
					logo_path: "cmpb.png",
					duration: "June 2019",
					description:
						"Southern Illinois University School of Medicine (SIUSOM) collects large amounts of data every day. SIUSOM and other similar healthcare systems are always looking for better ways to use the data to understand and address population level problems. The purpose of this study is to analyze the administrative dataset for pediatric patients served by Southern Illinois University School of Medicine (SIUSOM) to uncover patterns that correlate specific demographic information to diagnoses of pediatric diseases. The study uses a cross-sectional database of medical billing information for all pediatric patients served by SIUSOM between June 2013 and December 2016. The dataset consists of about 980.9K clinical visits for 65.4K unique patients and includes patient demographic identifiers such as their sex, date of birth, race, anonymous zipcode and primary and secondary insurance plan as well as the related pediatric diagnosis codes. The goal is to find unknown correlations in this database.",
					color: "#4285F4"
				},
				{
					title: "A Novel Reinforcement Sample Learning Strategy for Convolution Neural Network in Computer Aided Diagnosis System for Breast Cancer",
					company: "Society for Imaging Informatics in Medicine 2017 Conference",
					company_url: "https://cdn.ymaws.com/siim.org/resource/resmgr/siim2017/abstracts/posters-Pan.pdf",
					logo_path: "siim.png",
					duration: "2017",
					description:
						"Breast cancer is a common, potentially fatal condition with high morbidity and mortality. Its malignancy ranks second as a cause of cancer death in women. Mammogram is an important tool to detect mass and diagnosis breast cancer. We are developing a Computer Aided Diagnosis (CAD) system for breast cancer using mammogram based on convolution neural networks (CNN) to assistant radiologists in achieving better performance during diagnosis. Due to the variable image quality and shapes typically present on some mammograms, it is difficult to observe the significant characteristics of cancer such as microcalcification and mass, and challenging to interpret the features and make a diagnosis on these cases. The purpose of this study is to develop a new fully automatic feature extraction and classification method in breast cancer CAD systems.",
					color: "#D83B01"
				},
				{
					title: "Envision of I-RS (I-Railway System) - based on Cloud Computing",
					company: "International Journal of Science, Engineering and Technology Research",
					company_url: "http://ijsetr.org/wp-content/uploads/2015/01/IJSETR-VOL-4-ISSUE-1-78-82.pdf",
					logo_path: "ijsetr.png",
					duration: "Jan 2015",
					description:
						"Cloud computing is typically defined as a type of computing that relies on sharing of computing resources rather than having local servers. Cloud computing has brought new changes and opportunities to IT industry. It is a new emerging technology, the years of research in virtualization, distributed and utility computing, and more recently networking, web and software services created base for the term 'Cloud' in Cloud Computing. It offers a service oriented architecture, reduced information technology overhead for the end-user, greater for flexibility, reduced total cost of ownership, on-demand services and many other things. The railway department will use the cloud computing to achieve sharing of railway information resources and to improve the capacity of information processing. The recent move; Indian Railways have given few contracts to IT companies to enhance train services by installing Wi-Fi in selected train. The Indian railway is the world’s fourth largest railway network which carries near about 30 million passengers daily and near about 2.8 million tons of freight daily [12]. But in spite of that, the railways usually under goesloss and main reason behind this is that a large number of passengers every day travelled without ticket which results in overloading of compartments and in turn creating problem for reserved train ticket holders. Thus, by implementing cloud computing for Indian railways we can develop a system which can improve its facilities. The organization of this paper is like section I gives introductory details, section II and III discuss details about why to use cloud computing? and different cloud service models, section IV and V throws light on cloud deployment models and role of IT in railway respectively, in section VI improvement in railway using cloud computing, in section VII techniques used in I-RS, in section VIII advantages and in section IX challenges of proposed system are discussed. In section X concluding remarks and at the lastreferences are mentioned",
					color: "#000000"
				},
				{
					title: "Comparative Review of Existing Mobile Payment Systems",
					company: "International Journal of Applied Engineering Research",
					company_url:
						"https://www.researchgate.net/profile/Rahul_Joshi19/publication/279189695_Comparative_Review_Of_Existing_Mobile_Payment_Systems/links/558d525808aee3a2ad9a0885.pdf",
					logo_path: "ijaer.png",
					duration: "2015",
					description:
						"The term “mobile phone” has become a heart for humans to survive in technical opportunity. Today the mobile phone is not only a full communication platform with email, instant messaging, video calls, and a social media interface, it also offers functional applications like navigation, e-commerce. In short, the Smartphone has become the most successful “functionality aggregator”. Mobile payment, also referred to as mobile money, mobile money transfer, and mobile wallet, generally it is refer to payment services operated from or via a mobile device [1]. In this paper, we will discuss about mobile payment technologies their characteristics which are required to be used by mobile payment systems, common-uncommon things among them and advancement in the system. We will also look a complete comparison between the commonly used technologies like: Bluetooth, Infrared data association (IrDA), Radio Frequency Identification (RFID) and Near Field Communications (NFC) according to the most common factors which affect the quality of mobile payment systems presented. In this paper evaluations of the advantages and issues involved with using these technologies are also presented.",
					color: "#0C9D58"
				},
				{
					title: "Introducing a Hi-Tech - Cloud based Public Transport System",
					company: "International Journal of Computational Intelligence Research",
					company_url: "https://www.academia.edu/28589235/Introducing_a_Hi-Tech_-Cloud_based_Public_Transport_System",
					logo_path: "ijcir.png",
					duration: "2015",
					description:
						"This paper presents advancement in public transport services, like use of Hi-Tech components and software which may lead this transportation system to be more stable and easier to operate. In this paper, we will introduce a framework which will help passengers and other users to track exact location of bus and count number of passengers. Today major problem of public transportation is overloading of buses which leads to accidents and creates life risk to other vehicles. In this paper, we will introduce some devices which can keep count of passengers travelling in buses. We will also introduce cloud computing which in turn will help government as well as user to easily operate and keep track of bus services. So, Let us first see what is cloud? - as we know that cloud computing can be used for deploying groups of remote servers and software’s networked that allows centralized data storage and online access to computer services or resources[10] services such as shared resources, platforms, software and data, as per the interest of end-users [10]. They are located in distributed datacenters over a network such as internet. In this paper, we will introduce a new cloud computing model called Hi-tech Cloud computing model for public transportation and it is also proposed to improve transport outcomes like to track the location, count passengers. Therefore, by using this proposed cloud services public transportation system will lead to new peak. The organization of this paper is viz. in section [A] introductory details, in section [B] role of Information Technology in Public Transportation system, in section [C] proposed improvements in it, in section [D] working methodology for proposed advancements in the same is described. The section [E] represents concluding remarks and in section [F] references used in this paper are listed.",
					color: "#181717"
				},
				{
					title: "Evolution & Envisage of Mobile Network",
					company: "International Journal of Scientific Engineering and Research",
					company_url: "http://www.ijsetr.com/issue.php?issue=ISSUE%201&volume=Volume3&page=3",
					logo_path: "ijsetr.png",
					duration: "Jan 2014",
					description:
						"In mobile network communication there is an endless quest for development of high bandwidth and high quality network. In this paper we will present the study of ongoing Generations of mobile communication network which are being used i.e. 1G, 2G, 3G and also try to find the evolution of new generation of mobile network. Current research in mobile wireless technology concentrates on advance implementation of 4G technology. Currently 5G term is not officially used. In 5G researches are being made on development of World Wide Wireless Web (WWWW), Dynamic Adhoc Wireless Networks (DAWN) and Real Wireless World. The Aim of this study is to show advancement in the field of new generations of mobile network and the emerging issue in 3G network which can be fulfilled in advance mobile network line up.",
					color: "#181717"
				},
				{
					title: "Paytooth - A Cashless Mobile Payment System based on Bluetooth",
					company: "International Journal of Computer Applications",
					company_url: "https://research.ijcaonline.org/volume120/number24/pxc3904450.pdf",
					logo_path: "ijca.png",
					duration: "June 2015",
					description:
						"The government authority, banking industry and regular citizens all experience a high overhead in using cash and credit/debit cards. E-cash and Mobile payment in particular is a feasible alternative to physical cash, since it will experience much lower overhead and offers more convenience. The concept of Mobile Payment is also known as Mobile Money and Mobile Wallet. Here, in all such systems customer will be paying for a wide range of goods and services using mobile phone. In today's world, mobile device is the most popularly used system for Mobile Payment. Wireless and proximity technology provides a new way for implementation and working of mobile payment systems. In this aspect, the capacity and power of using short-range wireless technologies such as Bluetooth is extensive. Bluetooth is an open wireless and widely available protocol for transmitting and receiving data over short distances between two mobile phones. In our proposed system Bluetooth is used as a connection medium between two devices. In this paper, implementation of new concept of mobile payment system using Bluetooth is presented.",
					color: "#181717"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
