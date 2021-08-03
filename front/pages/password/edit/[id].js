import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Nav } from "../../components/sidebar";
import Swal from 'sweetalert2'
import { Navbar } from "../../components/navbar";
import styles from "../../../styles/Home.module.css";
import {
  CreateDiv,
  SubmitButton,
  InputFormPassword,
  DivInputContainer,
  ContainerForm,
} from "./create.styled";
import { parseCookies } from "../../../helpers/parse-cookies";
import withAuth from "../../middlewares/authMiddleware";

const Details = (props) => {
  const router = useRouter();
  const routerId = router.query.id;
  const [form, setForm] = useState({});
  const getPasswordInfo = async (id) => {
    const res = await fetch(`http://localhost:3333/api/password/${id}`, {
      method: "get",
      mode: 'cors',
      headers: {
        "x-access-token":props.token,
        "Content-Type":
          "application/json"
      },
    });
    if(res.status !== 200){
      return handleAlert(
        'Tivemos um problema...',
        'Não encontramos os dados desse registro internamente, tente novamente mais tarde',
        'error',
        '/password/list'
      )
    }
    return res.json();
  };

  const handleAlert = (title,body,icon,redirect) =>{
    return Swal.fire(
      title,
      body,
      icon
    ).then(()=>{
      return router.push(redirect)
    })
  }


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const rawResponse = await fetch(`http://localhost:3333/api/password/${routerId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token':props.token
      },
      body: JSON.stringify(form)
    });
  
    if(rawResponse.status === 200){
      return handleAlert(
        'Edição concluida!',
        'A atualização dos dados foi executada com sucesso =)',
        'success',
        '/password/list'
      )
    }

    return handleAlert(
      'Tivemos um problema...',
      'A atualização dos seus dados não pode ser concluida, tente novamente mais tarde',
      'error',
      '/password/list'
    )
  }

  useEffect(async () => {
    if(routerId){
      const info = await getPasswordInfo(routerId);
      setForm(info.result);
    }
  }, [routerId]);

  return (
    <div className={styles.containergrid}>
      <Navbar />
      <Nav page="create" className={styles.conteudo} />

      <div className={styles.subheader}>
        <font className={styles.title}>Editar senha</font>
      </div>
      <div className={styles.conteudo}>
        <CreateDiv>
          <ContainerForm>
            <form onSubmit={handleSubmit}>
              <div>
                <h4>Editar senha</h4>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    value={form.name || ""}
                    placeholder="Nome da senha"
                  />
                </DivInputContainer>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    type="text"
                    value={form.description || ""}
                    placeholder="Descrição curta"
                  />
                  <div className={styles.inputIcon}></div>
                </DivInputContainer>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    type="password"
                    value={form.password || ""}
                    placeholder="Senha"
                  />
                </DivInputContainer>
              </div>
              <SubmitButton
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Enviar
              </SubmitButton>
            </form>
          </ContainerForm>
        </CreateDiv>
      </div>
    </div>
  );
};
Details.getInitialProps = ({req})=> {
  const data = parseCookies(req)
  return {props: {token: data.token ? JSON.parse(data.token) : ''}};
}
export default withAuth(Details);
