import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const StatList = ({vaults}) => {
    const { colorTheme } = useContext(ThemeContext);
    
    return (
        <section className="py-8">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {vaults && vaults.map((vault) => (
                        <div className="w-full sm:w-1/2 p-4" key={vault.key}>
                            <div className="p-6 text-center bg-white dark:bg-gray-800 rounded shadow">
                                <span className="inline-block mx-auto">
                                <svg width="28" height="28" viewBox={vault.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={vault.path} fill={(colorTheme === 'dark') ? "#fff" : "#8128DE"}></path>
                                </svg>
                                </span>
                                <h3 className="mt-3 mb-1 text-3xl font-bold dark:text-white">{vault.count}</h3>
                                <p className="text-sm text-gray-600 dark:text-blue-100 font-medium capitalize">{vault.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatList