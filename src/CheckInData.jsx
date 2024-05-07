export function CheckInData() {
    return <form className="input-form">
        <div className="form-row">
            <label>Student Name:</label>
            <input type="text" id="student-name" />
            <label>Teacher:</label>
            <input type="text" id="teacher-name" />
            <label>Time:</label>
            <input type="time" id="time" />
            <label>Date:</label>
            <input type="date" id="date"/>
        </div>
    </form>
}