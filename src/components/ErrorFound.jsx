export const ErrorFound = ({ error }) => {
  return (
    <div className="container w-75 my-4 h-50 d-flex flex-column align-items-center justify-content-center">
      <img
        className="w-100 h-auto"
        src="https://cdn.svgator.com/images/2024/04/animated-3D-404-not-found-page-error.gif"
        alt="404 not found"
      />
      <p className="text-center mt-4 ">
        <b>{`${error}`}</b>
      </p>
      <p>
        <b>Enter A Valid City Namev</b>
      </p>
    </div>
  );
};
