// Detailed content for popular study destinations (Canada, UK, USA)
// decoupling text data from presentation for easy maintenance.

export const destinationsData = {
  canada: {
    name: "Canada",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
    shortDescription: "Complete details on the U15 research universities, co-op earnings, newer 2026 cap rules, and Express Entry PR pathways.",
    quickStats: {
      currency: "Canadian Dollar (CAD, C$)",
      conversion: "1 CAD ≈ ₹66 - ₹67 (as of July 2026)",
      languages: "English & French (Bilingual)",
      primaryIntake: "Fall (September)",
      costEstimation: "CAD 20,000 - 45,000 / year"
    },
    sections: [
      {
        id: "getting-to-know",
        title: "Getting to Know Canada",
        content: [
          "Canada is a federation of 10 provinces and 3 territories, the second-largest country in the world by land area but home to a comparatively small population of around 41 million, heavily concentrated in cities close to the US border — Toronto, Vancouver, Montreal, Ottawa, and Calgary account for the bulk of the country's university-going population and job opportunities.",
          "<strong>Language:</strong> Canada is officially bilingual — English is dominant everywhere except Quebec, where French is the primary language (Montreal, however, remains highly bilingual and English is entirely sufficient for most programmes and daily life even there). Nearly all the universities in this guide teach primarily in English.",
          "<strong>Currency:</strong> The Canadian Dollar (CAD, symbol $ or C$) is Canada's currency. As of July 2026, 1 CAD is trading at approximately ₹66 to ₹67, according to live market data. Always check a live converter before budgeting your tuition and living costs.",
          "<strong>Academic calendar:</strong> Canada runs a Fall (September) intake as the primary and largest one, with Winter (January) and, at some universities, Summer (May) intakes offering a smaller range of programmes.",
          "<strong>Why students choose Canada:</strong> For years, Canada was seen as the most immigration-friendly major study destination — a relatively clear path from study permit to Post-Graduation Work Permit (PGWP) to permanent residency (PR) via Express Entry. Important update for 2026: Canada has tightened its international student policy substantially since 2024, introducing a national cap on study permits, stricter PGWP eligibility tied to specific fields of study, and higher financial-proof requirements. Canada remains an excellent, high-quality, relatively affordable destination — but it is no longer the 'easy PR' pathway it was once perceived to be, and students should plan primarily around education quality and career fit, treating PR as a possible long-term outcome rather than a guarantee."
        ]
      },
      {
        id: "university-landscape",
        title: "The University Landscape: Where to Apply",
        content: [
          "Canada's leading research universities are often grouped under the U15, a group of 15 research-intensive Canadian universities (Canada's rough equivalent of the US's Association of American Universities). Rankings below are drawn from the QS World University Rankings 2026 and Maclean's Canadian University Rankings 2026."
        ],
        subsections: [
          {
            title: "Ontario",
            list: [
              "<strong>University of Toronto</strong> — Toronto, Ontario. QS World Rank #29 (2026). Canada's largest and most research-intensive university, with three campuses (St. George, Scarborough, Mississauga); exceptional in computer science, engineering, and the Rotman School of Management.",
              "<strong>University of Waterloo</strong> — Waterloo, Ontario. Not always the highest on global prestige rankings, but the single most sought-after Canadian university among Indian tech applicants because of its mandatory co-op programme, which places students in 5-6 paid industry work terms across their degree — an unmatched practical advantage for computer science and engineering students.",
              "<strong>McMaster University</strong> — Hamilton, Ontario. U15 member, strong in engineering, health sciences, and business (DeGroote School of Business).",
              "<strong>Western University</strong> — London, Ontario. Strong Ivey Business School (one of Canada's top MBA programmes) and engineering faculty.",
              "<strong>Queen's University</strong> — Kingston, Ontario. U15 member, strong Smith School of Business and engineering programmes, smaller and highly research-focused.",
              "<strong>University of Ottawa & Carleton University</strong> — both in Ottawa, Canada's capital; strong technology and public-policy programmes with proximity to federal government and tech employers (Shopify, and a growing AI research cluster).",
              "<strong>York University</strong> — Toronto; Schulich School of Business is a well-regarded destination for MBA and business analytics.",
              "<strong>Toronto Metropolitan University (TMU)</strong> — Toronto; strong applied and industry-linked programmes in engineering, business, and media, popular for its downtown-Toronto location and practical curriculum design.",
              "<strong>University of Guelph & University of Windsor</strong> — strong regional choices, Guelph for agriculture/food science and Windsor for automotive engineering given its proximity to Detroit."
            ]
          },
          {
            title: "British Columbia",
            list: [
              "<strong>University of British Columbia (UBC)</strong> — Vancouver, British Columbia. QS World Rank #40 (2026). One of Canada's top two research universities, strong in computer science, engineering, forestry, and the Sauder School of Business; the Vancouver campus sits in one of the most Indian-population-dense cities in Canada.",
              "<strong>Simon Fraser University (SFU)</strong> — Burnaby, British Columbia (Metro Vancouver). Strong computing science school with close ties to Vancouver's growing tech sector (Amazon, Microsoft, and EA all have major Vancouver offices).",
              "<strong>University of Victoria</strong> — Victoria, British Columbia. Strong co-op programme, smaller and more affordable than Vancouver-proper institutions."
            ]
          },
          {
            title: "Quebec",
            list: [
              "<strong>McGill University</strong> — Montreal, Quebec. QS World Rank #27 (2026), Canada's top-ranked university this year, surpassing Toronto. English-medium instruction despite being in Quebec; internationally elite in medicine, engineering, and management (Desautels Faculty of Management).",
              "<strong>Université de Montréal & HEC Montréal</strong> — leading French-medium (with some English programmes) options, HEC Montréal being one of Canada's top business schools.",
              "<strong>Concordia University</strong> — Montreal; English-medium, strong in engineering, computer science, and business, notably more affordable than McGill while still benefiting from Montreal's low cost of living relative to Toronto and Vancouver.",
              "<strong>Polytechnique Montréal</strong> — Canada's largest engineering school, strong ties to Quebec's aerospace industry (Bombardier, CAE)."
            ]
          },
          {
            title: "Alberta & the Prairies",
            list: [
              "<strong>University of Alberta</strong> — Edmonton, Alberta. QS World Rank #94 (2026). U15 member, strong in engineering, computer science (particularly reinforcement learning and AI, home to Alberta Machine Intelligence Institute, one of the world's leading AI research labs), and energy engineering.",
              "<strong>University of Calgary</strong> — Calgary, Alberta. Strong engineering and energy-sector-linked programmes, given Calgary's role as Canada's oil and gas hub.",
              "<strong>University of Saskatchewan & University of Manitoba</strong> — strong agricultural sciences and engineering programmes, considerably lower cost of living than the major metros."
            ]
          },
          {
            title: "Atlantic & Other Provinces",
            list: [
              "<strong>Dalhousie University</strong> — Halifax, Nova Scotia. Strong ocean/marine sciences and computer science, more affordable Atlantic Canada option with a growing Indian student population.",
              "<strong>Memorial University of Newfoundland</strong> — St. John's, Newfoundland. Known for some of the lowest tuition fees among Canadian research universities, popular for engineering.",
              "<strong>Laurentian University & University of New Brunswick</strong> — smaller, more accessible universities offering computer science and business programmes with lower entry requirements and living costs, popular for students seeking a lower-cost pathway into the Canadian system."
            ]
          }
        ]
      },
      {
        id: "what-you-can-study",
        title: "What You Can Study: Courses for Indian Students in 2026",
        content: [
          "Canadian degrees generally follow: Bachelor's (4 years), Master's (1-2 years, either course-based or thesis-based), and PhD (4-6 years, typically funded). A distinctive Canadian feature — the co-op (cooperative education) programme — alternates academic terms with paid work terms and is one of the strongest reasons Indian students choose Canada specifically over the US or UK for career-focused Master's degrees."
        ],
        subsections: [
          {
            title: "Technology, Data & AI",
            list: [
              "<strong>MSc/MEng Computer Science</strong> — University of Toronto (a globally leading centre for deep learning, given its historic link to AI pioneer Geoffrey Hinton), Waterloo, UBC, and McGill are the strongest choices.",
              "<strong>MSc Artificial Intelligence / Machine Learning</strong> — University of Alberta (via Amii), University of Toronto (Vector Institute affiliation), and Montreal (Mila – Quebec AI Institute) form Canada's celebrated 'AI triangle'.",
              "<strong>Master of Data Science (MDS)</strong> — UBC's Master of Data Science is one of the most respected, industry-partnered data science degrees in Canada, a fast, applied 10-month programme.",
              "<strong>Master of Engineering (MEng) in Computer/Software Engineering with Co-op</strong> — University of Waterloo's programme is the most sought-after in the country for its guaranteed paid co-op placements.",
              "<strong>Bachelor's in Computer Science / Software Engineering</strong> — Waterloo (globally renowned for its co-op model), Toronto, UBC, and McGill are the top direct-entry undergraduate choices."
            ]
          },
          {
            title: "Business & Management",
            list: [
              "<strong>MBA</strong> — Rotman (Toronto), Ivey (Western), Desautels (McGill), and Sauder (UBC) are Canada's top-tier MBA programmes, generally requiring 2-4+ years of work experience.",
              "<strong>Master of Management / Master of Management Analytics</strong> — Rotman's MMA and Schulich's programmes are aimed at recent graduates with limited work experience, a popular alternative for Indian students not yet MBA-eligible.",
              "<strong>BBA/Bachelor of Commerce</strong> — Ivey (Western), Sauder (UBC), and Smith (Queen's) are the most recognised undergraduate business degrees."
            ]
          },
          {
            title: "Engineering & Other Fields",
            list: [
              "<strong>Mechanical, Civil, and Electrical Engineering</strong> — Toronto, Waterloo, UBC, and Alberta all offer strong, industry-connected programmes, several with co-op options.",
              "<strong>Petroleum & Energy Engineering</strong> — University of Calgary and University of Alberta lead this field given Alberta's oil and gas sector.",
              "<strong>Supply Chain & Business Analytics</strong> — a fast-growing category at Toronto Metropolitan University, Concordia, and Carleton, popular for its 1-2 year format and direct link to Canada's logistics and retail sectors.",
              "<strong>PhD programmes</strong> — typically 4-6 years, most STEM PhDs come with a funding package (assistantship + scholarship) covering tuition and a living stipend. Confirm the specific funding offer before accepting."
            ]
          }
        ]
      },
      {
        id: "exams-required",
        title: "Exams You Need and the Scores That Actually Get You In",
        content: [
          "Like Germany and the UK, most Canadian Master's programmes do not require the GRE, though GMAT remains standard for MBA and some management programmes. English proficiency testing is mandatory almost everywhere, since IELTS/TOEFL scores also feed directly into your study permit application."
        ],
        subsections: [
          {
            title: "For Master's programmes",
            list: [
              "<strong>English proficiency (mandatory):</strong> IELTS Academic 6.5-7.0 overall (no band below 6.0); TOEFL iBT 90-100; PTE Academic 60-68. Toronto, UBC, McGill, and Waterloo sit at the top of this range.",
              "<strong>GRE:</strong> rarely required, though a small number of specialised programmes (some engineering and data science master's) request it.",
              "<strong>GMAT (for MBA/Management):</strong> competitive score for Rotman, Ivey, and Desautels is typically 650-700+.",
              "<strong>Academic record:</strong> a First Class Bachelor's degree (60%+ or CGPA 7.0+/10) is the general minimum; Toronto, UBC, Waterloo, and McGill typically expect 75-80%+ or CGPA 8.0+/10 for their most competitive programmes."
            ]
          },
          {
            title: "For Bachelor's programmes (direct entry after Class 12)",
            list: [
              "<strong>Academic record:</strong> competitive offers at Toronto, UBC, Waterloo, and McGill typically require 85%+ in Class 12 (CBSE/ICSE), particularly for high-demand programmes like Waterloo's computer science and engineering, which use a supplementary application/admissions-information form (AIF) in addition to grades.",
              "<strong>English proficiency:</strong> IELTS 6.5+ or TOEFL 90+, though some universities waive this for students who completed the full Class 11-12 in an English-medium CBSE/ICSE curriculum.",
              "<strong>Waterloo Special Note:</strong> Waterloo's engineering and CS programmes additionally weigh a supplementary Admission Information Form (AIF) heavily. Start this early as it is often decisive."
            ]
          }
        ]
      },
      {
        id: "eligibility",
        title: "Eligibility: Getting Into the University and Getting Into the Country",
        content: [
          "<strong>University eligibility:</strong> A typical Canadian application requires academic transcripts, a Statement of Purpose, 2-3 Letters of Recommendation, a CV/resume, and proof of English proficiency. Applications are generally submitted directly to each university.",
          "<strong>Country (visa) eligibility:</strong> Indian students need a Study Permit issued by Immigration, Refugees and Citizenship Canada (IRCC). Key steps and 2026 realities to know:",
          "1. Receive your Letter of Acceptance from a Designated Learning Institution (DLI) — only DLIs are eligible to host international students.",
          "2. As of the 2024-2026 policy changes, most provinces require a Provincial Attestation Letter (PAL) confirming your place counts within that province's allocated cap — your university will issue this alongside your offer.",
          "3. Apply online for your Study Permit through the IRCC portal, providing proof of acceptance, financial documents, and biometrics.",
          "4. Show proof of funds: demonstrate access to funds covering tuition for the first year plus a living-cost threshold of CAD 20,635 for a single applicant.",
          "5. Most Indian applicants can use the regular Study Permit stream; processing times now run several weeks to a few months, so apply as early as possible.",
          "<strong>Important 2026 caution:</strong> Canada's international student policy has changed substantially since 2024 — including the national study permit cap, stricter spousal work permit eligibility, and PGWP eligibility now tied to a published list of 'in-demand' fields for college-level programs. Check IRCC's official website (canada.ca) for the latest rules."
        ]
      },
      {
        id: "money-matters",
        title: "Money Matters: Scholarships and Funding",
        content: [
          "Canadian tuition for international students typically runs CAD 20,000-45,000/year for Master's programmes (roughly ₹13-30 lakh at current rates) — generally cheaper than comparable US programmes, though Waterloo's co-op engineering and Toronto's professional master's programmes sit at the higher end.",
          "<strong>University entrance scholarships:</strong> Toronto, UBC, Waterloo, and McGill all offer automatic or application-based entrance scholarships (typically CAD 2,000-15,000) for strong academic profiles.",
          "<strong>Graduate funding:</strong> many research-based Master's and virtually all PhD positions come with a Graduate Assistantship covering a portion of tuition and a stipend (typically CAD 15,000-30,000/year). Course-based Master's usually do not include funding.",
          "<strong>Vanier Canada Graduate Scholarships:</strong> Canada's most prestigious doctoral scholarship (CAD 50,000/year for 3 years), open to international students.",
          "<strong>Co-op earnings:</strong> Waterloo and other co-op programmes let students earn CAD 15-25/hour during work terms, which can meaningfully offset the overall cost of the degree.",
          "<strong>Part-time work:</strong> Study Permit holders can work up to 24 hours/week off-campus during term time (a 2024 policy increase from 20 hours) and full-time during scheduled breaks."
        ]
      },
      {
        id: "classroom-to-career",
        title: "From Classroom to Career: Jobs, Salaries, and Work Visas",
        content: [
          "<strong>The Post-Graduation Work Permit (PGWP):</strong> Graduates of an eligible programme at a DLI can apply for a PGWP, valid for up to 3 years for programmes 2 years or longer. This permit allows open work authorisation with any Canadian employer, without needing sponsorship. Note that university Bachelor's, Master's, and PhD graduates remain broadly eligible.",
          "<strong>The path to Permanent Residency (PR):</strong> Canada's Express Entry system remains the main route to PR. Competition for PR has increased significantly, with rising Comprehensive Ranking System (CRS) score cut-offs. Treat PR as a possible long-term outcome, not an automatic guarantee.",
          "<strong>Typical starting salaries:</strong>",
          "• Software Engineer / Data Scientist: CAD 65,000-95,000/year (Toronto/Vancouver)",
          "• Business/Finance Analyst: CAD 55,000-80,000/year (Toronto)",
          "• Engineer (Mech/Civil/Elec): CAD 55,000-75,000/year (Alberta/Ontario)",
          "<strong>Realistic hiring bar:</strong> a completed co-op term or internship is close to essential for competitive tech hiring in Canada; a CGPA of roughly 3.0/4.0 (B average) combined with relevant work experience is the practical minimum."
        ]
      },
      {
        id: "indian-community",
        title: "The Indian Community: You Will Never Feel Far From Home",
        content: [
          "India is Canada's single largest source of international students, and the Indian-origin population in Canada now exceeds 1.8 million people, with particularly large concentrations in the Greater Toronto Area (Brampton and Mississauga) and Metro Vancouver (Surrey).",
          "Nearly every university on this list has a large, active Indian Students' Association, and cities like Brampton and Surrey effectively function as extended Indian neighbourhoods, with gurdwaras, temples, Indian grocery chains, and restaurants covering every regional cuisine within easy reach of campus."
        ]
      },
      {
        id: "settling-in",
        title: "Settling In: Practical Survival Notes",
        content: [
          "<strong>Health insurance:</strong> Ontario and BC require international students to arrange private health insurance (often through the university, roughly CAD 600-1,000/year); Quebec covers many Indian students under RAMQ.",
          "<strong>Housing:</strong> on-campus residence is common in the first year; off-campus rental markets are tight and expensive in Toronto and Vancouver — start searching several months ahead.",
          "<strong>Banking:</strong> most students open an account with RBC, TD, Scotiabank, or CIBC, which run dedicated student account programmes.",
          "<strong>Winters:</strong> winters are serious, especially in Ontario, Quebec, Alberta, and the Prairies — proper winter clothing is essential. Coastal BC (Vancouver) is milder and wetter.",
          "<strong>SIN (Social Insurance Number):</strong> apply for this as soon as you arrive — it is required for any paid work, including on-campus jobs and co-op placements."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        content: [
          "This guide draws on the QS World University Rankings 2026 (qs.com), Maclean's Canadian University Rankings 2026 (macleans.ca), Immigration, Refugees and Citizenship Canada's official study permit and PGWP guidance (canada.ca), and live currency data from Wise and X-Rates as of July 2026. Always verify the latest rules directly on canada.ca."
        ]
      }
    ]
  },
  uk: {
    name: "United Kingdom",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    shortDescription: "Discover the 1-year taught master's efficiency, Russell Group admissions, Graduate Route work visa updates, and cost-saving tips.",
    quickStats: {
      currency: "Pound Sterling (GBP, £)",
      conversion: "1 GBP ≈ ₹126 - ₹128 (as of July 2026)",
      languages: "English",
      primaryIntake: "September/October",
      costEstimation: "£17,000 - £45,000 / year"
    },
    sections: [
      {
        id: "getting-to-know",
        title: "Getting to Know the United Kingdom",
        content: [
          "The United Kingdom is a union of four nations — England, Scotland, Wales, and Northern Ireland — packed into an island smaller than the US state of Oregon, yet home to one of the most concentrated clusters of world-class universities anywhere on earth. With a population of around 68 million, the UK's higher education system spans roughly 165 universities, most of them public and government-regulated.",
          "<strong>Language:</strong> English is the language of instruction and daily life everywhere. You will hear Welsh in parts of Wales and Scots Gaelic in parts of Scotland, but neither affects student life.",
          "<strong>Currency:</strong> The Pound Sterling (GBP, symbol £) is the UK's currency. As of July 2026, 1 GBP is trading at approximately ₹126 to ₹128. This is a very strong currency, so factor conversion carefully.",
          "<strong>Academic calendar:</strong> The UK runs primarily on a single September/October intake, with a smaller January intake at some universities. Planning ahead by 10-12 months is essential.",
          "<strong>Why students choose the UK:</strong> The single biggest draw is time and cost efficiency — a UK Master's degree is typically just one year (versus two in the US), meaning lower total tuition and living costs and a faster route to the job market. The UK is also home to Oxford and Cambridge, plus London's unmatched concentration of financial and tech employers."
        ]
      },
      {
        id: "university-landscape",
        title: "The University Landscape: Where to Apply",
        content: [
          "UK universities are commonly grouped into Oxbridge (Oxford and Cambridge), the Russell Group (24 leading research-intensive universities), and other strong teaching- and research-focused institutions. Rankings below are drawn from the QS World University Rankings 2026 and the Times Higher Education World University Rankings 2026."
        ],
        subsections: [
          {
            title: "Oxbridge",
            list: [
              "<strong>University of Oxford</strong> — Oxford, England. QS World Rank #4 (2026); THE consistently ranks Oxford #1 in the UK. Collegiate structure (36 colleges), strengths in PPE, medicine, law, and humanities, with a fast-growing computer science and AI presence.",
              "<strong>University of Cambridge</strong> — Cambridge, England. QS World Rank #6 (2026). Also collegiate (31 colleges); historic strength in mathematics, natural sciences, engineering, and the birthplace of the 'Silicon Fen' tech cluster."
            ]
          },
          {
            title: "London",
            list: [
              "<strong>Imperial College London</strong> — QS World Rank #2 (2026), the UK's highest-ranked university this year and second in the world. Focused purely on science, engineering, medicine, and business; exceptional for computer science, AI, and quantitative finance.",
              "<strong>University College London (UCL)</strong> — QS World Rank #9 (2026). London's largest, broadest research university; strengths in architecture (The Bartlett), economics, computer science, and life sciences.",
              "<strong>King's College London (KCL)</strong> — QS World Rank #31 (2026). Strong in medicine, law, humanities, and the Department of War Studies.",
              "<strong>London School of Economics (LSE)</strong> — QS World Rank around #56 (2026), but top-3-5 in the UK for economics, finance, and social sciences; top choice for finance/management master's.",
              "<strong>City, University of London</strong> — home to the Bayes Business School, a strong choice for finance and business analytics.",
              "<strong>Queen Mary University of London</strong> — Russell Group member, strong in law, business, and computer science, more affordable than central-London giants.",
              "<strong>Brunel University London & University of Westminster</strong> — popular mid-tier choices for business, computing, and media with slightly lower entry requirements."
            ]
          },
          {
            title: "Scotland",
            list: [
              "<strong>University of Edinburgh</strong> — QS World Rank #34 (2026). Scotland's top university, strong in informatics (one of Europe's largest CS schools), medicine, and business.",
              "<strong>University of Glasgow</strong> — Russell Group member, strong in engineering, law, and life sciences; founded 1451.",
              "<strong>University of St Andrews</strong> — Scotland's oldest university (1413), consistently rated top in the UK for undergraduate student satisfaction.",
              "<strong>University of Aberdeen & University of Dundee</strong> — strong regional choices for engineering, energy, and life sciences."
            ]
          },
          {
            title: "England (beyond London)",
            list: [
              "<strong>University of Manchester</strong> — Russell Group; one of the largest UK universities, strong in engineering, business, and CS, with a huge Indian student community.",
              "<strong>University of Warwick</strong> — near Coventry; consistently top 10, exceptional for business (Warwick Business School), economics, and computer science.",
              "<strong>University of Bristol</strong> — Russell Group, strong in engineering, computer science, and law.",
              "<strong>University of Birmingham</strong> — Russell Group, strong business school and engineering.",
              "<strong>University of Leeds</strong> — Russell Group, strong business, engineering, and CS.",
              "<strong>University of Sheffield</strong> — Russell Group, strong engineering (aerospace/materials in partnership with Boeing).",
              "<strong>University of Nottingham</strong> — Russell Group, strong engineering, business, and pharmacy.",
              "<strong>University of Southampton</strong> — Russell Group, strong engineering (maritime) and CS.",
              "<strong>Durham University & Lancaster University</strong> — Durham has a collegiate structure; Lancaster has a top-10 business school.",
              "<strong>University of York & Newcastle University</strong> — York for CS and data science; Newcastle for marine technology and affordable living.",
              "<strong>Loughborough, Coventry, Hertfordshire, Leicester & Surrey</strong> — Surrey is renowned for its 5G/6G and computer science research."
            ]
          }
        ]
      },
      {
        id: "what-you-can-study",
        title: "What You Can Study: Courses for Indian Students in 2026",
        content: [
          "The UK's headline advantage is degree length: Bachelor's degrees run 3 years (4 in Scotland), Master's (taught, 'MSc'/'MA') run just 1 year, and PhDs run 3-4 years. This makes the UK cheaper and faster than the US for a Master's degree."
        ],
        subsections: [
          {
            title: "Technology, Data & AI",
            list: [
              "<strong>MSc Computer Science</strong> — Oxford, Cambridge, Imperial, UCL, Edinburgh, and Manchester all offer highly regarded one-year taught programmes.",
              "<strong>MSc Artificial Intelligence / ML</strong> — Edinburgh's School of Informatics (one of the largest in Europe), Imperial, UCL, and Southampton are the top UK choices.",
              "<strong>MSc Data Science / Business Analytics</strong> — Warwick, Bristol, Manchester, LSE, and Bayes Business School are popular for their strong industry links.",
              "<strong>MSc Cybersecurity</strong> — Royal Holloway, Surrey, and Lancaster are certified centres of cybersecurity excellence.",
              "<strong>BSc Computer Science</strong> — Imperial, UCL, Edinburgh, Manchester, and Warwick offer the most respected 3-year undergraduate computing degrees."
            ]
          },
          {
            title: "Business & Management",
            list: [
              "<strong>MSc Finance / MSc Management</strong> — LSE, Imperial, Warwick, and UCL are top choices, requiring little to no prior work experience (unlike US MBAs).",
              "<strong>Full-time MBA</strong> — London Business School (LBS), Oxford (Saïd), Cambridge (Judge), and Warwick are top choices; most require 3+ years of experience.",
              "<strong>BSc Business/Economics</strong> — LSE, Warwick, UCL, and Bath are top undergraduate destinations."
            ]
          },
          {
            title: "Engineering & Other Fields",
            list: [
              "<strong>Engineering (Mech/Civil/Elec/Aero)</strong> — Imperial, Cambridge, Bristol, and Sheffield lead the field.",
              "<strong>Biomedical & Life Sciences</strong> — Oxford, Cambridge, UCL, and Nottingham lead, closely tied to the UK's big pharma sector (GSK, AstraZeneca).",
              "<strong>Law (LLM)</strong> — Oxford, Cambridge, LSE, UCL, and KCL are globally recognised for one-year LLM degrees.",
              "<strong>PhD programmes</strong> — typically 3-4 years, funded through UKRI studentships, Commonwealth Scholarships, or university-specific awards."
            ]
          }
        ]
      },
      {
        id: "exams-required",
        title: "Exams You Need and the Scores That Actually Get You In",
        content: [
          "The UK's admissions process leans heavily on academic transcripts and English proficiency rather than standardized tests like the SAT or GRE. GRE/GMAT are rarely required outside specific finance/MBA courses."
        ],
        subsections: [
          {
            title: "For Master's programmes",
            list: [
              "<strong>English proficiency:</strong> IELTS Academic overall 6.5-7.5 (no band below 6.0-6.5); TOEFL iBT 90-110; PTE Academic 62-76. Oxford, Cambridge, Imperial, and LSE expect 7.0-7.5 overall.",
              "<strong>Academic record:</strong> 60% and above (First-Class) from a recognised Indian university is the Russell Group baseline. Top programs (Oxbridge, LSE, Imperial, UCL) expect 70%+ or CGPA 8.0+/10.",
              "<strong>GMAT/GRE:</strong> generally not required, except for select finance MSc programs at LSE, Imperial, or Warwick."
            ]
          },
          {
            title: "For Bachelor's programmes",
            list: [
              "<strong>Academic record:</strong> Russell Group offers require 90%+ in Class 12 (CBSE/ICSE) or equivalent A-Level/IB scores.",
              "<strong>Oxford & Cambridge:</strong> require subject-specific written tests (e.g. MAT, TSA) and formal interviews. Plan months in advance.",
              "<strong>English proficiency:</strong> IELTS 6.5-7.0 or equivalent. Some universities waive this for CBSE/ICSE English-medium students."
            ]
          }
        ]
      },
      {
        id: "eligibility",
        title: "Eligibility: Getting Into the University and Getting Into the Country",
        content: [
          "<strong>University eligibility:</strong> Requires academic transcripts, a Personal Statement, 1-2 academic references, and proof of English proficiency. Undergraduate applications run through the centralised UCAS portal, while postgraduate applications are made directly to each university.",
          "<strong>Country (visa) eligibility:</strong> Indian students need a Student Route visa to study in the UK. The core steps:",
          "1. Receive a Confirmation of Acceptance for Studies (CAS) number from your university.",
          "2. Apply online for the Student visa through gov.uk.",
          "3. Pay the visa application fee (£524) and the Immigration Health Surcharge (IHS) of roughly £776/year.",
          "4. Provide biometrics and show proof of funds covering tuition for the first year plus living costs (£1,483/month in London for up to 9 months; £1,136/month outside London). Funds must be held for at least 28 consecutive days.",
          "5. Attend a Credibility Interview if selected.",
          "<strong>Important 2026 update:</strong> The UK's Graduate Route visa length is under review. Students applying and getting their CAS before 1 January 2027 retain the current 2-year work visa; it may shorten to 18 months for entrants after that date. Verify on gov.uk."
        ]
      },
      {
        id: "money-matters",
        title: "Money Matters: Scholarships and Funding",
        content: [
          "UK Master's tuition typically ranges from £17,000 to £45,000 for a one-year taught degree, with Oxbridge, Imperial, and LSE at the top. Since it's only one year, the total cost is often lower than a two-year US Master's.",
          "<strong>Chevening Scholarships:</strong> fully funded scholarship covering tuition, living costs, and airfare for a one-year Master's. Extremely competitive; requires 2+ years of experience.",
          "<strong>GREAT Scholarships (India):</strong> joint government-university scheme offering £10,000 tuition discounts.",
          "<strong>Commonwealth Scholarships:</strong> funded PhD and select Master's scholarships for students from Commonwealth countries.",
          "<strong>University-specific awards:</strong> most Russell Group universities offer merit scholarships of £2,000-10,000 specifically for Indian applicants.",
          "<strong>Part-time work:</strong> Student Route holders can work up to 20 hours/week during term time and full-time during vacations. Minimum wage is £12.21/hour (as of April 2025)."
        ]
      },
      {
        id: "classroom-to-career",
        title: "From Classroom to Career: Jobs, Salaries, and Work Visas",
        content: [
          "<strong>The Graduate Route visa:</strong> Allows 2 years of unrestricted work in the UK (3 years for PhD) without needing employer sponsorship. Subject to changes after Jan 1, 2027.",
          "<strong>Skilled Worker visa:</strong> To stay long-term, graduates must transition to this sponsored visa. The general salary threshold is around £38,700/year, so securing a role that clears this bar is crucial.",
          "<strong>Typical starting salaries:</strong>",
          "• Software Engineer / Data Scientist: £30,000-£48,000/year (London); £26,000-£38,000/year (outside London)",
          "• Consulting/Finance Analyst: £38,000-£65,000/year at top investment banks or consulting firms (London)",
          "• Engineer (Mech/Civil/Elec): £28,000-£40,000/year (Midlands/Bristol/Sheffield)",
          "<strong>Realistic hiring bar:</strong> a Merit or Distinction classification (60-70%+) in your Master's, combined with an internship, work placement, or strong portfolio. London finance/consulting roles are exceptionally competitive."
        ]
      },
      {
        id: "indian-community",
        title: "The Indian Community: You Will Never Feel Far From Home",
        content: [
          "India is the largest source of international students in the UK, and the settled Indian diaspora exceeds 1.9 million people.",
          "Nearly every university has an active Indian Students' Society. Cities like Leicester, Birmingham, Manchester, and parts of London (Southall, Wembley, East Ham) have huge Indian communities, temples, gurdwaras, and restaurants. Coventry, Leicester, and Birmingham have such large populations that many students experience very little culture shock."
        ]
      },
      {
        id: "settling-in",
        title: "Settling In: Practical Survival Notes",
        content: [
          "<strong>Healthcare:</strong> Once you pay the IHS, you get free treatment through the NHS. Register with a local GP early.",
          "<strong>Housing:</strong> University halls are the standard first-year option. From year two, move into shared private rentals. Start searching early, especially in London, Manchester, and Edinburgh.",
          "<strong>Banking:</strong> open an account with digital banks (Monzo, Starling) or traditional high-street banks (HSBC, Barclays, NatWest) shortly after arrival.",
          "<strong>Weather:</strong> expect grey skies and rain for a good part of the year, with cold, short days in winter. Proper waterproof and warm clothing is essential.",
          "<strong>Part-time work:</strong> the 20-hour/week cap during term time is strictly enforced. Breaching it can jeopardize your visa status."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        content: [
          "This guide draws on the QS World University Rankings 2026 (qs.com), Times Higher Education World University Rankings 2026 (timeshighereducation.com), UK government student visa guidance (gov.uk), UCAS (ucas.com), Chevening (chevening.org), and the Commonwealth Scholarship Commission (cscuk.fcdo.gov.uk) as of July 2026. Always check gov.uk for updates."
        ]
      }
    ]
  },
  usa: {
    name: "United States",
    heroImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
    shortDescription: "Detailed overview of Ivy League admissions, STEM OPT 3-year work privileges, funding assistantships (RA/TA), and starting salaries.",
    quickStats: {
      currency: "US Dollar (USD, $)",
      conversion: "1 USD ≈ ₹95 - ₹96 (as of July 2026)",
      languages: "English",
      primaryIntake: "Fall (August/September)",
      costEstimation: "USD 35,000 - 65,000 / year"
    },
    sections: [
      {
        id: "getting-to-know",
        title: "Getting to Know the United States",
        content: [
          "The United States is where the study-abroad journey usually begins for most Indian families, and for good reason. It is a federal union of 50 states plus the District of Columbia, spread across six time zones, with a population of roughly 335 million people.",
          "<strong>Language:</strong> The USA has no official language at the federal level, but English is the language of instruction, business, and daily life almost everywhere. Spanish is widely spoken, but never needed for studying.",
          "<strong>Currency:</strong> The US Dollar (USD, symbol $) is the currency used nationwide. As of July 2026, 1 USD is trading at approximately ₹95 to ₹96 against the Indian Rupee. Check a live converter (Wise, XE) before budgeting tuition and living costs.",
          "<strong>Academic calendar:</strong> Most universities follow a Fall (August/September) and Spring (January) intake system. Fall is the primary intake and carries the widest course choice, scholarships, and assistantship opportunities.",
          "<strong>Why students choose the USA:</strong> It has the largest higher education system on earth — over 4,000 accredited colleges and universities — unmatched research funding, Optional Practical Training (OPT) for STEM graduates, and the deepest bench of global employers (Google, Amazon, Microsoft) actively hiring."
        ]
      },
      {
        id: "university-landscape",
        title: "The University Landscape: Where to Apply",
        content: [
          "US universities are broadly grouped into the Ivy League (eight private research universities in the Northeast), top private research universities, flagship public state universities ('Public Ivies'), and specialised technical institutes. Rankings below are drawn from the QS World University Rankings 2026, Times Higher Education World University Rankings 2026, and US News & World Report Best Global Universities 2026-27."
        ],
        subsections: [
          {
            title: "The Ivy League (Northeast USA)",
            list: [
              "<strong>Harvard University</strong> — Cambridge, MA. QS World Rank #5 (2026). Oldest US university (founded 1636); strongest in business, law, medicine, public policy, and AI (Harvard Kempner Institute).",
              "<strong>Princeton University</strong> — Princeton, NJ. QS World Rank #25 (2026). Renowned for mathematics, physics, economics, and independent research; small graduate cohorts.",
              "<strong>Yale University</strong> — New Haven, CT. QS World Rank #21 (2026). Strong in law, humanities, drama, computer science, and data science.",
              "<strong>University of Pennsylvania (UPenn)</strong> — Philadelphia, PA. QS World Rank #15 (2026). Home to the Wharton School, plus strong engineering and data science programmes.",
              "<strong>Columbia University</strong> — New York City, NY. QS World Rank #38 (2026). Located in Manhattan; strengths in journalism, business, international affairs, CS, with unmatched access to Wall Street.",
              "<strong>Cornell University</strong> — Ithaca, NY. QS World Rank #16 (2026). Exceptional choice for engineering and computer science; Cornell Tech in NYC is built around technology and startups.",
              "<strong>Brown University & Dartmouth College</strong> — Brown is known for its flexible open curriculum; Dartmouth is strong in undergraduate teaching and business (Tuck School)."
            ]
          },
          {
            title: "Top Private Research Universities",
            list: [
              "<strong>Massachusetts Institute of Technology (MIT)</strong> — Cambridge, MA. QS World Rank #1 (2026), 14 consecutive years at the global top. Unmatched worldwide for computer science, AI, robotics, and data science.",
              "<strong>Stanford University</strong> — Stanford, CA. QS World Rank #3 (2026). Heart of Silicon Valley; unrivalled for computer science, AI, entrepreneurship, and business (Stanford GSB).",
              "<strong>California Institute of Technology (Caltech)</strong> — Pasadena, CA. QS World Rank #10 (2026). Small, intensely research-focused; elite in physics, aerospace, and applied mathematics.",
              "<strong>University of Chicago & Johns Hopkins University</strong> — Chicago is famous for economics (Booth School); Johns Hopkins is the leading US destination for medicine and public health.",
              "<strong>Duke University & Northwestern University</strong> — Duke is strong in Fuqua Business School; Northwestern's Kellogg School of Management is top-ranked."
            ]
          }
        ]
      },
      {
        id: "what-you-can-study",
        title: "What You Can Study: Courses for Indian Students in 2026",
        content: [
          "US degrees generally follow: Bachelor's (4 years), Master's (1.5-2 years), and PhD (4-6 years). STEM-designated degrees are highly preferred by Indian students as they grant a 36-month OPT work permit (compared to 12 months for non-STEM)."
        ],
        subsections: [
          {
            title: "Technology, Data & AI",
            list: [
              "<strong>MS Computer Science</strong> — MIT, Stanford, Carnegie Mellon University (CMU), UC Berkeley, and UIUC are the absolute elite choices.",
              "<strong>MS Artificial Intelligence / ML</strong> — CMU (first dedicated AI department in the US), Stanford, MIT, and UT Austin offer world-class specializations.",
              "<strong>MS Data Science / Business Analytics</strong> — Columbia, NYU, USC, and Northwestern offer highly respected, STEM-designated data analytics degrees.",
              "<strong>Bachelor's in CS / Software Engineering</strong> — MIT, Stanford, UC Berkeley, CMU, and Georgia Tech are top direct-entry choices."
            ]
          },
          {
            title: "Business & Management",
            list: [
              "<strong>MBA</strong> — Stanford GSB, Harvard Business School (HBS), Wharton (UPenn), Booth (Chicago), and Kellogg (Northwestern) form the top-tier 'M7' MBA list.",
              "<strong>MS Business Analytics / Finance</strong> — MIT Sloan's MFin and Columbia's MSBA are STEM-designated programs popular with recent graduates."
            ]
          }
        ]
      },
      {
        id: "exams-required",
        title: "Exams You Need and the Scores That Get You In",
        content: [
          "Standardized tests are a key part of the US application process. Most graduate programs require the GRE or GMAT, while undergraduate admissions require the SAT/ACT (though many remain test-optional for 2026)."
        ],
        subsections: [
          {
            title: "For Master's/PhD programs",
            list: [
              "<strong>GRE:</strong> required by many STEM master's. A competitive score for top-50 schools is 315-325+ (with 165+ in Quantitative for CS/Engineering).",
              "<strong>GMAT:</strong> standard for MBA and management programs. Competitive M7 MBA score is typically 700-740+.",
              "<strong>English proficiency (mandatory):</strong> TOEFL iBT 95-105; IELTS Academic 7.0-7.5; Duolingo English Test (DET) 120-130."
            ]
          },
          {
            title: "For Bachelor's programs",
            list: [
              "<strong>SAT/ACT:</strong> Test-optional policies remain common, but submitting a strong SAT (1450-1550+) significantly boosts admission chances at elite institutions.",
              "<strong>English proficiency:</strong> IELTS 6.5+ or TOEFL 90+."
            ]
          }
        ]
      },
      {
        id: "eligibility",
        title: "Eligibility: Getting Into the University and the Country",
        content: [
          "<strong>University eligibility:</strong> A typical US application requires academic transcripts, a Statement of Purpose (SOP), 3 Letters of Recommendation (LORs), a CV, and standardized exam scores. Applications are submitted via portals like the Common App (undergraduate) or directly to the university's graduate school.",
          "<strong>Country (visa) eligibility:</strong> Indian students need an F-1 Student Visa. The core steps:",
          "1. Receive a Form I-20 (Certificate of Eligibility) from your university after proving you have funds to cover the first year's tuition and living costs.",
          "2. Pay the SEVIS I-901 fee ($350).",
          "3. Complete the online visa application (Form DS-160) and pay the visa fee ($185).",
          "4. Book and attend two appointments in India: one for biometrics at a Visa Application Center (VAC) and one for a visa interview at the US Embassy or Consulate.",
          "5. During the F-1 interview, you must prove strong ties to India and demonstrate that you have sufficient funds to cover your education without working illegally."
        ]
      },
      {
        id: "money-matters",
        title: "Money Matters: Scholarships and Funding",
        content: [
          "US higher education is expensive, with tuition ranging from $30,000 to $70,000/year (approx. ₹28-66 lakh) and living costs adding another $15,000-$25,000/year.",
          "<strong>Assistantships (RA/TA):</strong> The most common way graduate students fund their studies. Research Assistantships (RA) and Teaching Assistantships (TA) typically cover full/partial tuition and provide a monthly stipend.",
          "<strong>Need-Blind Admission:</strong> A few elite private schools (Harvard, Yale, Princeton, MIT, Amherst) are need-blind for international students, meaning they assess applicants without regard to financial need and cover 100% of demonstrated need.",
          "<strong>Merit-Based Scholarships:</strong> Flagship public universities (like UCLA, Michigan, UIUC) offer automatic merit scholarships to outstanding students, though full rides are extremely rare for international undergraduates.",
          "<strong>On-Campus Jobs:</strong> F-1 students can work up to 20 hours/week on-campus during term time, earning minimum wage (typically $15-$18/hour) to offset personal expenses."
        ]
      },
      {
        id: "classroom-to-career",
        title: "From Classroom to Career: Jobs, Salaries, and Work Visas",
        content: [
          "<strong>Optional Practical Training (OPT):</strong> F-1 graduates can work in the US for 12 months. STEM-designated degree graduates are eligible for a 24-month extension, allowing a total of 3 years of work authorisation without needing an H-1B visa sponsor.",
          "<strong>H-1B Visa:</strong> The primary work visa in the US, awarded via an annual lottery system. Employers must sponsor this visa, which is valid for up to 6 years.",
          "<strong>Typical starting salaries:</strong>",
          "• Software Engineer / Data Scientist (MS graduate): $95,000-$135,000/year (Silicon Valley / NYC / Seattle)",
          "• Financial Analyst / Consulting: $85,000-$115,000/year (NYC / Chicago)",
          "• Mechanical / Electrical Engineer: $75,000-$95,000/year",
          "<strong>Realistic hiring bar:</strong> Internships (completed during the degree as Curricular Practical Training - CPT) are critical for securing full-time roles. Networking, technical preparation (LeetCode for software roles), and maintaining a GPA above 3.5/4.0 are vital."
        ]
      },
      {
        id: "indian-community",
        title: "The Indian Community: You Will Never Feel Far From Home",
        content: [
          "The US is home to over 4.5 million Indian-Americans. Cities like the San Francisco Bay Area, New York/New Jersey, Dallas, Houston, Chicago, and Atlanta have massive Indian populations.",
          "Every major university has a very active Indian Students Association (ISA) which organizes grand celebrations for Diwali, Holi, and Garba, helping new students transition smoothly. Indian grocery stores (like Patel Brothers) and restaurants are easily accessible in almost every college town."
        ]
      },
      {
        id: "settling-in",
        title: "Settling In: Practical Survival Notes",
        content: [
          "<strong>Health Insurance:</strong> Mandatory for all students. Always purchase the university's health plan, which usually costs $2,000-$4,000/year, as it covers campus clinics and local hospitals.",
          "<strong>Housing:</strong> Most universities guarantee on-campus housing for freshmen, but graduate students usually live in shared off-campus apartments, which cost $600-$1,500/month depending on the city.",
          "<strong>Banking:</strong> Open a student checking account with Chase, Bank of America, or Wells Fargo. They require your passport and Form I-20.",
          "<strong>Weather:</strong> Varies wildly by region. The Northeast and Midwest experience harsh, snowy winters, while California and Texas remain warm year-round.",
          "<strong>SSN (Social Security Number):</strong> You can only apply for an SSN after securing an on-campus job or CPT/OPT work authorization."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        content: [
          "This guide draws on the QS World University Rankings 2026 (qs.com), Times Higher Education World University Rankings 2026 (timeshighereducation.com), US News & World Report Best Global Universities 2026-27 (usnews.com), US Department of State student visa guidelines, and live currency data from Wise and X-Rates as of July 2026. Always verify latest rules on state.gov."
        ]
      }
    ]
  },
  australia: {
    name: "Australia",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
    shortDescription: "Explore the Group of Eight (Go8) universities, Semester intakes, Subclass 500 visa requirements, and 485 post-study work pathways.",
    quickStats: {
      currency: "Australian Dollar (AUD, A$)",
      conversion: "1 AUD ≈ ₹55 - ₹56 (as of July 2026)",
      languages: "English",
      primaryIntake: "Semester 1 (Feb/March) & Semester 2 (July)",
      costEstimation: "AUD 30,000 - 50,000 / year"
    },
    sections: [
      {
        id: "getting-to-know",
        title: "Getting to Know Australia",
        content: [
          "Australia is the world's sixth-largest country by total area, home to a population of around 26 million. It boasts a high standard of living, beautiful natural landscapes, and major global cities like Sydney, Melbourne, Brisbane, and Adelaide, which host the majority of the country's universities and employment opportunities.",
          "<strong>Language:</strong> English is the national language and the primary language of instruction.",
          "<strong>Currency:</strong> The Australian Dollar (AUD, symbol A$). As of July 2026, 1 AUD is trading at approximately ₹55 to ₹56.",
          "<strong>Academic calendar:</strong> Australia runs on a two-semester system. Semester 1 starts in February/March (the primary intake) and Semester 2 starts in July.",
          "<strong>Why students choose Australia:</strong> High-quality education, a welcoming multicultural society, and generous Post-Study Work rights (Temporary Graduate Subclass 485 visa). The country has updated its financial requirements and visa regulations in 2026, making profiles and academic integrity key to approval."
        ]
      },
      {
        id: "university-landscape",
        title: "The University Landscape: Where to Apply",
        content: [
          "Australia's leading research-intensive universities are grouped under the Group of Eight (Go8). Rankings are based on the QS World University Rankings 2026."
        ],
        subsections: [
          {
            title: "Group of Eight (Go8)",
            list: [
              "<strong>University of Melbourne</strong> — QS World Rank #13 (2026). Consistently Australia's top-ranked institution, known for its Melbourne Model curriculum.",
              "<strong>University of Sydney</strong> — QS World Rank #18 (2026). Strong programs in business, law, and medicine, set in Australia's largest financial hub.",
              "<strong>University of New South Wales (UNSW)</strong> — QS World Rank #19 (2026). Highly respected for engineering, technology, and entrepreneurship.",
              "<strong>Australian National University (ANU)</strong> — Canberra. QS World Rank #30 (2026). Australia's national research university, strong in political science and physical sciences.",
              "<strong>Monash University</strong> — Melbourne. QS World Rank #37 (2026). Largest university in Australia, with exceptional research output in pharmacy and engineering.",
              "<strong>University of Queensland (UQ)</strong> — Brisbane. QS World Rank #40 (2026). Known for biological sciences and environmental technologies.",
              "<strong>University of Western Australia (UWA)</strong> — Perth. QS World Rank #77 (2026). Strong ties to resources, energy, and marine science sectors.",
              "<strong>University of Adelaide</strong> — Adelaide. QS World Rank #82 (2026). Noted for agricultural science, winemaking, and defense research."
            ]
          }
        ]
      },
      {
        id: "what-you-can-study",
        title: "What You Can Study: Courses for Indian Students in 2026",
        content: [
          "Australian higher education offers Bachelor's (3-4 years), Master's (1.5-2 years), and Doctoral degrees. Professional courses and engineering/IT degrees are highly sought after."
        ],
        subsections: [
          {
            title: "Technology, Data & AI",
            list: [
              "<strong>Master of Information Technology</strong> — UNSW, Monash, and University of Sydney offer leading programs linked directly to Australia's tech hubs.",
              "<strong>Master of Data Science</strong> — University of Melbourne and University of Queensland are top-tier selections.",
              "<strong>Bachelor of Computer Science</strong> — Monash and Melbourne are direct-entry options for Class 12 graduates."
            ]
          },
          {
            title: "Business & Management",
            list: [
              "<strong>MBA</strong> — Melbourne Business School and AGSM at UNSW Business School are internationally elite, requiring prior work experience.",
              "<strong>Master of Professional Accounting / Finance</strong> — widely popular courses across Sydney and Melbourne universities."
            ]
          }
        ]
      },
      {
        id: "exams-required",
        title: "Exams You Need and the Scores That Get You In",
        content: [
          "Standardized tests like GRE or GMAT are rarely required for general Master's entries, though English proficiency is mandatory for visa and admission."
        ],
        subsections: [
          {
            title: "English Proficiency Requirements",
            list: [
              "<strong>IELTS Academic:</strong> overall 6.5 (with no band below 6.0) is the baseline; Go8 universities often require 7.0 overall.",
              "<strong>PTE Academic & TOEFL iBT:</strong> also widely accepted (PTE 58-65; TOEFL 79-94)."
            ]
          }
        ]
      },
      {
        id: "eligibility",
        title: "Eligibility: Getting Into the University and the Country",
        content: [
          "<strong>University eligibility:</strong> Requires academic transcripts, Statement of Purpose (SOP), and English test scores. Australian universities strictly review the Genuine Student (GS) requirement.",
          "<strong>Country (visa) eligibility:</strong> Students need a Student Visa (Subclass 500). Requirements include:",
          "1. Confirmation of Enrolment (CoE) from a registered provider.",
          "2. Overseas Student Health Cover (OSHC) for the duration of stay.",
          "3. Proof of financial capacity to cover tuition fees and a living cost threshold of AUD 29,710/year.",
          "4. Assessment under the Genuine Student requirement, verifying academic history, career alignment, and family ties."
        ]
      },
      {
        id: "money-matters",
        title: "Money Matters: Scholarships and Funding",
        content: [
          "Tuition fees typically range from AUD 30,000 to 50,000/year (approx. ₹16-28 lakh).",
          "<strong>Scholarships:</strong> Australia Awards (fully funded government scholarships) and university-specific merit discounts (typically 10-25% off tuition).",
          "<strong>Part-time work:</strong> international students can work up to 48 hours per fortnight during term time and unlimited hours during vacations. Minimum wage is AUD 24.10/hour."
        ]
      },
      {
        id: "classroom-to-career",
        title: "From Classroom to Career: Jobs, Salaries, and Work Visas",
        content: [
          "<strong>Post-Study Work Visa (Subclass 485):</strong> Graduates of Bachelor's and Master's degrees are eligible for 2 to 4 years of work authorization depending on qualification level and study location (regional areas get extra years).",
          "<strong>Typical starting salaries:</strong>",
          "• Software Engineer: AUD 70,000 - 95,000/year",
          "• Financial Analyst: AUD 65,000 - 85,000/year",
          "• Civil / Mining Engineer: AUD 75,000 - 100,000/year"
        ]
      },
      {
        id: "indian-community",
        title: "The Indian Community: You Will Never Feel Far From Home",
        content: [
          "Over 750,000 people of Indian origin reside in Australia. Melbourne and Sydney host large Indian populations, with suburbs like Harris Park (Sydney) and Dandenong (Melbourne) renowned for Indian groceries, restaurants, and cultural festivals."
        ]
      },
      {
        id: "settling-in",
        title: "Settling In: Practical Survival Notes",
        content: [
          "<strong>Healthcare:</strong> Covered by your mandatory OSHC. Register with local medical centers.",
          "<strong>Housing:</strong> Shared student apartments are the most popular off-campus option. Prices range from AUD 200 to 450/week.",
          "<strong>Banking:</strong> open student accounts with Commonwealth Bank, ANZ, NAB, or Westpac."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        content: [
          "Drawn from the QS World University Rankings 2026, Australian Department of Home Affairs (homeaffairs.gov.au), and Study Australia (studyaustralia.gov.au) as of July 2026."
        ]
      }
    ]
  },
  germany: {
    name: "Germany",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    shortDescription: "Overview of free tuition technical universities (TU9), blocked account settings, DAAD funding, and EU Blue Card PR options.",
    quickStats: {
      currency: "Euro (EUR, €)",
      conversion: "1 EUR ≈ ₹90 - ₹91 (as of July 2026)",
      languages: "German (National) & English (Instruction)",
      primaryIntake: "Winter (October) & Summer (April)",
      costEstimation: "Free Tuition (Public) / €11,904/yr Blocked Account"
    },
    sections: [
      {
        id: "getting-to-know",
        title: "Getting to Know Germany",
        content: [
          "Germany is Europe's largest economy, home to 84 million people. It is famous for its engineering prowess, high quality of life, and public universities that offer free tuition to both domestic and international students, making it a highly attractive destination for STEM students.",
          "<strong>Language:</strong> German is the official language. While many Master's programs are taught in English, learning German (at least up to A2/B1 level) is crucial for daily life and securing local jobs.",
          "<strong>Currency:</strong> The Euro (symbol €). As of July 2026, 1 EUR is trading at approximately ₹90 to ₹91.",
          "<strong>Academic calendar:</strong> The Winter Semester starts in October (primary intake) and the Summer Semester starts in April.",
          "<strong>Why students choose Germany:</strong> Free or extremely low tuition fees at public universities, world-class technical education (TU9), and an 18-month post-study job seeker visa."
        ]
      },
      {
        id: "university-landscape",
        title: "The University Landscape: Where to Apply",
        content: [
          "Germany's leading technical universities are grouped under the TU9 alliance. Rankings below are based on the QS World University Rankings 2026."
        ],
        subsections: [
          {
            title: "Leading Public & Technical Universities",
            list: [
              "<strong>Technical University of Munich (TUM)</strong> — QS World Rank #28 (2026). Germany's top technical university, globally elite in computer science and engineering.",
              "<strong>LMU Munich</strong> — QS World Rank #52 (2026). Excellent research university strong in physics, data science, and business.",
              "<strong>Heidelberg University</strong> — QS World Rank #84 (2026). Germany's oldest university (1386), world-renowned for medicine and life sciences.",
              "<strong>Karlsruhe Institute of Technology (KIT)</strong> — strong in mechanical and electrical engineering.",
              "<strong>RWTH Aachen University</strong> — Germany's largest technical university, highly sought after for automotive and production engineering."
            ]
          }
        ]
      },
      {
        id: "what-you-can-study",
        title: "What You Can Study: Courses for Indian Students in 2026",
        content: [
          "Public universities offer English-taught Master's (MSc/MEng) degrees. Undergraduate programs are predominantly taught in German and require a preparatory year (Studienkolleg)."
        ],
        subsections: [
          {
            title: "Technology, Data & AI",
            list: [
              "<strong>MSc Automotive Engineering / Robotics</strong> — RWTH Aachen and TU Munich are world leaders in mechanical automation.",
              "<strong>MSc Computer Science / Data Engineering</strong> — TUM, TU Berlin, and Saarland University offer top programs."
            ]
          }
        ]
      },
      {
        id: "exams-required",
        title: "Exams You Need and the Scores That Get You In",
        content: [
          "Admission to public universities is highly competitive and based strictly on your academic GPA (converted using the Bavarian Formula)."
        ],
        subsections: [
          {
            title: "Academic & Language Prerequisites",
            list: [
              "<strong>Academic Grade:</strong> A first-class bachelor's degree (70%+ or CGPA 7.5+/10) is typically the minimum to get into top public universities.",
              "<strong>English proficiency:</strong> IELTS Academic 6.5-7.0 or TOEFL iBT 90+.",
              "<strong>German Language:</strong> TestDaF or DSH certificates for German-medium courses. English-taught courses don't require German for admission, but it is highly recommended for employment."
            ]
          }
        ]
      },
      {
        id: "eligibility",
        title: "Eligibility: Getting Into the University and the Country",
        content: [
          "<strong>University eligibility:</strong> Requires checking if your bachelor's degree is recognized in Germany (via the Anabin database). Applications are made via Uni-Assist or directly to the university.",
          "<strong>Country (visa) eligibility:</strong> Indian students need a German Student Visa. Requirements include:",
          "1. A formal Admission Letter (Zulassungsbescheid) from a German university.",
          "2. A Blocked Account (Sperrkonto) containing €11,904 to prove you can support yourself.",
          "3. Health insurance coverage (travel insurance followed by statutory public health insurance upon arrival)."
        ]
      },
      {
        id: "money-matters",
        title: "Money Matters: Scholarships and Funding",
        content: [
          "Public universities do not charge tuition fees, except for a small semester contribution (€150-€400/semester) which often includes a public transit ticket.",
          "<strong>DAAD Scholarships:</strong> Germany's academic exchange service offers prestigious monthly stipends for select programs.",
          "<strong>Part-time work:</strong> Students can work 140 full days or 280 half days per calendar year. Student jobs (Werkstudent) pay around €13-18/hour."
        ]
      },
      {
        id: "classroom-to-career",
        title: "From Classroom to Career: Jobs, Salaries, and Work Visas",
        content: [
          "<strong>Job Seeker Visa:</strong> After graduation, international students can stay in Germany for 18 months on a job seeker permit to find work matching their qualification.",
          "<strong>EU Blue Card:</strong> Once you secure a contract with a salary above the statutory threshold, you can transition to an EU Blue Card, leading to permanent residency in 21-27 months.",
          "<strong>Typical starting salaries:</strong>",
          "• Software / Systems Engineer: €50,000 - €65,000/year",
          "• Mechanical / Automotive Engineer: €52,000 - €68,000/year",
          "• Data Analyst: €48,000 - €60,000/year"
        ]
      },
      {
        id: "indian-community",
        title: "The Indian Community: You Will Never Feel Far From Home",
        content: [
          "The Indian student population in Germany has grown rapidly, exceeding 45,000. Major cities like Munich, Berlin, Frankfurt, and Stuttgart have active Indian organizations, temples, and authentic Indian restaurants."
        ]
      },
      {
        id: "settling-in",
        title: "Settling In: Practical Survival Notes",
        content: [
          "<strong>Health Insurance:</strong> Register with public insurance providers (TK or AOK) as soon as you enroll.",
          "<strong>Housing:</strong> Student dorms (Studentenwerk) are very cheap (€250-€400/month) but have long waiting lists. Private WG (shared flat) rooms cost €350-€700/month.",
          "<strong>Anmeldung:</strong> You must register your address at the local town hall (Bürgeramt) within 14 days of moving in."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        content: [
          "Drawn from the QS World University Rankings 2026, DAAD (daad.de), and German Federal Foreign Office (auswaertiges-amt.de) as of July 2026."
        ]
      }
    ]
  }
};
