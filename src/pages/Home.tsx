import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { theme } = useContext(ThemeContext);
  const [cardClassName, setCardClassName] = useState("colorfull-card");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setCardClassName(theme === "theme3" ? "colorfull-card" : "");
  }, [theme]);

  return (
    <main className={theme}>
      <div style={{ paddingTop: "80px" }}>
        <h1
          style={{
            marginBlock: "0px",
            display: "flex",
            justifyContent: "center",
            paddingInline: "15px",
            textAlign: "center",
          }}
        >
          Welcome to the Multi-Theme Switcher App
        </h1>
        <p style={{ display: "flex", justifyContent: "center" }}>
          This is a sample paragraph.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="card-btn"
            style={{
            }}
          >
            Click Me
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            paddingInline: "15px",
          }}
        >
          {products.slice(0, 4).map((product) => (
            <div
              className={`card ${cardClassName}`}
              key={product.id}
            >
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
