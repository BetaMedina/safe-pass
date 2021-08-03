import { CardComponent } from "../../components/card";
import styles from "../../../styles/Home.module.css";
import { Nav } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";
import { CardDiv } from "./list.styled";
import withAuth from "../../middlewares/authMiddleware";
import { useEffect, useState } from "react";
import { parseCookies } from "../../../helpers/parse-cookies"
import Swal from 'sweetalert2'

function Home( props ) {
  const [data, setData] = useState([]);
  const handleCards = async () => {
    const res = await fetch(`http://localhost:3333/api/passwords`, {
      method: "GET",
      mode: "cors",
      headers: {
        "x-access-token":props.token,
        "Content-Type": "application/json",
      },
    });
    const passwords = await res.json();
    if (res.status === 200) {
      setData(passwords.result);
    }
  };

  useEffect(() => {
    handleCards()
  }, []);

  return (
    <div className={styles.containergrid}>
      <Navbar />
      <Nav page="list" className={styles.conteudo} />

      <div className={styles.subheader}>
        <font className={styles.title}>Senhas</font>
      </div>
      <div className={styles.conteudo}>
        <CardDiv>
          {data.map((res, ind) => (
            <CardComponent
              key={res.id}
              id={res.id}
              className={ind}
              title={res.name}
              password={res.password}
              describe={res.description}
              createdAt={new Date(res.updated_at).toLocaleDateString("pt-BR")}
            />
          ))}
        </CardDiv>
      </div>
    </div>
  );
}
Home.getInitialProps = ({req})=> {
  const data = parseCookies(req)
  return {props: {token: data.token ? JSON.parse(data.token) : ''}};
}
export default withAuth(Home);
