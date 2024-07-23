import { useState } from "react";
import { Boundary } from "./Boundary";
import { Container } from "./Container";
import { tractors } from "./tractors";
import { recommendations } from "./recommendations";
import pluralize from "pluralize";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function App() {
  const [tractorId, setTractorId] = useState(() => tractors[0].id);
  const [noItemsInBasket, setNoItemsInBasket] = useState(0);
  const selectedTractor = tractors.find((tractor) => tractor.id === tractorId);
  const recommendedIds = recommendations[tractorId];

  return (
    <Container>
      <Boundary>
        <main className="grid grid-cols-12 gap-6 p-3">
          <section className="col-span-10 space-y-12">
            <header className="flex justify-between items-center">
              <h1 className="text-3xl">The Model Store</h1>
              <Boundary>
                <span>basket: {pluralize("item", noItemsInBasket, true)}</span>
              </Boundary>
            </header>
            <div className="grid grid-cols-2 gap-8">
              <img src={selectedTractor.image} alt={selectedTractor.name} />
              <div className="flex flex-col justify-between pb-10">
                <h2 className="text-2xl text-balance">
                  {selectedTractor.name}
                </h2>
                <ul className="flex gap-2">
                  {tractors.map((tractor) => (
                    <li key={tractor.id}>
                      <button
                        className={
                          tractor.id === tractorId
                            ? "border-b-2 border-blue-500"
                            : "hover:border-b-2 border-blue-200"
                        }
                        onClick={() => setTractorId(tractor.id)}
                      >
                        <img src={tractor.thumbnail} alt={tractor.name} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <footer className="flex justify-end">
              <Boundary>
                <button
                  className="border p-3 rounded-3xl text-lg px-10 py-3 hover:bg-blue-50 active:bg-blue-100"
                  onClick={() => setNoItemsInBasket(noItemsInBasket + 1)}
                >
                  buy for {currencyFormatter.format(selectedTractor.price)}
                </button>
              </Boundary>
            </footer>
          </section>
          <section className="col-span-2">
            <Boundary>
              <h3 className="mb-2 text-lg">Related products</h3>
              <menu className="space-y-1.5">
                {recommendedIds.map((productId) => (
                  <li key={productId}>
                    <img
                      src={`./images/recommendations/recommendation-${productId}.jpg`}
                      alt={productId}
                    />
                  </li>
                ))}
              </menu>
            </Boundary>
          </section>
        </main>
      </Boundary>
    </Container>
  );
}
