import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Add to whis list</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.product, nextProps.product)
})

// shallow compare -> comparação rasa
// {} === {} -> no javascript quando comparamos dois objetos sempre retorna false;
// igualdade referencial
