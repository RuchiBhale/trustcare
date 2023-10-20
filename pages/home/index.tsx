import React from "react";
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

export default function App() {
  const router=useRouter();
  return (
    <div className="flex h-[80vh] items-center justify-center pt-10">
    <Card style={{height:"35%"}} className="w-[400px]">
    <CardHeader className="flex flex-col gap-3 pt-12">
    <div className="flex item-center">
    <Button color="primary" onClick={() => router.push('/login')}>
      Are you a Patient
    </Button>
    </div>
    </CardHeader>
    <div className="flex justify-center">
    <Button color="primary">
      Are you a Doctor
    </Button>
    </div>
    </Card>
    </div>
  );
}
