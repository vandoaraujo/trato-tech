import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill,
  Badge
} from 'react-icons/ri';
import Busca from '../Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const quantidadeCarrinho = useSelector(state => state.carrinho);
  console.log(quantidadeCarrinho)
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
        {quantidadeCarrinho.length >= 1
          ? <span className={styles.itemNoCarrinho}>{String(quantidadeCarrinho.length)}</span>
          : <span></span>
        }
      </div>
    </nav>
  )
}