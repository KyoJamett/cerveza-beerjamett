export const Footer = () => {
  return (
    <footer className="container-fluid footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-8 mx-auto">
            <p>
              &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
              <a href="https://html.design/" target="_blank">
                Free Html Templates
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
