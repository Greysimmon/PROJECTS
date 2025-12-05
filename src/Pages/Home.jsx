import react from "react";
export default function Home (){
    return(
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-center px-10 py-20 pt-32">
    {/* Left Text Section */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary leading-tight">
          Hi, I'm <span className="text-black">[Simon Kibuna]</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          A passionate software developer specializing in the MERN stack, cloud
          technologies, and modern scalable applications. I build clean, fast,
          and user-focused digital experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-800 transition">
          View My Projects
        </button>
        
      



      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
    <img
      src="/portphoto .jpg"
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </section>
  );
}