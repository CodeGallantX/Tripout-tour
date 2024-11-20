import { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    const handleLoad = () => {
      const loadingOverlay = document.getElementById('loading-overlay');
      const content = document.getElementById('content');
      loadingOverlay.style.display = 'none';
      content.style.display = 'block';
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      <div id="loading-overlay">
        <img src="/path/to/your/loading.gif" alt="Loading..." />
      </div>

      <div id="content" style={{ display: 'none' }}>
      </div>
    </div>
  );
};

export default Loading;
