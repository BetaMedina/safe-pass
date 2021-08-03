import { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie"

import Swal from 'sweetalert2'

function SignUp() {
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
    const response = await fetch(`http://localhost:3333/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    if(response.status !== 200){
      return handleAlert(
        'Dados invalidos !',
        'Não conseguimos cadastrar com esses dados, tente novamente',
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
      'Usuario cadastrado com sucesso, realize login para iniciar!',
      'success',
      "/"
    )
  }


  return (
    <div id="formAuthDiv" className="align">
      <div className="login">
        <header className="login__header">
          <h2 className="h2AuthForm">Cadastrar</h2>
        </header>

        <form action="#" onSubmit={handleSubmit} className="login__form" method="POST">
          <div>
            <label htmlFor="email">Nome</label>
            <input
              onChange={e=>setForm({...form,name:e.target.value})}
              value={form.name || ''}
              className="inputForm"
              id="name"
              name="name"
              placeholder="Jonh Doe"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
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
              value="Cadastrar"
            />
          </div>
            <p>Quero fazer <a className="signUp" onClick={()=>router.push("/")}>login!</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
