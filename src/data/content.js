const M = "https://tis.edu.in/_next/static/media/";

export const school = {
  name: "Tulas International School",
  phone: "+91-9837983791",
  phoneLabel: "+91-98379 83791",
  email: "info@tis.edu.in",
  landlines: ["0135-2699444", "0135-2699666"],
  address:
    "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  applyUrl: "https://admission.tis.edu.in",
  logo: M + "schoolLogo.95f6e121.png",
  heroImage: M + "polo.973ddbae.webp",
};

export const navItems = [
  { label: "About TIS", href: "#about" },
  { label: "Boarding Life", href: "#life" },
  { label: "Beyond Academics", href: "#sports" },
  { label: "Achievers", href: "#achievers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Admission", href: "#enquire" },
];

export const stats = [
  { to: 22, suffix: "", label: "Acre pollution free campus" },
  { to: 16, suffix: "+", label: "Olympic sports" },
  { to: 24, suffix: "×7", label: "Medical assistance" },
  { to: 6, suffix: ":1", label: "Student teacher ratio" },
];

export const gallery = [
  "polo.973ddbae.webp",
  "karate.4020fba5.webp",
  "swimming.6fc81e65.webp",
  "pot.6f7c2ee3.webp",
  "dance.88843edb.webp",
].map((f) => M + f);

export const sports = [
  "Archery",
  "Cycling",
  "Hockey",
  "Swimming",
  "Taekwondo",
  "Football",
  "Shooting Range",
  "Horse Riding",
  "Billiards",
  "Squash",
  "Volleyball",
  "Basketball",
  "Cricket",
  "Lawn Tennis",
  "Badminton",
  "Table Tennis",
];

export const rankings = [
  {
    rank: "#1",
    place: "In Dehradun",
    text: "Co-Educational Boarding School in Dehradun by Education Today",
  },
  {
    rank: "#2",
    place: "In Uttarakhand",
    text: "Co-Educational Boarding School in North India by Education Today",
  },
  {
    rank: "#1",
    place: "In North India",
    text: "Co-Educational Boarding School in North India by Outlook",
  },
  {
    rank: "#4",
    place: "In India",
    text: "Co-Educational Boarding School in India by Education Today",
  },
];

export const achievers = [
  {
    name: "Sakshi Malik",
    role: "First Indian woman wrestler to win an Olympic medal (Rio 2016). Padma Shri 2017.",
    img: "SakshiMalik.91174bf4.webp",
  },
  {
    name: "Abhishek Verma",
    role: "6th highest world ranking, Arjuna Awardee, Asian Games gold medalist in archery 2013.",
    img: "AbhishekVerma.18f9d349.webp",
  },
  {
    name: "Aditi Gopichand Swami",
    role: "7th highest world ranking, Arjuna Awardee, archery World Champion 2024.",
    img: "AditiGopichandSwami.b7afa246.webp",
  },
  {
    name: "Ojus Devtale",
    role: "9th highest world ranking, Arjuna Awardee 2023 and current world champion in archery.",
    img: "OjasPravinDeotale.1d2e01cc.webp",
  },
  {
    name: "Vishesh Bhriguvanshi",
    role: "Indian Basketball Team captain and major FIBA Asia Championship player.",
    img: "VisheshBhriguvanshi.52af8bfd.webp",
  },
  {
    name: "Saurabh Joshi",
    role: "Influencer with 30 million subscribers on YouTube.",
    img: "SaurabhJoshi.450ff5df.webp",
  },
  {
    name: "Laxmi Agarwal",
    role: "Founder of The Laxmi Foundation. International Women Empowerment Award.",
    img: "LakshmiAgarwal.7405df5d.webp",
  },
].map((a) => ({ ...a, img: M + a.img }));

export const reviews = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    text: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    text: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    text: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
  },
  {
    name: "Suresh Kumar",
    relation: "F/O Aditya Kumar",
    text: "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.",
  },
  {
    name: "Ashu Arora",
    relation: "M/O Manisha Changrani",
    text: "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent.",
  },
  {
    name: "Gulabdas Gupta",
    relation: "F/O Annika Gulabdas Gupta",
    text: "She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.",
  },
];

export const classes = [
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

export const states =
  "Andhra Pradesh|Bihar|Chandigarh|Chhattisgarh|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Madhya Pradesh|Maharashtra|Odisha|Punjab|Rajasthan|Sikkim|Tamil Nadu|Telangana|Uttar Pradesh|Uttarakhand|West Bengal|Other".split(
    "|",
  );

export const footerLinks = [
  "FAQ",
  "Calendar",
  "Brochure",
  "Privacy Policy",
  "Terms & Conditions",
  "Disclaimer",
];
