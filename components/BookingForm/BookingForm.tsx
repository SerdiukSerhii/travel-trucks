'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createBookingRequest } from '@/lib/api/campers';
import ButtonBase from '@/components/ButtonBase/ButtonBase';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

type BookingFormProps = {
  camperId: string;
};

type BookingFormValues = {
  name: string;
  email: string;
};

const BookingForm = ({ camperId }: BookingFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async ({ name, email }: BookingFormValues) => {
    try {
      setIsLoading(true);

      const response = await createBookingRequest(camperId, {
        name,
        email,
      });

      toast.success(response.message);
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.form_container}>
      <div className={css.form_header}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={css.field}>
          <input
            id="name"
            className={`${css.input} ${errors.name ? css.inputError : ''}`}
            type="text"
            placeholder=" "
            {...register('name', {
              required: 'Please enter your name.',
              pattern: {
                value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/,
                message: 'Please enter your name.',
              },
            })}
          />

          <label
            className={`${css.label} ${errors.name ? css.labelError : ''}`}
            htmlFor="name"
          >
            Name*
          </label>

          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>

        <div className={css.field}>
          <input
            id="email"
            className={`${css.input} ${errors.email ? css.inputError : ''}`}
            type="email"
            placeholder=" "
            {...register('email', {
              required: 'Please enter your email.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter your email.',
              },
            })}
          />

          <label
            className={`${css.label} ${errors.email ? css.labelError : ''}`}
            htmlFor="email"
          >
            Email*
          </label>

          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

        <ButtonBase
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Booking...' : 'Send'}
        </ButtonBase>
      </form>
    </div>
  );
};

export default BookingForm;
