import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Shakil'}></Cousin>
                <Cousin name={'Lavly'}></Cousin>
                <Cousin name={'Dazi'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;