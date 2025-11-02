import { useFormik } from "formik";
import { loginSchema } from "../validations/loginSchema";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthService";

export default function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await loginUser(values);
        navigate("/dashboard");
      } catch (error) {
        console.error("Login gagal:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input {...formik.getFieldProps("email")} placeholder="Email" />
      <input {...formik.getFieldProps("password")} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
