import React, { useState } from 'react';

const HospitalForm = ({ addHospital }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [specialities, setSpecialities] = useState([]);
    const [rating, setRating] = useState('');

    const specialitiesOptions = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];

    const handleSpecialitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSpecialities(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHospital = { name, city, imageUrl, specialities, rating };
        addHospital(newHospital);
        setName('');
        setCity('');
        setImageUrl('');
        setSpecialities([]);
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Hospital</h2>
            <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Image URL</label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Specialities</label>
                <select multiple value={specialities} onChange={handleSpecialitiesChange} className="w-full p-2 border rounded">
                    {specialitiesOptions.map((speciality, index) => (
                        <option key={index} value={speciality}>{speciality}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Rating</label>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-2 border rounded" required min="1" max="5" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Hospital</button>
        </form>
    );
};

export default HospitalForm;
