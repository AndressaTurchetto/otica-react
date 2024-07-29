import estilos from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer>
      <div className={estilos.rodape}>
        <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}