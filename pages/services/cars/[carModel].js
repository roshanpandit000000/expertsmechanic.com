import { useRouter } from "next/router";
import React from "react";

const carModel = () => {
  const router = useRouter();
  const { carModel } = router.query;
  return <div>i am a {carModel}</div>;
};

export default carModel;
