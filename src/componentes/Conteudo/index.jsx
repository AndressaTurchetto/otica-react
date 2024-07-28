import Banner from '../Banner';
import Sobre from '../Sobre';
import Produtos from '../Produtos';
import Contato from '../Contato';

export default function Conteudo() {
  return (
    <main>
      <Banner />
      <Produtos />
      <Sobre />
      <Contato />
    </main>
  )
}