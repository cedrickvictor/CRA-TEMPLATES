function About() {
    return (
        <div className="bg-white min-h-screen py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 inline-block">
                    About This Project
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This application was created as a teaching tool to demonstrate the power of the 
                    MERN stack combined with Tailwind CSS. Our goal is to bridge the gap between 
                    basic syntax and professional production environments.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2">Our Mission</h3>
                    <p className="text-blue-900">
                        To empower developers to build scalable, beautiful, and accessible 
                        web applications using the best tools available today.
                    </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                    By understanding how data flows from a MongoDB database through an Express API 
                    and into a React frontend, students gain a holistic view of modern web architecture.
                </p>
            </div>
        </div>
    );
}
export default About;