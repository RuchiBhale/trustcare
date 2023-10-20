import { useState } from "react";
//import Navbar from "@/components/navbar";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Input,
    Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { setItem } from "@/utils/localStorageControl";
// import { ApiService } from "@/config/api/ApiService";

interface FormData {
    p_name: string;
    password: string;
    p_contact: string;
    address: string;
    gender: string;
    dob: Date;
    reenterPassword: string;
    apiName: string;
}

const initialState: FormData = {
    password: "",
    p_contact: "",
    p_name: "",
    gender: "",
    address: "",
    reenterPassword: "",
    apiName: "user",
};

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<FormData>(initialState);

    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const router = useRouter();

    const handleSignIn = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            // ApiService.post(`${formData.apiName}/login`, formData)
            // .then((res) => {
            //     console.log(res);
            //     setItem("authToken", res.data.authToken);
            //     router.replace("/home");
            // });
        } else {
            if (formData.password === formData.reenterPassword) {
                setPasswordMismatch(false);
                if (isValidEmail(formData.email)) {
                    setInvalidEmail(false);
                    console.log(formData);
                    //ApiService.post(`${formData.apiName}/${formData.username}`, formData)
                    // .then((res) => {
                    //     console.log(res);
                    //     setItem("authToken", res.data.authToken);
                    //     setItem("username", res.data.username);
                    //     router.replace("/home");
                    //});
                } else {
                    // Invalid email
                    setInvalidEmail(true);
                }
            } else {
                // Passwords don't match
                setPasswordMismatch(true);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValidEmail = (email: string) => {
        // Basic email validation using regex
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    };

    return (
        <div>
            {/* {<Navbar />} */}
            <div className="flex h-[80vh] items-center justify-center pt-10">
                <Card className="w-[400px]">
                    <CardHeader className="flex flex-col gap-3 pt-10">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col text-center">
                            <p className="text-md">TrustCare</p>
                            <p className="text-small text-default-500">
                                {isLogin ? "Login" : "Sign Up"}
                            </p>
                        </div>
                    </CardHeader>

                    <form onSubmit={handleFormSubmit}>
                        {isLogin ? (
                            <CardBody className="items-center flex flex-col gap-3">
                                <Input
                                    type="text"
                                    label="Phone"
                                    className="w-[300px]"
                                    name="Phone"
                                    value={formData.Phone}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="password"
                                    label="Password"
                                    className="w-[300px]"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <Button color="primary" type="submit">
                                    <p className="text-white">Sign In</p>
                                </Button>
                                <Link href="/">
                                    <p className="text-small text-default-500">
                                        Forgot password?
                                    </p>
                                </Link>
                                <p
                                    className="text-small text-primary hover:cursor-pointer"
                                    onClick={handleSignIn}
                                >
                                    New User? Sign Up
                                </p>
                            </CardBody>
                        ) : (
                            <CardBody className="items-center flex flex-col gap-3">
                                <Input
                                    type="text"
                                    label="Username"
                                    className="w-[300px]"
                                    name="username"
                                    value={formData.Phone}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="First Name"
                                    className="w-[300px]"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="Last Name"
                                    className="w-[300px]"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="email"
                                    label="Email"
                                    className="w-[300px]"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="password"
                                    label="Password"
                                    className="w-[300px]"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="password"
                                    label="Re-enter Password"
                                    className="w-[300px]"
                                    name="reenterPassword"
                                    value={formData.reenterPassword}
                                    onChange={handleInputChange}
                                />
                                {passwordMismatch && (
                                    <p className="text-small text-danger">
                                        Passwords do not match.
                                    </p>
                                )}
                                {invalidEmail && (
                                    <p className="text-small text-danger">
                                        Invalid email.
                                    </p>
                                )}
                                <Button color="primary" type="submit">
                                    <p className="text-white">Sign Up</p>
                                </Button>
                                <Link href="/">
                                    <p className="text-small text-default-500">
                                        Forgot password?
                                    </p>
                                </Link>
                                <p
                                    className="text-small text-primary hover:cursor-pointer "
                                    onClick={handleSignIn}
                                >
                                    Existing User? Log In
                                </p>
                            </CardBody>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    );
}