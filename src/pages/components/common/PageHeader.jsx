const PageHeader = () => {
  return (
    <div className="bg-secondary mb-5 p-3 w-100 col">
      <div className="d-flex flex-column align-items-center justify-content-center"
           style={{ minHeight: '250px', width: '100%' }}>
        <h1 className="font-weight-semi-bold text-uppercase mb-3">BoroBazar</h1>
        <div className="d-inline-flex">
          <p className="m-0"><a href="/">Home</a></p>
          <p className="m-0 px-2">-</p>
          <p className="m-0">Shop</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
