import "./App.css";
import { useState } from "react";
import { Formular } from "./components/formular/Formular.js";
import { Card } from "./components/card/Card.js";
import { uid } from "uid";
import { SearchAssessment } from "./components/searchAssessment/SearchAssessment";

function App() {
  const [assessments, setAssessments] = useState([]);

  function handleNewAssessment(newAssessment) {
    const updatedAssessment = [{ id: uid(), ...newAssessment }, ...assessments];
    console.log(updatedAssessment);
    setAssessments(updatedAssessment);
  }

  function handleDeleteAssessment(id) {
    setAssessments(
      assessments.filter((assessment) => {
        return assessment.id !== id;
      })
    );
  }

  function filterAssessment(filterFor) {
    setAssessments(
      assessments.filter((assessment) => {
        return assessment.title === filterFor;
      })
    );
  }

  console.log(assessments);

  return (
    <>
      <SearchAssessment onFilter={filterAssessment} />
      <Formular handleNewAssessment={handleNewAssessment} />
      <Card
        assessments={assessments}
        onDeleteAssessment={handleDeleteAssessment}
      />
    </>
  );
}

export default App;
