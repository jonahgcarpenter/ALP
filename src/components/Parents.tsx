import React, { useState } from 'react';
import '../styles/parents.css';

interface PetData {
  imageUrl: string;
  name: string;
  age: number;
  description: string;
  gender: string;
  isActive: boolean;
  updatedAt: any; // Using 'any' for Firebase timestamp
}

interface ParentsProps {
  millie: PetData | null;
  mardis: PetData | null; // Note: We keep this as 'mardis' for prop naming consistency
  // Remove onImageClick from props
}

const Parents: React.FC<ParentsProps> = ({ millie, mardis }) => {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});
  const [modalImage, setModalImage] = useState<{ url: string, description: string } | null>(null);

  // Add debug logging
  React.useEffect(() => {
    console.log('Component rendered with props:', { millie, mardis });
  }, [millie, mardis]);

  React.useEffect(() => {
    if (millie) console.log('Millie image URL:', millie.imageUrl);
    if (mardis) console.log('Mardis image URL:', mardis.imageUrl);
  }, [millie, mardis]);

  const handleImageError = (petType: 'millie' | 'mardis') => {
    setImgErrors(prev => ({ ...prev, [petType]: true }));
    console.error('Image failed to load:', petType === 'millie' ? millie?.imageUrl : mardis?.imageUrl);
  };

  const getFallbackImage = () => '/path/to/fallback-image.png';

  const handleImageClick = (url: string, description: string) => {
    setModalImage({ url, description });
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="parents-container">
        <div className="parents-grid">
          {/* Add debug message if no pets */}
          {!millie && !mardis && (
            <div className="no-pets-message">
              <p>No pet data available</p>
              <p>Debug info: Millie: {JSON.stringify(!!millie)}, Mardis: {JSON.stringify(!!mardis)}</p>
            </div>
          )}
          
          {/* Add debug info to each pet card */}
          {millie && millie.isActive && (
            <div className="parent-card" data-testid="millie-card">
              <div className="parentimage-container">
                <img
                  src={imgErrors['millie'] ? getFallbackImage() : millie.imageUrl}
                  alt={`${millie.name} - ${millie.gender === 'female' ? 'Female' : 'Male'} Dog`}
                  onClick={() => !imgErrors['millie'] && handleImageClick(millie.imageUrl, millie.name)}
                  className={`parent-image ${imgErrors['millie'] ? 'image-error' : ''}`}
                  onError={() => handleImageError('millie')}
                />
              </div>
              <div className="parent-info">
                <h3 className="parent-name">{millie.name}</h3>
                <p className="parent-age">Age: {millie.age} {millie.age === 1 ? 'year' : 'years'}</p>
                <p className="parent-gender">Gender: {millie.gender.charAt(0).toUpperCase() + millie.gender.slice(1)}</p>
                <p className="parent-description">{millie.description}</p>
              </div>
            </div>
          )}
          
          {mardis && mardis.isActive && (
            <div className="parent-card" data-testid="mardis-card">
              <div className="parentimage-container">
                <img
                  src={imgErrors['mardis'] ? getFallbackImage() : mardis.imageUrl}
                  alt={`${mardis.name} - ${mardis.gender === 'female' ? 'Female' : 'Male'} Dog`}
                  onClick={() => !imgErrors['mardis'] && handleImageClick(mardis.imageUrl, mardis.name)}
                  className={`parent-image ${imgErrors['mardis'] ? 'image-error' : ''}`}
                  onError={() => handleImageError('mardis')}
                />
              </div>
              <div className="parent-info">
                <h3 className="parent-name">{mardis.name}</h3>
                <p className="parent-age">Age: {mardis.age} {mardis.age === 1 ? 'year' : 'years'}</p>
                <p className="parent-gender">Gender: {mardis.gender.charAt(0).toUpperCase() + mardis.gender.slice(1)}</p>
                <p className="parent-description">{mardis.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {modalImage && (
        <div className="parentimage-modal" onClick={handleCloseModal}>
          <div className="parentmodal-content" onClick={e => e.stopPropagation()}>
            <button className="parentmodal-close" onClick={handleCloseModal}>×</button>
            <div className="parentmodal-header">{modalImage.description}</div>
            <img 
              src={modalImage.url} 
              alt={modalImage.description} 
              className="parentmodal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

// Add displayName for debugging
Parents.displayName = 'Parents';

export default Parents;