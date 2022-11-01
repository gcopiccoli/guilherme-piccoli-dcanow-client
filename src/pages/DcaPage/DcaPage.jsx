import "./DcaPage.scss";

const DcaPage = () => {
  return (
    <section className="dca-page">
      <h2 className="dca-page__title">DCA</h2>
      <nav className="dca-page__nav">
        <form className="dca-page__value-input">
          <input
            type="number"
            id="amount"
            name="amount"
            className="dca-page__input"
            placeholder="Insert amount to be invested..."
          />
          <button className="dca-page__button">+</button>
        </form>
      </nav>
    </section>
  );
};

export default DcaPage;
