import React from "react";
import {Card, CardHeader, Button} from "@nextui-org/react";
import { useRouter } from "next/router";
export default function App() {

  const router=useRouter();
  return (

    <div  className="flex justify-center" style={{display: 'flex', flexDirection: 'column', gap: '20px', transform: 'translate(75px, 50px)' }}>
    
    <Card className="w-[1400px] h-[500px]" style={{ padding: '20px', backgroundColor:'#87cefa'}}>
    <h1 style={{ fontWeight: 'bold', fontSize: '24px', marginTop:'1px',marginBottom: '10px' , marginLeft:'550px' }}>Doctors in Trustcare</h1>
    <div style={{ display: 'flex', gap: '20px' }}>
    <Card className="w-[250px]" style={{height:"140px"}}>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md" style={{fontWeight: 'bold'}}>1. Anvay Mulay</p>
          <p style={{marginTop: "10px"}}>Cardiac Surgeon</p>
          <p style={{marginTop:"10px"}}>anvaymulay@gmail.com</p>
        </div>
      </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>2. Vinod Choudhari</p>
        
        <p style={{marginTop: "10px"}}>Radiologist</p>
        <p style={{marginTop:"10px"}}>vchaoudhari@gmail.com</p>
    </div>
    </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>3. Milind Kulkarni</p>
        
        <p style={{marginTop: "10px"}}>General Physician</p>
        <p style={{marginTop:"10px"}}>milindkulkarni@gmail.com</p>
    </div>
    </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>4. Bharat Pujari</p>
        
        <p style={{marginTop: "10px"}}>Opthalmalogist</p>
        <p style={{marginTop:"10px"}}>bpujari@gmail.com</p>
    </div>
    </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>5. Narendra Vaidya</p>
        
        <p style={{marginTop: "10px"}}>Orthopaedic Surgeon</p>
        <p style={{marginTop:"10px"}}>narendravaidya@gmail.com</p>
    </div>
    </CardHeader>
    </Card>
    </div>


    <div style={{ display: 'flex', gap: '20px', marginTop: '30px'}}>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>6. Sandeep Karmarkar</p>
        
        <p style={{marginTop: "10px"}}>ENT Surgeon</p>
        <p style={{marginTop:"10px"}}>skarmarkar@gmail.com</p>
    </div>
    </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>7. Bharat Dalvi</p>
        
        <p style={{marginTop: "10px"}}>Pediatric Cardialogist</p>
        <p style={{marginTop:"10px"}}>bharatdalvi143@gmail.com</p>
    </div>
    </CardHeader>
    </Card>

    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>8. Rajas Deshpande</p>
        
        <p style={{marginTop: "10px"}}>Neurologist</p>
        <p style={{marginTop:"10px"}}>deshpanderajas221@gmail.com</p>
    </div>
    </CardHeader>
    </Card>


    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>9. Sanjay Joshi</p>
        
        <p style={{marginTop: "10px"}}>Cosmetic Surgeon</p>
        <p style={{marginTop:"10px"}}>sjoshi1711@gmail.com</p>
    </div>
    </CardHeader>
    </Card>


    <Card className="w-[250px]" style={{height:"150px"}}>
    <CardHeader className="flex gap-3">
    <div className="flex flex-col">
        <p className="text-md" style={{fontWeight: 'bold'}}>10. Ajay Deshmukh</p>
        
        <p style={{marginTop: "10px"}}>Surgical Oncologist</p>
        <p style={{marginTop:"10px"}}>ajaysdeshmukh91@gmail.com</p>
    </div>
    </CardHeader>
    </Card>
</div>
<div style={{transform:'translate(600px, 10px)',marginTop:"30px"}}>
<Button className="w-[140px]" color="primary" variant="shadow" onClick={() => router.push('/appointment')}>
      <p className="text-white">Book an appointment</p>
    </Button>

    </div>

    </Card>
</div>

  );
}
