import { useEffect, useState } from "react";

export const ProductModalData = ({
  productSelected,
  handlerCloseModal,
  initialProductSelected,
}) => {
  const [productModal, setProductModal] = useState(initialProductSelected);
  const { id, name, spanName, price, img } = productModal;

  //metodos
  const onCloseModal = () => {
    handlerCloseModal();
    setProductModal(initialProductSelected);
  };

  useEffect(() => {
    setProductModal({ ...productSelected });
  }, [productSelected]);

  return (
    <div className="container my-4">
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content madera text-warning">
            <div className="modal-header">
              <h5 className="modal-title">{name.toUpperCase()}</h5>
              <button
                type="button"
                className="btn-close btn-close-red"
                onClick={onCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card burdeos text-warning">
                <div className="row">
                  <div className="col card-col">
                    <img
                      src={img}
                      className="card-img-top img-fluid"
                      alt="card"
                    />
                  </div>
                  <div className="col card-col">
                    <div className="card-body">
                      <ul className="list-unstyled dataText"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
