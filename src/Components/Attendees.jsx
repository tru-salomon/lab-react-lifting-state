import Attendee from './Attendee'

export default function Attendees({ attendees, toggleEventAttendees, showAttendees, updateEventAttendance, event }) {
  return <>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>

    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee key={index} attendee={attendee} updateEventAttendance={updateEventAttendance} event={event} />
        ))}
      </div>
    ) : null}
  </>
}
