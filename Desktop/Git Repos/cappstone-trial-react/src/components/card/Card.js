export function Card({ assessments, onDeleteAssessment }) {
  return (
    <>
      {assessments.map((assessment) => {
        return (
          <section key={assessment.id}>
            <h3>{assessment.title}</h3>
            <ul>
              <li>{assessment.editor}</li>
              <li>{assessment.date}</li>
            </ul>
            <button onClick={() => onDeleteAssessment(assessment.id)}>X</button>
          </section>
        );
      })}
    </>
  );
}
