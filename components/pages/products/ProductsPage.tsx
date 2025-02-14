"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import type { Product } from "./helpers/types";
import ProductCard from "./ProductCard";
import CheckAuth from "@/components/utilities/CheckAuth";
import { Loader2 } from "lucide-react";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5240/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching products.");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-24 h-24 md:w-36 md:h-36" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <header>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-center p-4 border-2 border-black my-8">
          OUR SNEAKERS
        </h1>
      </header>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center md:justify-items-start">
          {products.map((product) => (
            <article key={product.id} className="w-full max-w-sm">
              <ProductCard {...product} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CheckAuth(ProductsPage);
