import { IUsuario } from "./interface";

export const DummyUsuarios: IUsuario[] = [
  {
    id: 0,
    nome: "Artur",
    nick: "art",
    biografia: "Muito feliz de poder estar aqui!",
    contato: "@artcupelli",

    idTipoContato: 0,
    tipoContato: { descricao: "Telegram", id: 0 },
  },
  {
    id: 1,
    nome: "Raquel",
    nick: "raqs",
    biografia: "Muito feliz de poder estar aqui!",
    contato: "Raquel Almeida",

    idTipoContato: 0,
    tipoContato: { descricao: "Facebook", id: 0 },
  },
  {
    id: 2,
    nome: "Milleny",
    nick: "mih",
    biografia: "Muito feliz de poder estar aqui!",
    contato: "(11) 9999-9999",

    idTipoContato: 0,
    tipoContato: { descricao: "Telefone", id: 0 },
  },
];
