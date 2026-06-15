export const profile = {
  name: "Mohan Pujari",
  role: "Senior Business Analyst — Healthcare Analytics & RWE",
  tagline:
    "Turning 50M+ patient records into feasibility answers, treatment-pattern insight, and decisions that move studies forward.",
  location: "Remote · U.S. Healthcare Analytics",
  email: "alex.sharma.analytics@example.com",
  linkedin: "https://www.linkedin.com/in/mohan-pujari/",
  github: "https://github.com/mohanrockz",
  resumeUrl: "/Mohan_Pujari_Resume.pdf",
  yearsExperience: 3.8,
  recordsAnalyzed: "50M+",
};

export const heroStats = [
  { label: "Patient records analyzed", value: "50M+", suffix: "" },
  { label: "Feasibility turnaround reduced", value: "30–40", suffix: "%" },
  { label: "Years in U.S. Healthcare Analytics", value: "3", suffix: "+" },
  { label: "RWE therapeutic areas led", value: "2", suffix: "" },
];

export const cohortFunnel = [
  { label: "Claims Universe (Medicare, Medicaid, Commercial)", value: 50_000_000, code: "RAW" },
  { label: "Diagnosis match — ICD-10", value: 4_200_000, code: "ICD-10" },
  { label: "Treatment exposure — NDC / GPI", value: 860_000, code: "NDC · GPI" },
  { label: "Continuous enrollment ≥ 12mo", value: 312_000, code: "ENROLL" },
  { label: "Final eligible cohort", value: 84_500, code: "COHORT" },
];

export const about = {
  paragraphs: [
    "I'm a Senior Business Analyst working at the intersection of healthcare data and clinical decision-making — translating Medicare, Medicaid, and commercial claims into evidence that pharma, payer, and research teams can act on.",
    "Over the last three-plus years I've built feasibility pipelines, traced patient journeys across oncology and immunology, and worked directly in longitudinal claims data using SQL, Python, SAS, BigQuery, and Snowflake — usually under tight study timelines where 'directionally right by Thursday' beats 'perfect next month.'",
    "What I care about most: making real-world evidence work reproducible. That means automation frameworks other analysts can run without me, documentation that survives a study handoff, and outputs a clinical reviewer can trust on first read.",
  ],
  highlights: [
    { label: "Core focus", value: "Real-World Evidence & Observational Research" },
    { label: "Data scale", value: "50M+ patient records, longitudinal claims" },
    { label: "Therapeutic depth", value: "Oncology & Immunology RWE studies" },
    { label: "Signature build", value: "BigQuery feasibility automation framework" },
  ],
};

export const healthcareExpertise = [
  {
    title: "Cohort Identification",
    description:
      "Defining and validating patient cohorts from claims using diagnosis, procedure, and drug-exposure logic aligned to study protocols.",
    tags: ["ICD-10", "CPT", "Inclusion/Exclusion Logic"],
  },
  {
    title: "Feasibility Assessments",
    description:
      "Rapid sizing of eligible populations across payer types to inform study design, site selection, and protocol feasibility decisions.",
    tags: ["Medicare", "Medicaid", "Commercial Claims"],
  },
  {
    title: "Treatment Pattern Analysis",
    description:
      "Mapping lines of therapy, switching behavior, and adherence patterns from longitudinal drug-exposure records.",
    tags: ["NDC", "GPI", "Lines of Therapy"],
  },
  {
    title: "Patient Journey Analytics",
    description:
      "Reconstructing the end-to-end care pathway — diagnosis, treatment, monitoring, progression — from fragmented claims events.",
    tags: ["Longitudinal Claims", "Care Pathways", "Event Sequencing"],
  },
  {
    title: "Drug Exposure Analysis",
    description:
      "Quantifying exposure windows, dosing patterns, and persistence using pharmacy claims at the NDC/GPI level.",
    tags: ["NDC", "GPI", "Persistence & Adherence"],
  },
  {
    title: "HEOR Support",
    description:
      "Generating cost, utilization, and outcomes inputs for health economics and outcomes research deliverables.",
    tags: ["Cost & Utilization", "Outcomes Modeling"],
  },
  {
    title: "Longitudinal Claims Data",
    description:
      "Working across multi-year Medicare, Medicaid, and commercial claims to support durable, reproducible study designs.",
    tags: ["Medicare", "Medicaid", "Commercial"],
  },
  {
    title: "Coding Systems Fluency",
    description:
      "Day-to-day fluency across the coding systems that make claims data usable for clinical research.",
    tags: ["ICD-10", "CPT", "NDC", "LOINC", "GPI"],
  },
];

export const technicalSkills = [
  { name: "SQL", category: "Querying & Data Modeling", level: 95 },
  { name: "Python", category: "Automation & Analysis", level: 90 },
  { name: "SAS", category: "Clinical/Claims Programming", level: 85 },
  { name: "Google BigQuery", category: "Cloud Data Warehouse", level: 92 },
  { name: "Snowflake", category: "Cloud Data Warehouse", level: 88 },
  { name: "Power BI", category: "Visualization & Reporting", level: 90 },
  { name: "Excel", category: "Ad-hoc Analysis & QC", level: 95 },
];

export const experience = [
  {
    role: "Senior Business Analyst — Healthcare Analytics & RWE",
    company: "Real-World Evidence Solutions Group",
    period: "2023 — Present",
    location: "Remote (U.S. Healthcare)",
    points: [
      "Led feasibility assessments and cohort identification for oncology and immunology RWE studies using Medicare, Medicaid, and commercial claims.",
      "Designed and built a BigQuery-based healthcare automation framework that standardized feasibility logic across study teams, cutting turnaround time by 30–40%.",
      "Performed treatment pattern and drug exposure analysis across longitudinal claims using NDC/GPI mappings to support lines-of-therapy reporting.",
      "Partnered with clinical and HEOR teams to translate protocol-level eligibility criteria into production SQL and Python pipelines.",
      "Built Power BI dashboards giving study leads self-serve visibility into cohort counts, attrition funnels, and exposure trends.",
    ],
  },
  {
    role: "Business Analyst — Claims & Data Analytics",
    company: "Healthcare Data Analytics Group",
    period: "2022 — 2023",
    location: "Remote (U.S. Healthcare)",
    points: [
      "Analyzed patient-level data across 50M+ records in Snowflake and SQL to support observational study design and ad-hoc client requests.",
      "Developed reusable SQL logic for ICD-10/CPT-based cohort definitions, reducing analyst setup time for new study requests.",
      "Built patient journey and care-pathway views from longitudinal claims to support market access and HEOR teams.",
      "Maintained QC and validation processes for claims-derived datasets feeding downstream reporting and dashboards.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Feasibility Automation Platform",
    summary:
      "A BigQuery-based framework that turns protocol eligibility criteria into a repeatable feasibility pipeline — cutting turnaround from days to hours.",
    description:
      "Replaced ad-hoc, per-study SQL with a parameterized feasibility engine on BigQuery. Analysts define cohort criteria (diagnosis, treatment, enrollment windows) through a structured input layer; the framework generates the attrition funnel, population counts by payer type, and exportable summary tables automatically.",
    impact: [
      "Reduced feasibility turnaround time by 30–40% across study teams",
      "Standardized cohort logic across Medicare, Medicaid, and commercial claims",
      "Cut manual QC effort through built-in validation checks at each funnel stage",
    ],
    stack: ["Google BigQuery", "SQL", "Python", "Power BI"],
    type: "Automation Framework",
  },
  {
    title: "Patient Treatment Journey Analytics",
    summary:
      "Reconstructs end-to-end oncology and immunology patient journeys from fragmented longitudinal claims — diagnosis to treatment to progression.",
    description:
      "Built event-sequencing logic that stitches together diagnosis (ICD-10), procedure (CPT), and drug exposure (NDC/GPI) events into a single chronological journey per patient. Used to identify lines of therapy, time-to-treatment, switching patterns, and persistence — core inputs for HEOR and market access deliverables.",
    impact: [
      "Identified treatment-switching patterns across multiple lines of therapy",
      "Produced persistence and adherence metrics directly from pharmacy claims",
      "Delivered patient journey visualizations used in client-facing study reports",
    ],
    stack: ["SQL", "Python", "SAS", "Snowflake"],
    type: "Clinical Analytics",
  },
  {
    title: "End-to-End Data Pipeline (Python + Snowflake + S3)",
    summary:
      "A scheduled ingestion-to-warehouse pipeline that lands raw claims extracts in S3, transforms them in Python, and loads structured tables into Snowflake.",
    description:
      "Designed an ELT pipeline that ingests raw monthly claims files into S3, applies Python-based cleaning and standardization (coding system normalization across ICD-10, CPT, NDC, LOINC, GPI), and loads analysis-ready tables into Snowflake for downstream BI and study teams.",
    impact: [
      "Automated monthly ingestion of multi-source claims extracts",
      "Standardized coding systems across source files prior to warehouse load",
      "Reduced manual data-prep time for downstream analysts and HEOR teams",
    ],
    stack: ["Python", "Snowflake", "AWS S3", "SQL"],
    type: "Data Engineering",
  },
];

export const certifications = [
 
  {
    title: "Google Cloud — BigQuery for Data Analysts",
    issuer: "Google Cloud Skills Boost",
    year: "2023",
  },
  {
    title: "Microsoft Power BI Data Analyst -  Udemy",
    issuer: "Microsoft",
    year: "2022",
  },
];

export const education = [
  {
    degree: "Master in Computer Applications",
    school: "RV College of Engineering, Banglore",
    period: "2020 — 2022",
    notes: "Focus on all technologies - front-end/ backend/ SQL / data managment",
  },
  {
    degree: "BSc in Computer Science",
    school: "Appa college of Science",
    period: "2017 — 2020",
    notes: "Foundation in statistical methods, and data analysis.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
