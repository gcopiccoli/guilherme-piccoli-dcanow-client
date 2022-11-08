import "./NoData.scss";

const NoData = () => {
  return (
    <section className="nodata">
      <div className="nodata__container">
        <h2 className="nodata__text">
          No positions to display. Sign in/add positions to start.
        </h2>
      </div>
    </section>
  );
};

export default NoData;
