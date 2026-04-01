import Image from "next/image";

export default function About() {
    return (
        <section id= "about" className = "bg-white rounded-3xl p-6 shadow">

            {/* Title */}
            <h2 className = "text-xl font-bold text-neutral-700 mb-4"> :: about me </h2>
            
            <div className = "flex flex-col md:flex-row gap-6">

                {/* TEXT */}
                <div className = "flex-1 space-y-3 text-sm text-neutral-600 leading-relaxed">
                    <p>
                        Hi! My name is Naomi. I am a computer science major 
                        with a concentration in security and privacy at Cal Poly SLO.
                        I am passionate about software engineering and cybersecurity, 
                        and I am always eager to learn new technologies and improve my skills.
                    </p>
                </div>
            </div>
        </section>
    )
}