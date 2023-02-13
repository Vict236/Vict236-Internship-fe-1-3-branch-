import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';

const Singlepage = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  const docRef = doc(db, 'articles', id);

  useEffect(() => {
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log('Oops...');
      }
    });
  }, [docRef]);

  if (!article) return <div />;
  else {
    const { title, imageUrl, expertComment, description } = article;

    return (
      <>
        <Navbar />

        <div className="SingleArticleWrapper">
          <div className="SingleArticleContainer">
            <h2>{title}</h2>
            <img
              src={imageUrl}
              alt="Generic placeholder"
              className="SingleArticleImg"
            />

            <h3>{description}</h3>

            <h4>
              Expert Comment: <br /> <br />
              {expertComment}
            </h4>
          </div>
        </div>
      </>
    );
  }
};

export default Singlepage;