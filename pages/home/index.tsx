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

export default function App() {
  return (
    <div className="flex h-[80vh] items-center justify-center pt-10">
    <Card className="w-[400px]">
    <CardHeader className="flex flex-col gap-3 pt-10">
    <div className="flex item-center">
    <Button color="primary">
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
