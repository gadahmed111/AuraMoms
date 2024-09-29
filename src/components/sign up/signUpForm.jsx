import { useState, useEffect } from "react";

function SignUpForm() {
  const [formValues, setFormValues] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      // يمكنك إضافة رسالة نجاح هنا
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long!";
    }

    return errors;
  };

  return (
    <div>
      <form
        className="bg-white px-3 py-2 rounded-3xl border-2 border-gray-100"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-semibold">Sign up</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Join us now and enjoy the unique luxury experience you deserve!
        </p>

        <div className="mt-5">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-lg font-medium">First name</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                aria-label="First name"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}
            </div>

            <div className="w-1/2">
              <label className="text-lg font-medium">Last name</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                aria-label="Last name"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">{formErrors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              aria-label="Email"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              aria-label="Password"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm">{formErrors.password}</p>
            )}
          </div>

          <div className="mt-5 flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="ml-2 font-medium text-base accent-formColor"
              />
              <label htmlFor="remember" className="ml-2 font-medium text-base">
                By creating an account, you are accepting our terms of service and privacy policy
              </label>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-formColor text-white text-lg font-bold"
            >
              Sign up
            </button>
          </div>

          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <button className="ml-3 text-formColor text-base font-medium">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
