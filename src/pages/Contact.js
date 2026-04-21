function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6">
            <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                    <p className="text-gray-500 mt-2">Have questions? We'd love to hear from you.</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                        <textarea 
                            rows="4" 
                            placeholder="How can we help?" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                        ></textarea>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-95">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;