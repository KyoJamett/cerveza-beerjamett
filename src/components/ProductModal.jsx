import { ProductModalData } from "./ProductModalData";

export const ProductModal = ({
  handlerCloseModal,
  productSelected,
  initialProductSelected,
}) => {
  const handleClickOutside = (event) => {
    // Verifica si el clic ocurrió fuera del modal
    if (event.target.classList.contains("modal")) {
      handlerCloseModal();
    }
  };

  return (
    <>
      <div className="abrir-modal animacion fadeIn">
        <div
          className="modal"
          style={{ display: "block" }}
          tabIndex="-1"
          onClick={handleClickOutside}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reseña de Cerveza</h5>
              </div>
              <div className="modal-body">
                <ProductModalData
                  productSelected={productSelected}
                  handlerCloseModal={handlerCloseModal}
                  initialProductSelected={initialProductSelected}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
