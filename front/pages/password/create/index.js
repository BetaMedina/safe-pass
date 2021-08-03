import {useState} from "react"
import { Nav } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";
import styles from "../../../styles/Home.module.css";
import { CreateDiv, SubmitButton, InputFormPassword,DivInputContainer,ContainerForm } from "./create.styled";
import { parseCookies } from "../../../helpers/parse-cookies";
import Swal from 'sweetalert2'
import { useRouter } from "next/router";


function CreatePassword({props}) {
  const [form,setForm] = useState({})
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


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const rawResponse = await fetch('http://localhost:3333/api/password', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token':props.token
      },
      body: JSON.stringify(form)
    });
    if(rawResponse.status !== 200){
      return handleAlert(
        'Ops... Ocorreu um erro!',
        'Não conseguimos processar sua solicitação no momento, poderia tentar novamente mais tarde?',
        'error'
      )
    }
    return handleAlert(
      'Senha salva!',
      'Sua senha foi salva com sucesso em nosso serviço',
      'success',
      '/password/list'
    )
  }

  return (
    <div className={styles.containergrid}>
      <Navbar />
      <Nav page="create" className={styles.conteudo} />

      <div className={styles.subheader}>
        <font className={styles.title}>Cadastrar senhas</font>
      </div>
      <div className={styles.conteudo}>
        <CreateDiv>
          <ContainerForm>
            <form onSubmit={handleSubmit}>
              <div>
                <h4>Cadastrar senha</h4>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e)=>setForm({...form,name:e.target.value})}
                    type="text"
                    placeholder="Nome da senha"
                  />
                </DivInputContainer>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e)=>setForm({...form,description:e.target.value})}
                    type="text"
                    placeholder="Descrição curta"
                  />
                  <div className={styles.inputIcon}>
                  </div>
                </DivInputContainer>
                <DivInputContainer>
                  <InputFormPassword
                    onChange={(e)=>setForm({...form,password:e.target.value})}
                    type="password"
                    placeholder="Senha"
                  />
                </DivInputContainer>
              </div>
              <SubmitButton name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</SubmitButton>
            </form>
          </ContainerForm>
        </CreateDiv>
      </div>
    </div>
  );
}
CreatePassword.getInitialProps = ({req})=> {
  const data = parseCookies(req)
  return {props: {token: data.token ? JSON.parse(data.token) : ''}};
}
export default CreatePassword;
