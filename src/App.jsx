/* eslint-disable no-unused-vars */
// App.js
import React, { useState } from 'react';
import LembreteForm from './components/LembreteForm';
import LembreteList from './components/LembreteList';
import './App.css';

const App = () => {
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = (text) => {
    const newReminder = {
      id: Date.now(),
      text,
    };
    setReminders([...reminders, newReminder]);
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="app">
      <h1>Aplicativo de Lembretes</h1>
      <LembreteForm onAdd={handleAddReminder} />
      <LembreteList reminders={reminders} onDelete={handleDeleteReminder} />
    </div>
  );
};

export default App;

