import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { products } from '../../data/products';

const MyProducts = () => {
  const navigate = useNavigate();
  // Mock purchased products (first two products)
  const purchasedProducts = products.slice(0, 2);

  return (
    <div className="my-products-page fade-in">
      <h1 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>My Products</h1>
      
      {purchasedProducts.length > 0 ? (
        <div className="purchased-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {purchasedProducts.map(product => (
            <Card key={product.id} className="purchased-product-card">
              <div className="product-header-mini mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>{product.name}</span>
                <span className="status-badge" style={{ 
                  background: 'linear-gradient(135deg, rgba(191, 255, 153, 0.2), rgba(198, 206, 240, 0.15))',
                  color: 'var(--color-brand-primary)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  border: '1px solid rgba(191, 255, 153, 0.3)',
                  fontWeight: '600'
                }}>Sent</span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{product.description.substring(0, 80)}...</p>
              
              <div className="download-section">
                <Button variant="outline" fullWidth size="small">
                  Download / Access
                </Button>
                <p className="text-xs mt-2 text-center" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', marginTop: 'var(--spacing-2)' }}>
                  Link sent to registered email
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12" style={{ 
          background: 'rgba(10, 30, 63, 0.6)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--spacing-12)',
          border: '1px solid rgba(191, 255, 153, 0.15)'
        }}>
          <h3 style={{ color: 'var(--color-text-primary)' }}>No products yet</h3>
          <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>Explore our shop to start your journey.</p>
          <Button variant="primary" onClick={() => navigate('/products')}>Browse Products</Button>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
