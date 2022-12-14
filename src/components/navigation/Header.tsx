import { Link } from 'react-router-dom'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import { css } from '@emotion/css'
import { theme } from '../../theme'
import { urls } from '../../urls'
import { useRef, useState } from 'react'
import burger from './burger.png'
import close from './close.png'

const styles = {
  navContainerStyle: css`
    position: relative;
    z-index: 0;
    display: flex;
    height: 100%;
    max-width: 1600px;
    padding-right: 96px;
    padding-left: 96px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-bix-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex: 1;
    margin-left: auto;
    margin-right: auto;
    background-color: ${theme.colors.white};
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      padding: 0 0px;
    }
  `,
  logoWrapperStyle: css`
    flex: 1;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `,
  logoHrefStyle: css`
    position: relative;
    float: left;
    text-decoration: none;
    margin-left: 2%;
    color: ${theme.colors.black};
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin-left: 30px;
    }
  `,
  iconContainer: css`
    position: relative;
    right: 0%;
    cursor: pointer;
    display: none;
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: flex;
    }
  `,
  navSticky: css`
    position: sticky;
    top: 0;
    z-index: 999;
    width: 103%;
    margin-left: -2%;
    background-color: ${theme.colors.white};
  `,
}
export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav className={styles.navSticky}>
      <div className={styles.navContainerStyle}>
        <div className={styles.logoWrapperStyle}>
          <Link className={styles.logoHrefStyle} to={urls.root} aria-label='Logo'>
            <h2>M|N</h2>
          </Link>
        </div>
        <MobileNavigation />
        <Navigation />
      </div>
    </nav>
  )
}
