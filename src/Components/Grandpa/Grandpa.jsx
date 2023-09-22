import { createContext, useContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import Dad from "../dad/dad";
import './Grandpa.css';

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney]=useState(1000)
    return (
        <div className="grandpa">
            <div>
                <h1>Grandpa</h1>
                <p>Grandpa: {money}</p>
                <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty asset={asset}></Aunty>
                    </section>
                </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;