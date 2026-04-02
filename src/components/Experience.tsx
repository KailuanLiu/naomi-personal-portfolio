export default function Experience() {
    const experiences = [
        {
            role: "Technical Lead", 
            organization: "Hack4Impact @ Cal Poly",
            location: "San Luis Obispo, CA",
            date: "Oct. 2025 - Present",
            description: [
                "Led a team of 6 managing GitHub workflows, GitHub Actions CI/CD, code reviews, and sprint planning.",
                "Designed scalable website architecture, organizing components, routing, and overall system structure.",
                "Worked with non-profit stakeholders to define project scope and translate goals into technical requirements.",
            ],        
        },
        {
            role: "Research Assistant", 
            topic: "Anti-Abuse Principles",
            professor: (
                <>
                    Phoenix (Dongfang) Fang, PhD {" "}
                    <a
                        href = "https://users.csc.calpoly.edu/~dofang/"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "underline text-neutral-700 hover:text-neutral-900"
                    >
                    (Assistant Professor @ Cal Poly)
                    </a>
                </>
            ),
            location: "San Luis Obispo, CA",
            date: "Sept. 2025 - Present",
            description: [
                "Conducted exploratory research on cybersecurity abuse targeting elderly users through literature review.",
                "Investigated heuristic, psychological, and human-centered approaches to anti-abuse preventing strategies.",
                "Contributed to the development of a research funding proposal by defining project scope and potential impact."
            ],
        },
        {
            role: "Student Assistant Lead", 
            organization: "Cal Poly Technology Services",
            location: "San Luis Obispo, CA",
            date: "June 2025 - Present",
            description: [
                  "Lead a team of 20+ student assistants providing IT support for over 25,000 Cal Poly community members.",
                  "Oversee daily operations via Jira and Confluence, collaborating with fellow leads and staff to handle escalations",
                  "Closed over 200+ tickets to data and manage ~50 weekly updates, ensuring efficient, high-quality support.",
                  "Hiring, onboarding, and training while fostering a culture of teamwork and exceptional customer service."
            ],
        },
        {
            role: "Software Developer", 
            organization: "Hack4Impact @ Cal Poly",
            location: "San Luis Obispo, CA",
            date: "Oct. 2024 - June 2025",
            description: [
                  "Participated within a Scrum-based agile team using GitHub and Jira to manage sprints, track bugs, coordinate Git issues, and consistently deliver 95%+ of planned sprint features as production-ready releases on schedule.",
                  "Modernized frontend and backend by migrating a legacy codebase to Next.js, improving page load performance increasing code maintainability, and enabling faster feature delivery across all application modules.",
                  "Implemented user authentication using Clerk with robust error handling, supporting 95%+ of sign-up and login edge cases, improving security, and ensuring reliable, seamless authentication workflows across the application."
            ],
        },
    ];

    return (
        <div className="space-y-4 rounded-3xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold text-neutral-800">
            :: experience
        </h2>

        {experiences.map((exp, i) => (
            <div key={i} className="border-b pb-4 last:border-none">
            
            {/* Header */}
            <div className="flex justify-between">
                <div>
                <h3 className="font-semibold text-neutral-800">
                    {exp.role}
                </h3>

                {exp.organization && (
                    <p className="text-sm text-neutral-600">
                    {exp.organization}
                    </p>
                )}

                {exp.topic && (
                    <p className="text-sm text-neutral-600">
                    {exp.topic}
                    </p>
                )}

                {exp.professor && (
                    <p className="text-sm text-neutral-600">
                    {exp.professor}
                    </p>
                )}
                </div>

                <p className="text-sm text-neutral-500">
                {exp.date}
                </p>
            </div>

            {/* Location */}
            <p className="text-xs text-neutral-400 mt-1">
                {exp.location}
            </p>

            {/* Bullet points */}
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>

            </div>
        ))}
        </div>
    );
    }