function Second({ children, color = "green" }) {
  return (
    <>
      <div
        style={{
          color: color,
          marginBottom: "1rem",
          border: "4px solid green",
        }}
      >
        {children}
      </div>
    </>
  );
}
export default Second;
