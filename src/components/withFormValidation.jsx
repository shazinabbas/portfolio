import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerChild } from '../utils/motion';

const withFormValidation = (Component) => {
  return function FormValidationHOC() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
      try {
        setIsSubmitting(true);
        // Perform form submission logic here
        console.log(data);
        setIsSubmitting(false);
      } catch (error) {
        console.log(error);
        setIsSubmitting(false);
      }
    };

    return (
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ul className={`${styles.wrapper} ${styles['grid-four']}`}>
          <motion.li
            variants={staggerChild()}
            className={styles['list-item']}
            style={{ '--i': 1 }}
          >
            <input
              className={`input ${errors.name ? 'input-error' : ''}`}
              type="text"
              placeholder="Name"
              required
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="error-message">Please enter your name.</span>
            )}
          </motion.li>

          <motion.li
            variants={staggerChild()}
            className={styles['list-item']}
            style={{ '--i': 2 }}
          >
            <input
              className={`input ${errors.phone ? 'input-error' : ''}`}
              type="tel"
              placeholder="Phone number"
              required
              name="phone"
              ref={register({
                required: true,
                pattern: /^[0-9\b()+-]{10,13}$/i,
              })}
            />
            {errors.phone && (
              <span className="error-message">
                Please enter a valid phone number.
              </span>
            )}
          </motion.li>

          <motion.li
            variants={staggerChild()}
            className={styles['list-item']}
            style={{ '--i': 3 }}
          >
            <input
              className={`input ${errors.email ? 'input-error' : ''}`}
              type="email"
              placeholder="E-mail"
              required
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="error-message">Please enter your email.</span>
            )}
          </motion.li>

          <motion.li
            variants={staggerChild()}
            className={styles['list-item']}
            style={{ '--i': 4 }}
          >
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </motion.li>
        </ul>
      </motion.form>
    );
  };
};

export default withFormValidation;
