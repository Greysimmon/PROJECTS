import react from "react";
export default function About (){
    return(
        <main className="min-h-screen bg-white text-black px-6 md:px-12 pt-32">
            <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2> 
        <p className="text-gray-700 mb-4">
          I’m a software developer focused on building modern web applications 
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">What I do</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Build responsive frontends with React and Tailwind CSS</li>
          <li>Design RESTful APIs and backend services with Node/Express</li>
          <li>Deploy apps to cloud (example: Vercel, Netlify, or AWS)</li>
        </ul>
        </section>
        </main>

    );
}