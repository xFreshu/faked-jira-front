import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import classes from './AuthLogin.module.scss';
const AuthLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any): void => {
    console.log(data);
    toast.success('Success');
    navigate('/app');
  };

  console.log(watch('example'));

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <input {...register('name', { required: true })} id="name" />
        </label>
        {errors.name && <span>This field is required</span>}
        <label htmlFor="password">
          Password
          <input
            {...register('password', { required: true })}
            type="password"
            id="password"
          />
        </label>
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
        <div className={classes.separator}>or</div>
        <button className={classes.RegisterButton} onClick={() => navigate('/register')}>
          Register
        </button>
      </form>
    </div>
  );
};

export default AuthLogin;
