import React from 'react'
import './Main.css'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div className='main'>
      {/* Artistas Populares */}
      <div className='item-list'>
            <div className='item-list__header'>
            <h2>Artistas populares</h2>
            <a className='item-list_link' href="/">Mostrar tudo</a>
        </div>

        <div className='item-list__container'>
          <div className='single-item'>
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
              </div>
            </div>
            
              {/*<faFontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />*/}
              <div className='single-item__texts'>
                <p className='single-item_title'>Henrique & Juliano</p>
                <p className='single-item__type'>Artista</p>
              </div>
          </div>      

            <div className='single-item'>
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
              </div>
            </div>
            
              {/*<faFontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />*/}
              <div className='single-item__texts'>
                <p className='single-item_title'>Henrique & Juliano</p>
                <p className='single-item__type'>Artista</p>
              </div>
          </div>
          
        </div>
      </div>

      {/* Músicas populares */}
      <div className='item-list'>
            <div className='item-list__header'>
            <h2>Músicas populares</h2>
            <a className='item-list_link' href="/">Mostrar tudo</a>
        </div>

        <div className='item-list__container'>
          <div className='single-item'>
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
              </div>
            </div>
            
              {/*<faFontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />*/}
              <div className='single-item__texts'>
                <p className='single-item_title'>Henrique & Juliano</p>
                <p className='single-item__type'>Artista</p>
              </div>
          </div>      

            <div className='single-item'>
            <div className='single-item__div-image-button'>
              <div className='single-item__div-image'>
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
              </div>
            </div>
            
              {/*<faFontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />*/}
              <div className='single-item__texts'>
                <p className='single-item_title'>Henrique & Juliano</p>
                <p className='single-item__type'>Artista</p>
              </div>
          </div>
          
        </div>

        

      </div>
    </div>
  )
}
import './Main.css'
export default Main
