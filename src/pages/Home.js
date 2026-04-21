import Card from "../components/Card";

function Home() {
    const features = [
        {
            title: "MERN Stack",
            description: "Master MongoDB, Express, React, and Node.js to build powerful full-stack applications."
        },
        {
            title: "Tailwind CSS",
            description: "Rapidly build modern websites without ever leaving your HTML using utility-first CSS."
        },
        {
            title: "Component Based",
            description: "Learn to build reusable UI components like this Card to keep your code DRY and clean."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <header className="bg-white border-b py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Build Faster with <span className="text-blue-600">Modern Tech</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Welcome to our MERN project. We focus on clean code, responsive design, 
                    and teaching the latest industry standards.
                </p>
            </header>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card 
                            key={index} 
                            title={feature.title} 
                            description={feature.description} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;