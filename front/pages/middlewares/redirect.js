// import { useState } from "react";
import {useEffect} from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2"

export function Redirect(props) {
  const router = useRouter();
  
  useEffect(()=>{
    Swal.fire(
      props.title,
      props.description,
      props.icon
    ).then(()=>{
      return router.push(props.url)
    })
  })

  return (
    <>
    </>
  );
}
