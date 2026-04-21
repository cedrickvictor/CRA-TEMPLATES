function Card({ title, description }) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">
                { title }
            </h2>
            <p className="text-gray-600">
                { description }
            </p>
        </div>
    );
}
export default Card;