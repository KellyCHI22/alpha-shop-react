export default function StepProgress() {
  return (<>
    <section>
      {/* step one */}
      <span className="progress-group" data-phase="address">
        <span className="progress-icon">
          <span className="text">1</span>
          <svg className="icon cursor-point">
            <use xlinkHref="#svg-icon-pg-complete" />
          </svg>
        </span>
        <span className="progress-label">寄送地址</span>
      </span>

      <span className="progress-bar" data-order={1} />

      {/* step two */}
      <span className="progress-group" data-phase="shipping">
        <span className="progress-icon">
          <span className="text">2</span>
          <svg className="icon cursor-point">
            <use xlinkHref="#svg-icon-pg-complete" />
          </svg>
        </span>
        <span className="progress-label">運送方式</span>
      </span>

      <span className="progress-bar" data-order={2} />

      {/* step three */}
      <span className="progress-group" data-phase="credit-card">
        <span className="progress-icon">
          <span className="text">3</span>
          <svg className="icon cursor-point">
            <use xlinkHref="#svg-icon-pg-complete" />
          </svg>
        </span>
        <span className="progress-label">付款資訊</span>
      </span>


    </section>
  </>
  );
}