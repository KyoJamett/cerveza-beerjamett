import { useEffect, useState } from "react";

export const ProductModalData = ({
  productSelected,
  handlerCloseModal,
  initialProductSelected,
}) => {
  const [productModal, setProductModal] = useState(initialProductSelected);
  const { abv, desc, id, imgModal, img, name, price, style, vol } =
    productModal;

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
          <div className="modal-content">
            <div className="modal-body">
              <div className="">
                <div className="row">
                  <div className="col card-col">
                    <img
                      src={imgModal}
                      className="card-img-top img-fluid"
                      alt="card"
                    />
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <div className="row">
                        <h5 className="modal-title w-100 text-center">
                          <strong>{name.toUpperCase()}</strong>
                        </h5>
                        <button
                          type="button"
                          className="btn-close position-absolute end-0 me-3"
                          onClick={onCloseModal}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="d-flex justify-content-around mb-3 mt-3 border-top border-bottom py-2">
                        <div className="text-center">
                          <small className="text-muted d-block">ABV</small>
                          <strong>{abv}%</strong>
                        </div>
                        <div className="text-center border-start border-end px-3">
                          <small className="text-muted d-block">Volumen</small>
                          <strong>{vol} ml</strong>
                        </div>
                        <div className="text-center">
                          <small className="text-muted d-block">Estilo</small>
                          <strong>{style}</strong>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h6 className="fw-bold mb-2">Descripción</h6>
                        <p className="small text-muted mb-0">{desc}</p>
                      </div>
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
