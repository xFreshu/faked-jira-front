import React from 'react';
import { useForm } from 'react-hook-form';
import classes from '../AuthLogin/AuthLogin.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AuthRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any): void => {
    console.log(data);
    toast.success('Create a new account');
    navigate('/');
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Your name
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
        <button className={classes.RegisterButton} onClick={() => navigate('/')}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AuthRegister;
