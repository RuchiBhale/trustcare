import { ApiService } from "@/config/api/ApiService";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input
} from "@nextui-org/react";
import { useState } from "react";

    
interface FormData{
    d_id: string;
    p_id: string;
    dov: string;
    prescription: string;
    diagnosis: string;
    apiName: string;
}
const initialState: FormData={
    d_id:"",
    p_id: "",
    dov:"",
    prescription:"",
    diagnosis:"",
    apiName:"medicalrecords"


}
export default function App() {
const [serverData,setSeverData]=useState(null);
  const [formData, setFormData] = useState<FormData>(initialState);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    ApiService.post(`medicalrecords/${formData.d_id}`, formData)
    .then((res) => {
        console.log(res);
        setSeverData(res.data);
                    });
}
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen" style={{marginTop:"5px"}}>
        <Card className="w-[700px] h-[600px]" style={{backgroundColor:'#87cefa'}}>
        <CardHeader className="flex justify-center">
            <p className="text-lg">Doctor Record Upload</p>
        </CardHeader>
        
        <form onSubmit={handleFormSubmit}>
        <CardBody>
        <div className="w-full flex flex-col gap-6 justify-center">
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input 
                size="md" 
                type="Doctor_ID" 
                label="Doctor ID" 
                name="d_id"
                value={formData.d_id}
                onChange={handleInputChange} />
                
            </div>
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input 
                size="md" 
                type="id" 
                label="Patient ID" 
                name="p_id" 
                value={formData.p_id}
                onChange={handleInputChange}/>
            <Input 
                size="md" 
                type = "text" 
                label="Date of Visit" 
                name="dov"
                placeholder="yyyy-mm-dd"
                value={formData.dov}
                onChange={handleInputChange} />
                
            </div>
            <div  key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input  
                size="md" 
                type="text" 
                label="Prescription" 
                name="prescription"
                value={formData.prescription}
                onChange={handleInputChange}/>
            </div>
            
            <div key="md" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input  
                size="md" 
                type="text" 
                label="Diagnosis" 
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleInputChange}/>
            </div>
            
            <div className="flex justify-center">
            <Button className="w-[135px]" color="primary" variant="shadow" type="submit" onClick={handleFormSubmit}>
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