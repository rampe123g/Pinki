'use client'
import { useEffect } from 'react';
import styles from '../Home.module.css'; // Using CSS module for styling

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const texts = document.querySelectorAll(`.${styles.animatedText}`);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      texts.forEach(text => {
        const elementPosition = text.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition + windowHeight > elementPosition + text.offsetHeight / 2) {
          text.classList.add(styles.visible);
        } else {
          text.classList.remove(styles.visible);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.animatedText}>Text Animation on Scroll</div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
      <div className={styles.animatedText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed quia pariatur ex ducimus architecto optio laborum, voluptatum ipsam, eaque aut, corrupti fuga animi possimus iste. Quisquam velit nemo laudantium.
      </div>
    </div>
  );
};

export default ScrollAnimation;
