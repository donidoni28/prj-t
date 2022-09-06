import React, { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import useData from "../Hooks/useData";
const GlobContext = createContext();

const GlobProvider = ({ children }) => {
    let [data, dist, error, loading] = useData()
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(1);
    const happyBirthday = () => setAge(age + 1);

    return (
        loading ? (
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        ) : (
            // <GlobContext.Provider value={{ name, age, happyBirthday }}>
            <GlobContext.Provider value={{ data: data, dist: dist }}>
                {children}
            </GlobContext.Provider>

        )
    );

};

const withGlob = (Child) => (props) => (
    <GlobContext.Consumer>
        {(context) => <Child {...props} {...context} />}
        {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </GlobContext.Consumer>
);
export { GlobProvider, withGlob };
