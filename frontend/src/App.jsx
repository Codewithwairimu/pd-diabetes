import { useState } from 'react'
import './App.css'

const initialForm = {
  pregnancies: '',
  glucose: '',
  bloodPressure: '',
  bmi: '',
  age: '',
}

function App() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setResult(Math.round(Math.random() * 100))
  }

  return (
    <div className="app-shell">
      <header className="hero-banner">
        <h1>Diabetes Risk Predictor</h1>
        <p>Enter a few values and get a quick mock prediction.</p>
      </header>

      <main className="content-card">
        <form className="input-form" onSubmit={handleSubmit}>
          <label>
            Pregnancies
            <input
              type="number"
              name="pregnancies"
              value={form.pregnancies}
              onChange={handleChange}
              placeholder="e.g. 2"
            />
          </label>

          <label>
            Glucose
            <input
              type="number"
              name="glucose"
              value={form.glucose}
              onChange={handleChange}
              placeholder="e.g. 120"
            />
          </label>

          <label>
            Blood Pressure
            <input
              type="number"
              name="bloodPressure"
              value={form.bloodPressure}
              onChange={handleChange}
              placeholder="e.g. 70"
            />
          </label>

          <label>
            BMI
            <input
              type="number"
              name="bmi"
              value={form.bmi}
              onChange={handleChange}
              placeholder="e.g. 28.4"
            />
          </label>

          <label>
            Age
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="e.g. 35"
            />
          </label>

          <button type="submit">See prediction</button>
        </form>

        <section className="result-panel">
          <h2>Prediction</h2>
          <p>
            {result === null
              ? 'Fill the form and submit to view a quick estimation.'
              : `Estimated diabetes risk: ${result}%`}
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
