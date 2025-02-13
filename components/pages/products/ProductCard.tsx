"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import type { ProductCardProps } from "./helpers/types";

export default function ProductCard({
  name,
  price,
  salePrice,
  image,
}: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const discount = salePrice ? Math.round((1 - salePrice / price) * 100) : 0;

  const handleAddToCart = () => {
    setLoading(true);
    // Simulating an API call that adds item to cart
    setTimeout(() => {
      setLoading(false);
      alert(`Added ${name} to cart!`);
    }, 1000);
  };

  // Usually i would have the card as a link to the product page we would have a slug with the product id

  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full min-h-[24rem] border-black border">
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{name}</h2>
        <div className="flex items-center mb-4">
          {salePrice ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ${salePrice.toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        <div className="mt-auto">
          <Button
            onClick={handleAddToCart}
            loading={loading}
            className="w-full"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
