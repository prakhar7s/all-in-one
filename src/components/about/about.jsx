import CoverImage from "../cover-image/cover-image";

const About = () => (
  <div
    className="d-flex justify-content-start align-items-start"
    style={{
      minHeight: "100vh",
    }}
  >
    <CoverImage src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    <div
      className="container text-red mb-4 px-3 px-md-4"
      style={{
        zIndex: 1,
        marginTop: 300,
      }}
    >
      <div
        className="mx-md-4 b-shadow rounded bg-white border my-3 p-3 h-100"
        style={{
          minHeight: "100vh",
        }}
      >
        <h1 className="text-center text-weight-bold">ABOUT</h1>
        <h2>Hi, I'm Prakhar!</h2>
        <div className="">
          <p className="font-sans-pro">
            I love to build, and I love working on impactful products with
            talented people.
          </p>
          <p className="font-sans-pro">
            I'm currently a mobile app developer intern @ APICon. I'm also
            interned at Bread, an exciting project, and writing for
            GeeksforGeeks, a programming publication with billions of visits
            annually.
          </p>
          <p className="font-sans-pro">
            In my free time, I write articles on my blog, build fun
            side-projects, and occasionally do computer science research at
            institutions like Boston University. I'm also a student, so school
            is a big part of my life too.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
