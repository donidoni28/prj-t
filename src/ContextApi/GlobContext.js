import React, { createContext, useState } from "react";
const GlobContext = createContext();

const GlobProvider = ({ children }) => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(1);
    const happyBirthday = () => setAge(age + 1);
    return (
        <GlobContext.Provider value={{ name, age, happyBirthday }}>
            {children}
        </GlobContext.Provider>
    );

};

const withGlob = (Child) => (props) => (
    <GlobContext.Consumer>
        {(context) => <Child {...props} {...context} />}
        {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </GlobContext.Consumer>
);
export { GlobProvider, withGlob };
// WHAT CAN I BASICLY DO

// import React, { createContext, useState } from "react";
// const GlobContext = createContext();

// const GlobProvider = ({ children }) => {
//     const [name, setName] = useState("John Doe");
//     const [age, setAge] = useState(1);
//     const happyBirthday = () => setAge(age + 1);
//     return (
//         <GlobContext.Provider value={{ name, age, happyBirthday }}>
//             {children}
//         </GlobContext.Provider>
//     );

// };

// const withGlob = (Child) => (props) => (
//     <GlobContext.Consumer>
//         {(context) => <Child {...props} {...context} />}
//         {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//     </GlobContext.Consumer>
// );