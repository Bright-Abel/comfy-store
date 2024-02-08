import { toast } from 'react-toastify';
import { authFetch } from '../axios';
import { FormLogin, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { loginUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await authFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('successfully login');
      return redirect('/');
    } catch (error) {
      const errMsg =
        error?.response?.data?.error?.message ||
        'Please check your credentials';
      toast.error(errMsg);
    }
    return null;
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await authFetch.post('/auth/local', {
        identifier: 'bright@gmail.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error, please try again');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormLogin type="email" label="Email" name="identifier" />
        <FormLogin type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block capitalize font-bold"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not yet a member?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary font-semibold"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
