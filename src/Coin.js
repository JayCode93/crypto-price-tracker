import React from 'react';
import './Coin.scss';

const Coin = ({image, name, symbol, price, volume, marketCap, priceChange}) => {

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol.toUpperCase()}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>£{price.toLocaleString()}</p>
                    <p className='coin-volume'>£{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                    <p className='coin-marketcap'>£{marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
