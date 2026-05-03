import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';
import CheckoutForm from '../../components/ecommerce/CheckoutForm';
import Button from '../../components/common/Button';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container section text-center">
        <h2>Your cart is empty</h2>
        <p className="mb-4">Add some products to your cart before checking out.</p>
        <Button variant="primary" onClick={() => navigate('/products')}>Return to Products</Button>
      </div>
    );
  }

  return (
    <div className="checkout-page fade-in">
      <div className="container section">
        <h1 className="text-center mb-8">Secure Checkout</h1>
        
        <div className="checkout-layout">
          {/* Checkout Form */}
          <div className="checkout-form-column">
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div className="order-summary-column">
            <div className="order-summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-info">
                      <span className="summary-item-name">{item.name}</span>
                      <span className="summary-item-qty">x {item.quantity}</span>
                    </div>
                    <span className="summary-item-price">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
                <div className="total-row">
                  <span>Tax (18% GST)</span>
                  <span>{formatCurrency(getCartTotal() * 0.18)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>{formatCurrency(getCartTotal() * 1.18)}</span>
                </div>
              </div>

              <div className="summary-footer">
                <p>NPathways Global (Skillinum Falcon LLP)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
