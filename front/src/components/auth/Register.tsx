import { Link, useNavigate } from "react-router-dom";
import { type FieldValues, useForm } from "react-hook-form";

const Register = () => {
  const go = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const submit = async (data: FieldValues) => {
    console.log(JSON.stringify(data))
    try {
      await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
  
      reset();
      go('/login');
    } catch (error) {
      console.error("There was register error!", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              أنشئ متجرك الآن
            </h1>
            <form
              onSubmit={handleSubmit(submit)}
              className="space-y-4 md:space-y-6"
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
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="pt-1 text-red-500">{`${errors.password.message}`}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block font-medium text-gray-900 dark:text-white"
                >
                  تأكيد كلمة المرور
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === getValues("password") || "Passwords must match",
                  })}
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="pt-1 text-red-500">{`${errors.confirmPassword.message}`}</p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    {...register("checkbox", {
                      required: "Terms and Conditions must be accepted",
                    })}
                    type="checkbox"
                    id="terms"
                    aria-describedby="terms"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="pr-1 font-light text-gray-500 dark:text-gray-300"
                  >
                    أنا أقبل{" "}
                    <a
                      className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                      href="#"
                    >
                      الشروط والأحكام
                    </a>
                  </label>
                  {errors.checkbox && (
                    <p className="pt-1 text-red-500">{`${errors.checkbox.message}`}</p>
                  )}
                </div>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-white focus:outline-none focus:ring-4 disabled:bg-slate-500 dark:bg-blue-600"
              >
                أنشئ متجرك الآن
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                لديك متجر بالفعل؟{" "}
                <Link
                  to="/login"
                  className="text-primary-600 dark:text-primary-500 font-semibold hover:underline"
                >
                  سجل الدخول من هنا
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;