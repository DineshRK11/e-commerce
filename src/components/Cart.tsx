import { useAppSelector } from "@/Redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { FormEvent, useState } from "react";
// import CartProduct from './CartProduct'

const Cart = ({ setShowCart }: any) => {
  const products = useAppSelector((state) => state.cartReducer);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };

  const handlePurchase = () => {
    setIsPurchased(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleChange = (name: string) => (e: any) => {
    if (name === "name") {
      setDetails({ ...details, name: e.target.value });
    } else if (name === "mobile") {
      setDetails({ ...details, mobile: e.target.value });
    } else {
      setDetails({ ...details, address: e.target.value });
    }
  };

  console.log("detils", details);

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6 space-y-2">
          {products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total :</p>
          <p>${getTotal()}.00</p>
        </div>

        <button
          className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-[red] mt-4 mb-4 disabled:bg-[gray]"
          onClick={() => setModalOpen(true)}
          disabled={getTotal() <= 0}
        >
          Buy
        </button>
        <dialog id="my_modal_3" className="modal" open={modalOpen}>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </form>

            <div className="max-w-md mx-auto  p-6 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-6">
                Payment Information
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="totalPrice"
                  className="block text-sm font-medium text-gray-600"
                >
                  Total Price ($)
                </label>
                <input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter total price"
                  value={`${getTotal()}.00`}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your name"
                  value={details.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your mobile number"
                  value={details.mobile}
                  onChange={handleChange("mobile")}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  //   rows="3"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your address"
                  value={details.address}
                  onChange={handleChange("address")}
                ></textarea>
              </div>

              <button
                className="bg-red-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-[gray]"
                onClick={handlePurchase}
                disabled={details.name.length===0 || details.mobile.length===0 || details.address.length===0 }
              >
                Proceed to Payment
              </button>
              <dialog id="my_modal_3" className="modal bg-[rgba(0,0,0,0.4)]" open={isPurchased}>
                <div className="modal-box">
                  <div role="alert" className="alert alert-success mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Your purchase has been confirmed!</span>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Cart;
