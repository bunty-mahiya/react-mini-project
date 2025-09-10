export default function ShimmerProductCard() {
  return (
    <div className="shimmer-container">
      {Array(30)
        .fill("")
        .map((e,index) => {
         return <div  key={index}className="shimmer-product-card">
            <div className="shimmer-product-image"></div>
            <div className="shimmer-product-content">
              <div className="shimmer-line title"></div>
              <div className="shimmer-line price"></div>
              <div className="shimmer-line small"></div>
            </div>
          </div>;
        })}
    </div>
  );
}
