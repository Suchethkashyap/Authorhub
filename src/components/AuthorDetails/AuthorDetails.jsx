
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loader';
import './AuthorDetails.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://example-data.draftbit.com/authors/';

const AuthorDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getAuthorDetails() {
      try {
        const response = await fetch(`${API_URL}${id}`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            person,
            description,
            imgUrl,
            placeOfBirth,
            professions,
            articleUrl,
          } = data;
          const newAuthor = {
            name: person,
            description: description || 'No description found',
            imgUrl: imgUrl || '',
            placeOfBirth: placeOfBirth || 'Unknown',
            professions: professions || 'Unknown',
            articleUrl: articleUrl || '',
          };
          setAuthor(newAuthor);
        } else {
          setAuthor(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAuthorDetails();
  }, [id]);

  // if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button
          type='button'
          className='flex flex-c back-btn'
          onClick={() => navigate('/')}
        >
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={author?.imgUrl} alt='author img' />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{author?.name}</span>
            </div>
            <div className='book-details-item description'>
              <span>{author?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Place of Birth: </span>
              <span className='text-italic'>{author?.placeOfBirth}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Professions: </span>
              <span className='text-italic'>{author?.professions}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Article URL: </span>
              <a href={author?.articleUrl} target='_blank' rel='noreferrer'>
                {author?.articleUrl}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;


