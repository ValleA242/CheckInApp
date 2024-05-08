const MoodCard = ({ title, imagePath, feelings }) => {
    
    return (
        <div className="primaryContainer">
            <h1>{title}</h1>
            <img src={imagePath} alt={`Picture representing ${title}`} />
            <ul>
                {feelings.map((feeling, index) => (
                    <li key={index}>{feeling}</li>
                ))}
            </ul>
        </div>
    );
}

export default MoodCard