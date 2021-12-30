const Resume = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      minHeight: "100vh",
    }}
  >
    <div className="container">
      <div className="my-4 py-4">
        <iframe
          className="border"
          style={{
            minHeight: "100vh",
            width: "100%",
            margin: "0 auto",
          }}
          title="Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vR3qaSu4I0twrFInkPrHCG4UnpLfonrfebM_OvHLKMevihg91JYEYTa0CHcfB0f37B9DyrwHMrQuMdm/pub?embedded=true"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Resume;
