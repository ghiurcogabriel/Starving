export type CartItem = {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  price: number;
};

export type RestaurantType = {
  title: string;
  description: string;
  openHours: string;
  closed: string;
  deliveryFee: number;
  minOrder: number;
  maxDistance: number;
  costExtraDistance: number;
  menus: CartItem[];
};

export type CartContextType = {
  cartItems: CartItem[];
  totalItems: number;
  increaseItems: (item: string) => void;
  decreaseItems: (item: string) => void;
  removeFromCart: (item: string) => void;
  restaurantItems: string[];
  emptyCart: () => void;
  qty: number;
  error: string;
  addToCart: (item: CartItem) => void;
  restItems: (item: string) => void;
};
