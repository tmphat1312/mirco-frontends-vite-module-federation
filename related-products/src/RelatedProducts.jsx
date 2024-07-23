import "./RelatedProducts.css";
import { recommendationIds } from "./recommendations";

// eslint-disable-next-line react/prop-types
export default function RelatedProducts({ tractorId }) {
  const recommendedIds = recommendationIds[tractorId];

  return (
    <div className="rp_boundary">
      <h3>Related products</h3>
      <menu>
        {recommendedIds.map((productId) => (
          <li key={productId}>
            <img
              src={`http://localhost:3000/recommendation-${productId}.jpg`}
              alt={productId}
            />
          </li>
        ))}
      </menu>
    </div>
  );
}
