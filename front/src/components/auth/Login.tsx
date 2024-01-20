import { Link, useNavigate, useLocation } from "react-router-dom";
import { type FieldValues, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const go = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const submit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        console.log(res.status, res.statusText);
        reset();
      } else {
        setAuth({ logged: true });
        go("/dashboard", { replace: true, state: location.state });
      }
    } catch (error) {
      console.error("There was a login error!", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              تسجيل الدخول
            </h1>
            <form
              onSubmit={handleSubmit(submit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-gray-900 dark:text-white"
                >
                  البريد الالكتروني
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="pt-1 text-red-500">{`${errors.email.message}`}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block font-medium text-gray-900 dark:text-white"
                >
                  كلمة المرور
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {errors.password && (
                  <p className="pt-1 text-red-500">{`${errors.password.message}`}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="pr-2 text-gray-500 dark:text-gray-300"
                    >
                      تذكرني
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-primary-600 text-sm font-medium hover:underline dark:text-slate-400"
                >
                  هل نسيت كلمة المرور؟
                </a>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-blue-600 px-5  py-2.5 text-center font-semibold text-white focus:outline-none focus:ring-4"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 disabled:bg-slate-500 dark:text-gray-400">
                لا تمتلك متجرا؟{" "}
                <Link
                  to="/register"
                  className="text-primary-600 dark:text-primary-500 font-semibold hover:underline"
                >
                  أنشئ متجرك الآن
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
