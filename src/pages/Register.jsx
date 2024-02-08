import { FormLogin, SubmitBtn } from '../components';
import { Link, Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { authFetch } from '../axios';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  console.log(request);
  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const respond = await authFetch.post('/auth/local/register', data);
    toast.success('Account created successfully');
    return redirect('/login');
  } catch (error) {
    const errMsg =
      error?.response?.data?.error?.message || 'Please check your credentials';

    toast.error(errMsg);
  }
  return null;
};
const Register = () => {
  return (
    <section className="h-screen grid place-content-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormLogin type="text" label="username" name="username" />
        <FormLogin type="email" label="email" name="email" />
        <FormLogin type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="Register" />
          <p className="text-center">
            Already a member?
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Register;
