"use client";

export default function Contact() {
    return (
        <section 
            id = "contact"
            className = "rounded-3xl bg-white p-6 shadow"
        >
            <h2 className = "mb-4 text-xl font-bold text-neutral-800"> 
                :: contact 
            </h2>

            <p className = "mb-6 text-sm text-neutral-600">
                Feel free to reach out to me!
            </p>

            <form className = "space-y-4">
                <div> 
                    <label
                        htmlFor = "name"
                        className = "mb-2 block text-sm font-medium text-neutral-700"
                    > 
                    Name 
                    </label> 
                    <input
                        id = "name"
                        type = "text"
                        placeholder = "Your name"
                        className = "w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                </div>

                <div> 
                    <label
                        htmlFor = "email"
                        className = "mb-2 block text-sm font-medium text-neutral-700"   
                    >
                     Email
                    </label>
                    <input 
                        id = "email"
                        type = "email"
                        placeholder = "Your email"
                        className = "w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                </div>

                <div>
                    <label
                        htmlFor = "subject"
                        className = "mb-2 block text-sm font-medium text-neutral-700"
                    >
                     Subject
                    </label>
                    <input
                        id = "subject"
                        type = "text"
                        placeholder = "Your subject"
                        className = "w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                </div>

                <div> 
                    <label
                        htmlFor = "message"
                        className = "mb-2 block text-sm font-medium text-neutral-700"
                    >
                     Message
                    </label>
                    <textarea
                        id = "message"
                        rows={1}
                        placeholder = "Your message"
                        className="w-full resize-none overflow-hidden max-h-60 overflow-y-auto rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-neutral-500"
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = "auto";
                            target.style.height = `${target.scrollHeight}px`;
                        }}
                    />
                </div>

                <div className = "pt-2">
                    <button 
                        type = "submit"
                        className = "rounded-md bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
}