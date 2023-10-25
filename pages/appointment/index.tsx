import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { ApiService } from "@/config/api/ApiService";
    
interface FormData{
    p_id: string;
    d_id: string;
    a_date: string;
    a_time: string;
    description: string;
    p_contact:string;
    apiName: string;
    
}
const initialState: FormData={
    p_id:"",
    d_id: "",
    a_date:"",
    a_time:"",
    description:"",
    p_contact:"",
    apiName:"appointment"


}
export default function App() {
    const [serverData,setSeverData]=useState(null);
    const [formData, setFormData] = useState<FormData>(initialState);
    const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    ApiService.post(`appointment/${formData.p_contact}`, formData)
    .then((res) => {
        console.log(res);
        setSeverData(res.data);
    
})}
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen">
        <Card className="w-[800px] h-[600px]" style={{backgroundColor:'#87cefa'}}>
        <CardHeader className="flex justify-center">
            <p className="text-lg">Book an Appointment</p>
        </CardHeader>
        
        <form onSubmit={handleFormSubmit}>
        <CardBody>
        <div className="w-full flex flex-col gap-6 justify-center">
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input 
                size="md" 
                type="id" 
                label="Patient ID" 
                name="p_id"
                value={formData.p_id}
                onChange={handleInputChange} />
                
            </div>
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input 
                size="md" 
                type="id" 
                label="Doctor ID" 
                name="d_id" 
                value={formData.d_id}
                onChange={handleInputChange}/>
            <Input 
                size="md" 
                type = "text" 
                label="Appointment date" 
                name="a_date"
                placeholder="yyyy-mm-dd"
                value={formData.a_date}
                onChange={handleInputChange} />

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
                
            </div>
            <div  key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input  
                size="md" 
                type="text" 
                label="Appointment Time" 
                name="a_time"
                placeholder="hh-mm"
                value={formData.a_time}
                onChange={handleInputChange}/>
            </div>
            
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input  
                size="md" 
                type="text" 
                label="Description" 
                name="description"
                value={formData.description}
                onChange={handleInputChange}/>
            </div>
            
            <div className="flex justify-center">
            <Button className="w-[135px]" color="primary" variant="shadow" type="submit">
                    <p className="text-white">Submit Record</p>
            </Button>
            
            </div>
            {serverData &&(
                <div>
                <h2>Sever Response</h2>
                <pre>{JSON.stringify(serverData,null,2)}</pre>
                </div>

            )}
            
        </div>
        </CardBody>
        </form>
      
        </Card>
        
    </div>  
    </div>
  );
}