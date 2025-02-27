import { useState } from "react";
import { motion } from "framer-motion";

const products = {
  shakes: [
    { name: "Coconut Shake", image: "/Products/Shakes/Coconut-Shake.png" },
    { name: "Coconut Strawberry Shake", image: "/Products/Shakes/strawberry shakepng.png" },
    { name: "Coconut Mango Shake", image: "/Products/Shakes/Coconut-Mango-ShakeBO.png" },
    { name: "Coconut Avocado Shake", image: "/Products/Shakes/Coconut-Avocado-ShakeBO.png" },
    { name: "Coconut Chocolate Shake", image: "/Products/Shakes/Coconut-chco shake.png" },
    { name: "Coconut Vanilla Shake", image: "/Products/Shakes/Coconut-Venila-ShakeBO.png" },
    { name: "Coconut Banana Shake", image: "/Products/Shakes/Coconut-Banana-ShakeBO.png" },
  ],
  juice: [
    { name: "Coconut Fresh Juice", image: "/Products/Juice/Coconut fresh juice.png" },
    { name: "Coconut Apple Juice", image: "/Products/Juice/Coconut apple juice.png" },
    { name: "Coconut Orange Juice", image: "/Products/Juice/Coconut orange juice.png" },
    { name: "Coconut Watermelon Juice", image: "/Products/Juice/Coconut watermelon juice.png" },
    { name: "Coconut Passion Juice", image: "/Products/Juice/Coconut passion juice.png" },
    { name: "Coconut Soursop Juice", image: "/Products/Juice/Coconut soursop juice.png" },
  ],
  tea_coffee: [
    { name: "Coconut Milk Tea", image: "/Products/Tea Coffee/Milk Tea.png" },
    { name: "Coconut Latte", image: "/Products/Tea Coffee/latte.png" },
    { name: "Coconut Chocolate Latte", image: "/Products/Tea Coffee/Choco latte.png" },
    { name: "Coconut Cappuccino", image: "/Products/Tea Coffee/Coconut Cappuccino.png" },
  ],
  desserts: [
    { name: "Coconut Ice Cream", image: "/Products/Deserts/Coconut Ice cream.png" },
    { name: "Coconut Ice Cream with Honey", image: "/Products/Deserts/Coconut Ice cream with honey.png" },
    { name: "Nata de Coco with Honey", image: "/Products/Deserts/Nata de Coco with honey.png" },
    { name: "Coconut Jelly", image: "/Products/Deserts/Coconut Jelly.png" },
    { name: "Coconut Jelly with Ice Cream", image: "/Products/Deserts/Coconut Jelly with ice cream.png" },
  ],
};

const ProductMenu = () => {
  const [activeCategory, setActiveCategory] = useState("shakes");

  return (
    <div className="container mx-auto p-4">
      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 pb-2 overflow-x-auto">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`font-primary font-bold text-lg uppercase ${
              activeCategory === category ? "text-[#3FBFCA] border-b-4 border-[#71B743]" : "text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.replaceAll("_", " ")}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {products[activeCategory].map((product) => (
          <div key={product.name} className="text-center">
            {/* Apply hover effect only on the image */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 mx-auto"
              whileHover={{
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: 0 }} // Ensure it starts at the default position
            />
            <p className="text-[#71B743] text-base sm:text-xl md:text-2xl lg:text-3xl font-primary font-bold">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
