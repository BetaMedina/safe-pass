import { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie"

import Swal from 'sweetalert2'

function SignIn() {
  const [form, setForm] = useState({});
  const [_, setCookie] = useCookies(["token"])

  const router = useRouter();

  const handleAlert = (title,body,icon,redirect) =>{
    return Swal.fire(
      title,
      body,
      icon
    ).then(()=>{
      if(redirect) return router.push(redirect)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    const response = await fetch(`http://localhost:3333/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    if(response.status !== 200){
      return handleAlert(
        'Dados invalidos !',
        'Não conseguimos encontrar os dados com as informações dadas, tente novamente',
        'error'
      )
    }
    const payloadSuccess = await response.json()
    setCookie("token", JSON.stringify(payloadSuccess.token), {
      path: "/",
      maxAge: 28800, 
      sameSite: true,
    })
    return handleAlert(
      'Sucesso',
      'Olá, como vai você? Estamos lhe redirecionando... aguarde um momento',
      'success',
      "/password/list"
    )
  }


  return (
    <div id="formAuthDiv" className="align">
      <div className="login">
        <header className="login__header">
          <h2 className="h2AuthForm">Login</h2>
        </header>

        <form action="#" onSubmit={handleSubmit} className="login__form" method="POST">
          <div>
            <label htmlFor="email">E-mail </label>
            <input
              onChange={e=>setForm({...form,email:e.target.value})}
              value={form.email || ''}
              className="inputForm"
              type="email"
              id="email"
              name="email"
              placeholder="mail@address.com"
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              className="inputForm"
              onChange={e=>setForm({...form,password:e.target.value})}
              value={form.password || ''}
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>

          <div>
            <input
              className="inputForm"
              className="button"
              type="submit"
              value="Logar"
            />
          </div>
            <p >Não tem login? <a className="signUp" onClick={()=>router.push("/signup")}>Cadastre-se</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
