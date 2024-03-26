import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Toks Lawal",
          "a Enterprise Architect",
          "a Software Developer",
          "a Solutions Architect",
            "a Cybersecurity Analyst"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
