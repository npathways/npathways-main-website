import { useState } from "react";
import Button from "../common/Button";
import { FiEye, FiDownload, FiTrash2 } from "react-icons/fi";
import "./FileManager.css";

const FileManager = ({ files, onDelete, onDownload, onView }) => {
  if (!files || files.length === 0) {
    return (
      <div className="file-manager-empty">
        <p>No files uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="file-manager">
      <div className="dashboard-section-header">
        <h2>Uploaded Documents ({files.length})</h2>
        <p>View and manage the documents you have uploaded.</p>
      </div>
      <div className="files-list">
        {files.map((file) => (
          <div key={file.id} className="file-item">
            <div className="file-icon">
              {file.type.includes("pdf") ? "PDF" : "IMG"}
            </div>
            <div className="file-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="file-name" style={{ margin: 0 }}>{file.name}</span>
                <span className={`badge ${file.status ? file.status.toLowerCase() : 'pending'}`}>
                  {file.status || 'Pending'}
                </span>
              </div>
              <span className="file-meta">
                {file.size} • Uploaded {file.date}
              </span>
            </div>
            <div className="file-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {onView && (
                <button
                  className="btn-small"
                  onClick={() => onView(file.id, file.name)}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-gray-300)', color: 'var(--color-text-primary)', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <FiEye size={14} /> View
                </button>
              )}
              <button
                className="btn-small"
                onClick={() => onDownload ? onDownload(file.id, file.name) : alert(`Downloading ${file.name}`)}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-gray-300)', color: 'var(--color-text-primary)', borderRadius: '4px', cursor: 'pointer' }}
              >
                <FiDownload size={14} /> Download
              </button>
              <button
                className="btn-small"
                onClick={() => onDelete(file.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#dc2626', borderRadius: '4px', cursor: 'pointer' }}
              >
                <FiTrash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileManager;
