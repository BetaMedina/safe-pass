import { useState } from "react";
import Link from 'next/link'
import { Card, DivPassword, DivDescription, DivCardFotter,TitleCard } from "./card.styled";
export function CardComponent({ title, describe, password, createdAt, id }) {
  const [showState, setShowPass] = useState(false);

  const showPass = (event) => setShowPass(!showState);
  return (
    <Card className="card">
      <TitleCard>{title}</TitleCard>
      <DivDescription>
        <p>{describe}</p>
      </DivDescription>
      <DivPassword>
        <p onClick={showPass}>
          {" "}
          {showState ? `Senha: ${password}` : "Clique para mostrar a senha"}
        </p>
      </DivPassword>
      <DivCardFotter>
        <font>{createdAt}</font>
        <Link href={`edit/${id}`}>editar</Link>
      </DivCardFotter>
    </Card>
  );
}
