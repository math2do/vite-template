import { useAppSelector } from './lib/hooks';
import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { Phone } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import {
  increment,
  decrement,
  clearCart,
  remoteItem,
} from './state/cart/cart-slice';
import { useAppDispatch } from './lib/hooks';
import { useParams } from 'react-router-dom';

function App() {
  const cart = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const { param } = useParams();
  console.log('param', param);

  return (
    <main className="font-sans">
      <div className="flex h-20 w-full items-center bg-blue-600">
        <nav className="mx-auto flex max-w-5xl flex-1 justify-between px-4">
          <h1 className="text-2xl font-semibold uppercase text-white">
            Redux Toolkit
          </h1>
          <div className="relative">
            <ShoppingCart className="h-8 w-8 text-white" />
            <p className="absolute -right-4 -top-4 flex h-7 w-7 items-center justify-center rounded-full bg-violet-300 p-2 text-lg text-white">
              {cart.totalQuantity}
            </p>
          </div>
        </nav>
      </div>

      <section className="mx-auto mt-20 max-w-5xl px-4 text-center">
        <p className="text-3xl font-semibold uppercase md:text-4xl">Your Bag</p>
        {cart.totalQuantity > 0 && (
          <>
            <div className="mt-10 space-y-10">
              {cart.cartItems.map((item) => {
                return <ProductPage phone={item} key={item.id} />;
              })}
            </div>
            <Separator className="mt-10" />
            <div className="mt-6 flex justify-between">
              <p className="text-xl">Total</p>
              <p className="rounded-md bg-indigo-400 px-2 py-1 font-mono text-xl tracking-widest text-white">{`$${cart.totalAmount.toFixed(2)}`}</p>
            </div>
            <Button
              variant="outline"
              className="mt-10 bg-indigo-500 tracking-widest text-white hover:bg-indigo-600 hover:text-white"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>

            {/* <a href="#" className={buttonVariants({ variant: 'outline' })}>
              Explore more
            </a> */}
          </>
        )}

        {cart.totalQuantity === 0 && (
          <>
            <p className="mt-10">Your cart is empty</p>
          </>
        )}
      </section>
    </main>
  );
}

interface ProductProps {
  phone: Phone;
}

function ProductPage({ phone }: ProductProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between">
      {/* product description */}
      <div className="flex items-center">
        <img src={phone.image} alt="phone-image" className="h-24 w-24" />
        <div className="text-left">
          <h1 className="text-lg">{phone.name}</h1>
          <p className="text-gray-500">{`$${phone.price}`}</p>
          <button
            className="text-sm tracking-wider text-indigo-500 transition-all duration-300 hover:text-indigo-700"
            onClick={() => dispatch(remoteItem(phone.id))}
          >
            remove
          </button>
        </div>
      </div>
      {/* product counter  */}
      <div className="flex flex-col justify-between">
        <button
          className="text-indigo-500 hover:text-indigo-700"
          onClick={() => dispatch(increment(phone.id))}
        >
          <ChevronUp className="h-8 w-8" />
        </button>
        <p>{phone.quantity}</p>
        <button
          className="text-indigo-500 hover:text-indigo-700"
          onClick={() => dispatch(decrement(phone.id))}
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default App;
