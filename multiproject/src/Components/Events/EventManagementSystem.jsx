import React, { useEffect, useState } from "react";

export default function EventManagementSystem() {
  const [events, setEvents] = useState(
    JSON.parse(sessionStorage.getItem("events")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    sessionStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleCreateEvent = () => {
    if (title && description && date && location) {
      const newEvent = {
        id: Date.now(),
        title,
        description,
        date,
        location,
        attendees: [],
      };
      localStorage.setItem("events", JSON.stringify(newEvent));
      setEvents([...events, newEvent]);
      setTitle("");
      setDescription("");
      setDate("");
      setLocation("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleRegister = (eventId) => {
    const updatedRegister = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, attendees: [...event.attendees, "User"] };
      }
      return event;
    });
    setEvents(updatedRegister);
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.removeItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center py-24 mx-auto">
        <h2 className="font-bold text-3xl">Event Management System</h2>
        <div className="flex justify-center flex-col w-1/3 py-5 text-white">
          <h3 className="text-2xl mb-5 font-semibold">Create Event</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-600 rounded py-2 px-2"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-600 rounded mt-2 py-2 px-2"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-slate-600 rounded mt-2 py-2 px-2"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-slate-600 rounded mt-2 py-2 px-2"
          />
          <button
            onClick={handleCreateEvent}
            className="py-2 px-2 bg-blue-600 mt-2 rounded font-bold"
          >
            Create Event
          </button>
        </div>
        <div className="text-white min-h-screen">
          <h3 className="font-bold text-xl">Events</h3>
          <div className="flex-wrap gap-4 grid grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className=" p-5 rounded bg-white text-red-700 text-xl font-bold border mt-2"
              >
                <h4 className="text-lg">
                  Event Title:{" "}
                  <span className="text-lg text-black font-semibold">
                    {event.title}
                  </span>
                </h4>
                <p className="text-semibold text-ray-400">
                  Event Description:{" "}
                  <span className="text-lg text-black font-semibold">
                    {event.description}
                  </span>
                </p>
                <p className="">
                  Date:{" "}
                  <span className="text-lg text-black font-semibold">
                    {event.date}
                  </span>
                </p>
                <p>
                  Location:{" "}
                  <span className="text-lg text-black font-semibold">
                    {event.location}
                  </span>
                </p>
                <p>
                  Attendees:{" "}
                  <span className="text-lg text-black font-semibold">
                    {event.attendees.length}
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      handleRegister(event.id);
                    }}
                    className="text-xl text-white font-semibold bg-blue-600 py-1 px-5 rounded"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-xl text-white font-semibold bg-red-600 py-1 px-5 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
