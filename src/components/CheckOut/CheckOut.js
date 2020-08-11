import React, { useState } from "react";

const CheckOut = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const country = 'Polska';
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [inPostNum, setInPostNum] = useState();
    const value = props.value;
    const [delivVal, setDelivVal] = useState();
    const cart = props.cart;
    const discountActive = props.discountActive;

    const checkVal = (val) => {
        if (val && discountActive) {
            if ((val - (val * discountActive)).toString().indexOf('.') !== -1) {
                return (val - (val * discountActive)).toFixed(2).toString().replace('.', ',')
            }
            return `${(val - (val * discountActive))},00`
        }
        else if (val) {
            if (val.toString().indexOf('.') !== -1) {
                return val.toFixed(2).toString().replace('.', ',')
            }
            return `${val},00`
        }
        return val
    }

    const check = (val) => {
        if (val) {
            if (val.toString().indexOf('.') !== -1) {
                return val.toFixed(2).toString().replace('.', ',')
            }
            return `${val},00`
        }
        return val
    }

    const checkAll = (val, deliv) => {
        if (val && discountActive) {
            if (((val - (val * discountActive)) + deliv).toString().indexOf('.') !== -1) {
                return ((val - (val * discountActive)) + deliv).toFixed(2).toString().replace('.', ',')
            }
            return `${((val - (val * discountActive)) + deliv)},00`
        }
        else if (val) {
            if ((val + deliv).toString().indexOf('.') !== -1) {
                return (val + deliv).toFixed(2).toString().replace('.', ',')
            }
            return `${(val + deliv)},00`
        }
        return (val + deliv)
    }

    return (
        <div className='checkOut'>
            <form className='details' action="mailto:apidrogeria@gmail.com" method="post">
                <div className='first'>Dane adresowe</div>
                <input type='text'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder='Imię i nazwisko' />
                <input type='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder='e-mail' />
                <input type='text'
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       placeholder='Adres' />
                <input type='number'
                       value={zipCode}
                       onChange={(e) => setZipCode(e.target.value)}
                       placeholder='Kod pocztowy' />
                <input type='text'
                       value={city}
                       onChange={(e) => setCity(e.target.value)}
                       placeholder='Miasto'/>
                <input type='text'
                       defaultValue={country}
                       placeholder='Kraj'/>
                <input type='tel'
                       value={phoneNum}
                       onChange={(e) => setPhoneNum(e.target.value)}
                       pattern='[0-9]{3} [0-9]{3} [0-9]{3}'
                       placeholder='Nr telefonu komórkowego' />
                <div className='delivery'>
                    <label className='miniContainer'>Paczkomaty InPost ( + 12,00 zł )
                        <input type='radio' checked={check1} onChange={() => {setCheck1(true); setCheck2(false); setDelivVal(12)}} />
                        <span className='checkmark' />
                    </label>
                    {check1 ?
                        <div className='inpost'>
                            <a href='https://inpost.pl/znajdz-paczkomat'>Link do znalezienia paczkomatu</a>
                            <input type='text'
                                   value={inPostNum}
                                   onChange={(e) => setInPostNum(e.target.value)}
                                   placeholder='Kod Paczkomatu'/>
                        </div>
                    : ''}
                    <label className='miniContainer'>Kurier ( + 16,00 zł )
                        <input type='radio' checked={check2} onChange={() => {setCheck2(true); setCheck1(false); setDelivVal(16)}} />
                        <span className='checkmark' />
                    </label>
                </div>
            </form>
            <div className='detailsSide'>
                <div className='order'>
                    <div className='header'>Do zapłaty</div>
                    <div className='price first'>
                        <p>Wartość zamówienia</p>
                        <p>{checkVal(value)}zł</p>
                    </div>
                    <div className='price'>
                        <p>Koszt dostawy</p>
                        <p>{delivVal ? `${check(delivVal)}zł` : ''}</p>
                    </div>
                    <div className='price'>
                        <p>Do zapłaty</p>
                        <p>{delivVal ? `${checkAll(value, delivVal)}zł` : `${checkVal(value)}zł`}</p>
                    </div>
                </div>
                <button type='submit'>
                    <a href={`https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=119361&z24_nazwa=ZAMOWIENIE${Math.floor(Math.random() * 999999999999) + 1}&z24_crc=b55cff127970927e&z24_return_url=https://www.apidrogerie.com&z24_kwota=${discountActive ? ((value - (value * discountActive)) + delivVal) * 100 : (value + delivVal) * 100}&z24_opis=${cart.map(product => product.id + '-' + product.qty + '---')}INPOST${check1}---${inPostNum}---KURIER${check2}&k24_nazwa=${name}&k24_email=${email}&k24_kraj=pl&k24_kod=${zipCode}&k24_miasto=${city}&k24_ulica=${address}`}>Zapłać</a>
                </button>
            </div>
        </div>
    )
}

export default CheckOut;