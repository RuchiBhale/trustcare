import { useState } from "react";
//import Navbar from "@/components/navbar";
import { ApiService } from "@/config/api/ApiService";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Image,
    Input
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface FormData {
    p_name: string;
    password: string;
    p_email:string;
    p_contact: string;
    address: string;
    gender: string;
    dob: string;
    reenterPassword: string;
    apiName: string;
}

const initialState: FormData = {
    password: "",
    p_contact: "",
    p_name: "",
    p_email:"",
    dob:"",
    gender: "",
    address: "",
    reenterPassword: "",
    apiName: "login",
};

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<FormData>(initialState);
    const [serverData,setSeverData]=useState(null);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const router = useRouter();

    const handleSignIn = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            console.log(formData);
            ApiService.post(`patient/login`, formData)
            .then((res) => {
                console.log(res);
                setSeverData(res.data);
                setTimeout(()=>{
                    router.replace("/doctors");
                    
                },3000)
                // setItem("authToken", res.data.authToken);
                
            });
        } else {
            if (formData.password === formData.reenterPassword) {
                setPasswordMismatch(false);
                if (isValidEmail(formData.p_email)) {
                    setInvalidEmail(false);
                    console.log(formData);
                    ApiService.post(`patient/${formData.p_contact}`, formData)
                    .then((res) => {
                        console.log(res);
                        setSeverData(res.data);
                        setTimeout(()=>{
                            router.replace("/doctors");
                            
                        },3000)
                        // setItem("authToken", res.data.authToken);
                        
                    });
                  
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
            <div className="flex h-[95vh] items-center justify-center pt-10">
                <Card className="w-[550px]" style={{backgroundColor:'#87cefa'}}>
                    <CardHeader className="flex flex-col gap-3 pt-10">
                        <Image
                            alt="nextui logo"
                            height={45}
                            radius="full"
                            src="https://w7.pngwing.com/pngs/83/15/png-transparent-logo-health-care-medicine-hospital-automotive-battery-emblem-logo-first-aid-supplies-thumbnail.png"
                            width={45}
                        />
                        <div className="flex flex-col text-center">
                            <p className="text-md" style={{fontWeight:'bold'}}>TrustCare</p>
                            <p className="text-small text-default-500"style={{color:"black"}} >
                                {isLogin ? "Login" : "Sign Up"}
                            </p>
                        </div>
                    </CardHeader>

                    <form onSubmit={handleFormSubmit}>
                        {isLogin ? (
                            <CardBody className="items-center flex flex-col gap-3">
                                <Input
                                    type="phone"
                                    label="Phone"
                                    className="w-[300px]"
                                    name="p_contact"
                                    value={
                                        formData.p_contact == ""
                                            ? ""
                                            : formData.p_contact.toString()
                                    }
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
                                <Button color="primary" type="submit" onClick={handleFormSubmit}>
                                    <p className="text-white">Sign In</p>
                                </Button>
                                {serverData &&(
                                    <div>
                                        <h2>Sever Response</h2>
                                        <pre>{JSON.stringify(serverData,null,2)}</pre>
                                    </div>

                                )}
                                <Link href="/">
                                    <p className="text-small text-default-500" style={{color:"black"}}>

                                        Forgot password?
                                    </p>
                                </Link>
                                <p
                                    className="text-small text-primary hover:cursor-pointer"
                                    style={{color:"black"}}
                                    onClick={handleSignIn}
                                >
                                    New User? Sign Up
                                </p>
                            </CardBody>
                        ) : (
                            <CardBody className="items-center flex flex-col gap-3">
                                <Input
                                    type="text"
                                    label="Patient Name"
                                    className="w-[300px]"
                                    name="p_name"
                                    value={formData.p_name}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="Address"
                                    className="w-[300px]"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="Gender"
                                    className="w-[300px]"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="Date of Birth"
                                    placeholder="(yyyy-mm-dd)"
                                    className="w-[300px]"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="email"
                                    label="Email"
                                    className="w-[300px]"
                                    name="p_email"
                                    value={formData.p_email}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="text"
                                    label="Contact No"
                                    className="w-[300px]"
                                    name="p_contact"
                                    value={formData.p_contact}
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
                                <Button color="primary" onClick={handleFormSubmit}type="submit">
                                    <p className="text-white">Sign Up</p>
                                </Button>
                                {serverData &&(
                                    <div>
                                        <h2>Sever Response</h2>
                                        <pre>{JSON.stringify(serverData,null,2)}</pre>
                                    </div>

                                )}
                                <Link href="/">
                                    <p className="text-small text-default-500" style={{color:"black"}}>
                                        Forgot password?
                                    </p>
                                </Link>
                                <p
                                    className="text-small text-primary hover:cursor-pointer "
                                    style={{color:"black"}}
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