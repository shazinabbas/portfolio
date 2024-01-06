// Inside Blogs.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../constants';
import { styles } from '../styles';

const Blogs = () => {
  const { customSlug } = useParams();

  // Find the blog entry based on customSlug
  const blogEntry = blogs.find(blog => blog.customSlug === customSlug);

  if (!blogEntry) {
    // Handle case when blog entry is not found
      return <div className={`bg-primary ${styles.padding} relative w-full h-screen mx-auto`}>
            <h1 className={styles.sectionHeadText}>Blog not found</h1>
            </div>
  }

  return (
    <div className={`bg-primary ${styles.padding} relative w-full h-screen mx-auto`}>
      <h1 className={styles.sectionHeadText}>{blogEntry.title}</h1>
      <p className={styles.sectionSubText}>{blogEntry.content}</p>
      {/* You can add more components or elements to display the rest of your blog content */}
    </div>
  );
};

export default Blogs;
