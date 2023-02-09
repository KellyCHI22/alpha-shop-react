export default function Cart() {
  return (
    <>
      <section className="col-start-8 col-span-4" >
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img className="img-container" src="./public/images/product-1.jpg" />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <svg className="product-action minus">
                    <use xlinkHref="#svg-icon-minus" />
                  </svg>
                  <span className="product-count" />
                  <svg className="product-action plus">
                    <use xlinkHref="#svg-icon-plus" />
                  </svg>
                </div>
              </div>
              <div className="price" />
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={1299}
          >
            <img className="img-container" src="./public/images/product-2.jpg" />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <svg className="product-action minus">
                    <use xlinkHref="#svg-icon-minus" />
                  </svg>
                  <span className="product-count" />
                  <svg className="product-action plus">
                    <use xlinkHref="#svg-icon-plus" />
                  </svg>
                </div>
              </div>
              <div className="price" />
            </div>
          </div>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price" />
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price" />
        </section>
      </section>
    </>
  );
}