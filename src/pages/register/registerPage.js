import React from "react";
import {registerUser } from "../../services/auth/authRegister";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const{
        register,
        handleSubmit,
        formState: { error },
    } = useForm ();

    const onSubmit = async (data) => {
        const response = await registerUser(data);
        if(response.success){
            alert("Đăng ký thành công!");
        }
        else{
            alert ("Đăng ký thất bại!",response.message);
        }
    };
    return (
        <div className="register-container">
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
          type="text"
          placeholder="Tên người dùng"
          {...register("username", { required: "Tên người dùng là bắt buộc" })}
        />
          {error.username && <p>{error.username.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email là bắt buộc" })}
        />
          {error.email && <p>{error.email.message}</p>}

        <input
          type="password"
          placeholder="Mật khẩu"
          {...register("password", { required: "Mật khẩu là bắt buộc" })}
        />
          {error.password && <p>{error.password.message}</p>}

          <button type="submit"> Đăng ký</button>
            </form>
        </div>
    );
};
export default RegisterPage;