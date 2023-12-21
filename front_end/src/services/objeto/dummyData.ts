import { DummyCategorias } from "../categoria/dummyData";
import { DummyCores } from "../cor/dummyData";
import { DummyLocais } from "../local/dummyLocal";
import { DummyPisos } from "../piso/dummyData";
import { DummySubLocais } from "../subLocal/dummyData";
import { DummyUsuarios } from "../usuario/dummyData";
import { IObjeto } from "./interface";

export const DummyObjetosMatch: IObjeto[] = [
  {
    id: 0,
    descricao: 'Garrafinha "Brilhe hoje" perdida no CB',
    deletado: false,
    recuperado: false,
    porcentagem: "90%",

    idCategoria: 2,
    categoria: DummyCategorias.find((c) => c.id === 2),

    idCor: 4,
    cor: DummyCores.find((c) => c.id === 4),

    idLocal: 0,
    local: DummyLocais.find((l) => l.id === 0),

    idPiso: 0,
    piso: DummyPisos.find((p) => p.id === 0),

    idSublocal: 1,
    sublocal: DummySubLocais.find((c) => c.id === 1),

    idUsuario: 0,
    usuario: DummyUsuarios.find((u) => u.id === 0),
  },
  {
    id: 1,
    descricao: "Garrafa de água rosa",
    deletado: false,
    recuperado: false,
    porcentagem: "83%",

    idCategoria: 2,
    categoria: DummyCategorias.find((c) => c.id === 2),

    idCor: 1,
    cor: DummyCores.find((c) => c.id === 1),

    idLocal: 3,
    local: DummyLocais.find((l) => l.id === 3),

    idPiso: 1,
    piso: DummyPisos.find((p) => p.id === 1),

    idSublocal: 2,
    sublocal: DummySubLocais.find((c) => c.id === 2),

    idUsuario: 2,
    usuario: DummyUsuarios.find((u) => u.id === 2),
  },
  {
    id: 2,
    descricao: "Squezee do DASI",
    deletado: false,
    recuperado: false,
    porcentagem: "73%",

    idCategoria: 2,
    categoria: DummyCategorias.find((c) => c.id === 2),

    idCor: 7,
    cor: DummyCores.find((c) => c.id === 7),

    idLocal: 0,
    local: DummyLocais.find((l) => l.id === 0),

    idPiso: 3,
    piso: DummyPisos.find((p) => p.id === 3),

    idSublocal: 0,
    sublocal: DummySubLocais.find((c) => c.id === 0),

    idUsuario: 1,
    usuario: DummyUsuarios.find((u) => u.id === 1),
  },
];

export const DummyObjetosMural: IObjeto[] = [
  {
    id: 0,
    descricao: "Perdi minha garrafinha no intervalo do CB :c",
    deletado: false,
    recuperado: false,
    porcentagem: "90%",

    idCategoria: 2,
    categoria: DummyCategorias.find((c) => c.id === 2),

    idCor: 7,
    cor: DummyCores.find((c) => c.id === 7),

    idLocal: 0,
    local: DummyLocais.find((l) => l.id === 0),

    idPiso: 0,
    piso: DummyPisos.find((p) => p.id === 0),

    idSublocal: 1,
    sublocal: DummySubLocais.find((c) => c.id === 1),

    idUsuario: 0,
    usuario: DummyUsuarios.find((u) => u.id === 0),
  },
  {
    id: 0,
    descricao: "Perdi meu notebook Dell com mouse, por favor avisar",
    deletado: false,
    recuperado: false,
    porcentagem: "55%",

    idCategoria: 1,
    categoria: DummyCategorias.find((c) => c.id === 1),

    idCor: 2,
    cor: DummyCores.find((c) => c.id === 2),

    idLocal: 1,
    local: DummyLocais.find((l) => l.id === 1),

    idPiso: 3,
    piso: DummyPisos.find((p) => p.id === 3),

    idSublocal: 0,
    sublocal: DummySubLocais.find((c) => c.id === 0),

    idUsuario: 0,
    usuario: DummyUsuarios.find((u) => u.id === 0),
  },
  {
    id: 1,
    descricao: "Camiseta do DASI perdida na quadra da EACH",
    deletado: false,
    recuperado: false,
    porcentagem: "55%",

    idCategoria: 0,
    categoria: DummyCategorias.find((c) => c.id === 0),

    idCor: 7,
    cor: DummyCores.find((c) => c.id === 7),

    idLocal: 3,
    local: DummyLocais.find((l) => l.id === 3),

    idPiso: 4,
    piso: DummyPisos.find((p) => p.id === 4),

    idSublocal: 3,
    sublocal: DummySubLocais.find((c) => c.id === 3),

    idUsuario: 1,
    usuario: DummyUsuarios.find((u) => u.id === 1),
  },
  {
    id: 2,
    descricao: "Socorro! Perdi minha caneca da Glow... :c",
    deletado: false,
    recuperado: false,
    porcentagem: "55%",

    idCategoria: 2,
    categoria: DummyCategorias.find((c) => c.id === 2),

    idCor: 4,
    cor: DummyCores.find((c) => c.id === 4),

    idLocal: 0,
    local: DummyLocais.find((l) => l.id === 0),

    idPiso: 1,
    piso: DummyPisos.find((p) => p.id === 1),

    idSublocal: 3,
    sublocal: DummySubLocais.find((c) => c.id === 3),

    idUsuario: 2,
    usuario: DummyUsuarios.find((u) => u.id === 2),
  },
];
