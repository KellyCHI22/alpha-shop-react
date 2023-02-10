import productOne from '../../../assets/images/product-1.jpg';
import productTwo from '../../../assets/images/product-2.jpg';

export default function Cart() {
  return (
    <>
      <section className="col-start-8 col-span-4">
        <h3>購物籃</h3>

        <section data-total-price={0}>

          <div>
            <img src={productOne} className="h-[100px]" />
            <div>
              <div>破壞補丁修身牛仔褲</div>
              <div>
                <div className="product-control">
                  <img src="" alt="minus-icon" />
                  <span className="product-count" />
                  <img src="" alt="plus-icon" />
                </div>
              </div>
              <div className="price" />
            </div>
          </div>

          <div>
            <img src={productTwo} className="h-[100px]" />
            <div>
              <div>刷色直筒牛仔褲</div>
              <div>
                <div className="product-control">
                  <img src="" alt="minus-icon" />
                  <span className="product-count" />
                  <img src="" alt="plus-icon" />
                </div>
              </div>
              <div className="price" />
            </div>
          </div>
        </section>
        <section>
          <div>運費</div>
          <div className="price" />
        </section>
        <section>
          <div>小計</div>
          <div className="price" />
        </section>
      </section>
    </>
  );
}