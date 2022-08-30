import axios from "axios";
import { useContext, useState } from "react";
import { ThemeContext } from '../../context/ThemeContext';

const AddWebPassword = ({ user, addMenu, setData, toggleAddMenu }) => {
    const { colorTheme } = useContext(ThemeContext);
    // Add new password
    const [newPassword, setNewPassword] = useState({
        url: 'https://',
        username: '',
        email: '',
        password: '',
        notes: ''
    })
    const handleChange = (e) => {
        setNewPassword((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API}/webs/${user._id}`, newPassword)
        setData(newPassword)
    };

    // Generate random password
    const [rangeValue, setRangeValue] = useState(12)
    const handleChangeRangeValue = (e) => {
        setRangeValue(() => e.target.value);
    }
    const generateRandomPassword = async (e) => {
        e.preventDefault()
        const chk_boxs = document.querySelectorAll('input[type="checkbox"]')
        const x = Array.from(chk_boxs).map(box => {
            let value = 0
            if (box.checked) {
                value = Number(box.value)
            }
            return value
        }).reduce((a, b) => a + b)
        const rand = await axios.get(`https://randomstr.justyy.workers.dev/api/random/?cached&n=${rangeValue}&x=${x}&hash=e3fc616bc43cc4d3540569bce2e1ffcc&_=1661820987422`, { withCredentials: false, })
        setNewPassword((prev) => ({ ...prev, password: rand.data }));
    }

    // Toggle password visibility
    const [passwordType, setPasswordType] = useState('password')
    const togglePasswordType = (e) => {
        e.preventDefault()
        setPasswordType(prev => (prev === 'text') ? 'password' : 'text')
    }

    return (
        <div className={`${(addMenu === 'hidden' ? 'hidden' : '')} lg:block relative z-50`}>
            <nav
                className={`fixed top-0 right-0 bottom-0 flex flex-col w-3/4 lg:w-96 sm:max-w-md pt-6 pb-8 bg-white dark:bg-gray-800 border-l dark:border-gray-700 overflow-y-auto ${(addMenu === 'hidden' ? 'hidden' : '')}`}>
                <div className="px-4 pb-6">
                    <form>
                        <div className="mb-6">
                            <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="url">URL</label>
                            <input
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                                type="text" name="url" placeholder="Discord" id="url" value={newPassword.url} onChange={handleChange} />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="username">Username</label>
                            <input
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                                type="text" name="username" placeholder="JohnSmith" id="username" value={newPassword.username} onChange={handleChange} />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                                type="email" name="email" placeholder="john.smith@email.com" id="email" value={newPassword.email} onChange={handleChange} />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="password">Password</label>
                            <div className="flex flex-wrap">
                                <input
                                    className="w-5/6 px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                                    type={passwordType} name="password" placeholder="Enter your password" id="password" value={newPassword.password} onChange={handleChange} />
                                <div className="flex w-1/6 pl-2 mb-2">
                                    <button className="flex w-full justify-center items-center bg-gray-50 dark:bg-gray-900 dark:border dark:border-white rounded" onClick={togglePasswordType}>
                                        {passwordType === 'password' ? (
                                            <svg className="w-6 h-6" fill="none" stroke={(colorTheme === 'dark') ? '#fff' : '#382CDD'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6" fill="none" stroke={(colorTheme === 'dark') ? '#fff' : '#382CDD'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex text-center w-full mb-2">
                                <input className="w-5/6" type="range" name="field-name" value={rangeValue} min="8" max="20" onChange={handleChangeRangeValue} />
                                <output id="rangevalue" className="w-1/6 font-medium dark:text-white">{rangeValue}</output>
                            </div>
                            <div className="flex text-center w-full mb-2">
                                <label className="px-1 text-sm dark:text-white font-medium">
                                    <input className="w-8 h-6" type="checkbox" name="chk-boxes-1" value="1" />
                                    <span className="ml-2">Uppercase</span>
                                </label>
                                <label className="px-1 text-sm dark:text-white font-medium">
                                    <input className="w-8 h-6" type="checkbox" name="chk-boxes-3" value="4" />
                                    <span className="ml-2">Numbers</span>
                                </label>
                                <label className="px-1 text-sm dark:text-white font-medium">
                                    <input className="w-8 h-6" type="checkbox" name="chk-boxes-4" value="8" />
                                    <span className="ml-2">Symbols</span>
                                </label>
                                <button className="flex w-1/6 ml-6 justify-center items-center bg-gray-50 dark:bg-gray-900 dark:border dark:border-white rounded" onClick={generateRandomPassword}>
                                    <svg className="w-6 h-6" fill="none" stroke={(colorTheme === 'dark') ? '#fff' : '#382CDD'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="notes">Notes</label>
                            <textarea
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                                name="field-name" rows="5" placeholder="Write something..." id="notes" value={newPassword.notes} onChange={handleChange} ></textarea>
                        </div>
                        <button onClick={handleClick}
                            className="inline-block w-full px-6 py-3 font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded transition duration-200"
                            type="submit">Add Password</button>
                    </form>
                </div>
                <div className="px-4">
                    <button onClick={toggleAddMenu}
                        className="inline-block w-full px-6 py-3 font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded transition duration-200"
                        type="submit">Close</button>
                </div>
            </nav>
        </div>
    )
}

export default AddWebPassword