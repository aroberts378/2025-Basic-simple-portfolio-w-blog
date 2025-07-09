

import { useState } from 'react';
import projectsData from "../../data/project";

const ProjectDetail = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  if (!project) return <div>No project found</div>;

  function openModal(src) {
    console.log('Open:', src);
    setCurrentImage(src);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentImage('');
  }

  return (
    <>
      <h1>{project.title}</h1>
      <div>
        {project.screenshots && project.screenshots.length > 0 ? (
          project.screenshots.map((src, i) => (
            <button key={i} onClick={() => openModal(src)}>
              <img src={src} alt={`Screenshot ${i+1}`} width="200" />
            </button>
          ))
        ) : (
          <div>No screenshots available.</div>
        )}
      </div>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={closeModal}
        >
          <div style={{ position: 'relative', maxWidth: 800, width: '100%' }} onClick={e => e.stopPropagation()}>
            <img src={currentImage} alt="Modal" style={{ width: '100%', borderRadius: 8 }} />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 12, right: 24,
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 32,
                cursor: 'pointer'
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  return { props: { project: project || null } };
}

export default ProjectDetail;
