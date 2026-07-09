import { useState, useEffect } from 'react';
import FileUploader from '../../components/dashboard/FileUploader';
import FileManager from '../../components/dashboard/FileManager';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';

const MyFiles = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('documents');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [viewDocModalOpen, setViewDocModalOpen] = useState(false);
  const [viewingDoc, setViewingDoc] = useState(null);

  const fetchDocuments = async () => {
    if (!user?.token) return;
    try {
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const response = await fetch(`${baseUrl}/documents/me`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        const mappedFiles = data.map(doc => ({
          id: doc.id,
          name: doc.name,
          type: doc.type,
          size: `${(doc.size / 1024 / 1024).toFixed(2)} MB`,
          rawSize: doc.size,
          date: new Date(doc.createdAt).toISOString().split('T')[0],
          status: doc.status
        }));
        setFiles(mappedFiles);
      }
    } catch (error) {
      console.error("Failed to fetch documents", error);
      toast.error('Failed to load documents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [user]);

  const handleUpload = async (newFiles) => {
    if (!user?.token) return;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
    
    let successCount = 0;
    for (const file of newFiles) {
      const formData = new FormData();
      formData.append('file', file);
      
      try {
        const response = await fetch(`${baseUrl}/documents/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${user.token}`
          },
          body: formData
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          toast.error(`Failed to upload ${file.name}: ${errorData.message}`);
        } else {
          successCount++;
        }
      } catch (error) {
        console.error("Upload error", error);
        toast.error(`Error uploading ${file.name}`);
      }
    }
    
    if (successCount > 0) {
      toast.success(`${successCount} file(s) uploaded successfully!`);
      fetchDocuments(); // Refresh the list
      setActiveTab('documents');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      if (!user?.token) return;
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      
      try {
        const response = await fetch(`${baseUrl}/documents/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        
        if (response.ok) {
          setFiles(files.filter(f => f.id !== id));
          toast.success('Document deleted successfully');
        } else {
          toast.error('Failed to delete document');
        }
      } catch (error) {
        console.error("Delete error", error);
        toast.error('Error deleting document');
      }
    }
  };

  const handleDownload = (id, fileName) => {
    if (!user?.token) return;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
    const url = `${baseUrl}/documents/${id}/download`;
    
    fetch(url, {
      headers: { 'Authorization': `Bearer ${user.token}` }
    })
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch(error => {
      console.error('Download error:', error);
      toast.error('Failed to download document');
    });
  };

  const handleView = (id, fileName) => {
    if (!user?.token) return;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
    const url = `${baseUrl}/documents/${id}/download`;
    
    fetch(url, {
      headers: { 'Authorization': `Bearer ${user.token}` }
    })
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      setViewingDoc({ url: blobUrl, type: blob.type, name: fileName, id });
      setViewDocModalOpen(true);
    })
    .catch(error => {
      console.error('View error:', error);
      toast.error('Failed to view document');
    });
  };

  const totalStorageBytes = files.reduce((acc, file) => acc + (file.rawSize || 0), 0);
  const totalStorageMB = (totalStorageBytes / 1024 / 1024).toFixed(2);
  const maxStorageMB = 5.00;
  const storagePercentage = Math.min((totalStorageBytes / (5 * 1024 * 1024)) * 100, 100).toFixed(1);

  return (
    <div className="my-files-page fade-in">
      <div className="page-header mb-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ color: 'var(--color-text-primary)' }}>My Documents</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>Upload and manage your application documents securely.</p>
        </div>
        
        <div style={{ background: 'var(--color-bg-secondary)', padding: '12px 20px', borderRadius: '12px', border: '1px solid var(--color-gray-200)', minWidth: '220px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Storage Used</span>
            <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{totalStorageMB} MB / {maxStorageMB} MB</span>
          </div>
          <div style={{ height: '6px', background: 'var(--color-gray-200)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${storagePercentage}%`, background: storagePercentage > 90 ? '#ef4444' : 'var(--color-brand-primary)', borderRadius: '4px', transition: 'width 0.5s ease' }}></div>
          </div>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button 
          onClick={() => setActiveTab('documents')}
          className={`dashboard-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
        >
          Documents
        </button>
        <button 
          onClick={() => setActiveTab('upload')}
          className={`dashboard-tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
        >
          Upload Documents
        </button>
      </div>

      {activeTab === 'documents' ? (
        <div className="dashboard-card files-section">
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading documents...</div>
          ) : (
            <FileManager files={files} onDelete={handleDelete} onDownload={handleDownload} onView={handleView} />
          )}
        </div>
      ) : (
        <div className="dashboard-card upload-section">
          <div className="dashboard-section-header">
            <h2>Upload New</h2>
            <p>Upload a new document to your profile.</p>
          </div>
          <FileUploader onUpload={handleUpload} />
          
          <div className="upload-guidelines mt-6" style={{ 
            background: 'rgba(191, 255, 153, 0.08)',
            padding: 'var(--spacing-5)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(191, 255, 153, 0.2)',
            marginTop: 'var(--spacing-6)'
          }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-brand-primary)',
              marginBottom: 'var(--spacing-3)'
            }}>Document Guidelines</h3>
            <ul style={{ 
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.8',
              paddingLeft: 'var(--spacing-5)',
              color: 'var(--color-text-secondary)',
              listStyle: 'disc'
            }}>
              <li>Ensure scans are clear and readable</li>
              <li>Max total storage: 5MB per user</li>
              <li>Supported formats: PDF, JPG, PNG</li>
              <li>Name files clearly (e.g., "Resume_JohnDoe")</li>
            </ul>
          </div>
        </div>
      )}

      <Modal isOpen={viewDocModalOpen} onClose={() => setViewDocModalOpen(false)} title={viewingDoc?.name || "View Document"}>
        {viewingDoc && (
          <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f9fafb', borderRadius: '4px', overflow: 'hidden' }}>
            {viewingDoc.type.startsWith('image/') ? (
              <img src={viewingDoc.url} alt={viewingDoc.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            ) : viewingDoc.type === 'application/pdf' ? (
              <iframe src={viewingDoc.url} style={{ width: '100%', height: '100%', border: 'none' }} title={viewingDoc.name} />
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>This file type cannot be previewed in the browser.</p>
                <Button onClick={() => handleDownload(viewingDoc.id, viewingDoc.name)}>
                  Download Instead
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyFiles;
