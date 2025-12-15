import react from "react"
export default function Contact( ) {
    return ( 
    <section className="min-h-screen pt-24 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Contact Me
      </h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Have a project in mind, a question, or just want to say hello?  
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>
      <form className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Send Message
        </button>
      </form>
      </section>


    );
    
}